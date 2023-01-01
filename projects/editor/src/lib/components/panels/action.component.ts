import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ChangeDetectorRef, Component, Inject, Input } from '@angular/core';
import { GtNode, IGtNode } from '@ghosten/common';
import { DropdownItem } from '../../directives/dropdown/dropdown.component';
import { GT_NODE_INTERNAL_CONFIG_LIST_MAP } from '../../injectors-internal';
import { PROPERTY_EDIT_EVENT } from '../../injectors';

@Component({
  selector: 'gt-panel-action',
  template: ` <div
      *ngFor="let actionGroup of actions"
      cdkDropList
      (cdkDropListDropped)="dropped($event, actionGroup.actions)"
    >
      <p>{{ actionGroup.type }}</p>
      <div
        class="card mb-3 transform"
        cdkDrag
        cdkDragLockAxis="y"
        *ngFor="let action of actionGroup.actions"
      >
        <div class="card-header">
          <div class="d-flex justify-content-between">
            {{ action.type }}
            <div class="btn-group btn-group-sm">
              <button class="btn btn-light btn-sm" cdkDragHandle>
                <i class="gt-icon">list</i>
              </button>
              <button class="btn btn-light btn-sm" (click)="editAction(action)">
                <i class="gt-icon">edit</i>
              </button>
              <button
                class="btn btn-light btn-sm"
                (click)="removeAction(action)"
              >
                <i class="gt-icon">close</i>
              </button>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="mb-3">
            <label class="form-label">Description</label>
            <input type="text" class="form-control" [(ngModel)]="action.desc" />
          </div>
        </div>
      </div>
    </div>
    <div class="d-grid gap-2 mt-2">
      <button
        class="btn btn-light"
        i18n="Button: Add"
        gt-dropdown
        [items]="actionTypes"
        (itemClick)="addAction($event)"
      >
        添加
      </button>
    </div>`,
})
export class ActionComponent {
  public _gtNode: GtNode;
  public actionTypes: DropdownItem[];
  public actions: { type: string; actions: IGtNode.Action[] }[];

  @Input() set gtNode(gtNode: GtNode) {
    this.updateGtNode(gtNode);
  }

  get gtNode() {
    return this._gtNode;
  }

  constructor(
    @Inject(GT_NODE_INTERNAL_CONFIG_LIST_MAP)
    private configMap: Map<string, Map<string, any>>,
    @Inject(PROPERTY_EDIT_EVENT) public editEvent: any,
    private cdr: ChangeDetectorRef,
  ) {}

  updateGtNode(gtNode: GtNode) {
    const defaultConfig = this.configMap.get(gtNode.type);
    if (defaultConfig) {
      const defaultActions = defaultConfig.get('action');
      if (defaultActions) {
        this.actionTypes = Object.keys(defaultActions).map(actionType => ({
          text: actionType,
        }));
      } else {
        this.actionTypes = [];
      }
    } else {
      this.actionTypes = [];
    }
    this._gtNode = gtNode;
    this.actions = Object.entries(this.gtNode.action).map(
      ([actionType, actions]) => ({
        type: actionType,
        actions,
      }),
    );
    this.cdr.detectChanges();
  }

  addAction(action: DropdownItem) {
    this.editEvent.forEach((func: any) => {
      if (func) {
        func({
          gtNode: this.gtNode,
          type: 'action',
          args: [],
          cb: (script: string) => {
            if (!this.gtNode.action.hasOwnProperty(action.text)) {
              this.gtNode.action[action.text] = [];
            }
            this.gtNode.action[action.text].push({
              type: action.text,
              desc: null,
              script,
              scopes: [],
            });
            this.updateGtNode(this.gtNode);
          },
        });
      }
    });
  }

  editAction(action: IGtNode.Action) {
    this.editEvent.forEach((func: any) => {
      if (func) {
        func({
          gtNode: this.gtNode,
          type: 'action',
          args: [action.script],
          cb: (script: string) => {
            action.script = script;
          },
        });
      }
    });
  }

  removeAction(action: IGtNode.Action) {
    const actions = this.gtNode.action[action.type];
    const index = actions.indexOf(action);
    actions.splice(index, 1);
    this.updateGtNode(this.gtNode);
  }

  dropped(event: CdkDragDrop<void>, actions: IGtNode.Action[]) {
    moveItemInArray(actions, event.previousIndex, event.currentIndex);
  }
}
