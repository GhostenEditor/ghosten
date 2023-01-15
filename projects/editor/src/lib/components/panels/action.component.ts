import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ChangeDetectorRef, Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { GtNode, IGtNode } from '@ghosten/common';

import { Subscription, fromEvent } from 'rxjs';

import { ChangeActionEndEvent } from '../../classes';
import { DropdownItem } from '../../modules';
import { EventsService } from '../../services';
import { GT_NODE_INTERNAL_CONFIG_LIST_MAP } from '../../injectors-internal';

@Component({
  selector: 'gt-panel-action',
  template: ` <div
      *ngFor="let actionGroup of actions"
      cdkDropList
      (cdkDropListDropped)="dropped($event, actionGroup.actions)"
    >
      <p>{{ actionGroup.type }}</p>
      <div class="card mb-3 transform" cdkDrag cdkDragLockAxis="y" *ngFor="let action of actionGroup.actions">
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
              <button class="btn btn-light btn-sm" (click)="removeAction(action)">
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
export class ActionComponent implements OnInit, OnDestroy {
  public _gtNode: GtNode;
  public actionTypes: DropdownItem[];
  public actions: { type: string; actions: IGtNode.Action[] }[];

  @Input() set gtNode(gtNode: GtNode) {
    this.updateGtNode(gtNode);
  }

  get gtNode() {
    return this._gtNode;
  }

  private subscription = Subscription.EMPTY;

  constructor(
    @Inject(GT_NODE_INTERNAL_CONFIG_LIST_MAP)
    private configMap: Map<string, Map<string, any>>,
    private cdr: ChangeDetectorRef,
    private events: EventsService,
  ) {}

  ngOnInit() {
    this.subscription = fromEvent<ChangeActionEndEvent>(this.events.target, 'changeactionend').subscribe(event => {
      const { action, script } = event;
      const previousAction = { ...action };
      action.script = script;
      if (!this.gtNode.action.hasOwnProperty(action.type)) {
        this.gtNode.action[action.type] = [action];
        this.events.CHANGE_ACTION.next({
          gtNode: this.gtNode,
          type: 'add',
          action,
          previousAction: null,
        });
      } else if (this.gtNode.action[action.type].indexOf(action) === -1) {
        this.gtNode.action[action.type].push(action);
        this.events.CHANGE_ACTION.next({
          gtNode: this.gtNode,
          type: 'add',
          action,
          previousAction: null,
        });
      } else {
        this.events.CHANGE_ACTION.next({
          gtNode: this.gtNode,
          type: 'update',
          action,
          previousAction,
        });
      }

      this.updateGtNode(this.gtNode);
    });
  }

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
    this.actions = Object.entries(this.gtNode.action).map(([actionType, actions]) => ({
      type: actionType,
      actions,
    }));
    this.cdr.detectChanges();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addAction(action: DropdownItem) {
    if (
      this.events.changeActionStart({
        desc: null,
        script: '',
        scopes: [],
        type: action.text,
        editable: true,
      })
    ) {
      // this.events.changeActionEnd();
    }
  }

  editAction(action: IGtNode.Action) {
    if (this.events.changeActionStart(action)) {
      // this.events.changeActionEnd();
    }
  }

  removeAction(action: IGtNode.Action) {
    const actions = this.gtNode.action[action.type];
    const index = actions.indexOf(action);
    actions.splice(index, 1);
    this.updateGtNode(this.gtNode);
    this.events.CHANGE_ACTION.next({
      gtNode: this.gtNode,
      type: 'remove',
      action,
      previousAction: null,
    });
  }

  dropped(event: CdkDragDrop<void>, actions: IGtNode.Action[]) {
    moveItemInArray(actions, event.previousIndex, event.currentIndex);
  }
}
