import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

import { DataBinding, GtNode } from '@ghosten/common';

import { DropdownItem } from '../../directives/dropdown/dropdown.component';
import { OpenDialogEvent } from './types';
import { PanelCard } from './card.component';
import { PanelFormItem } from './form.component';

const directiveTypes: DropdownItem[] = [{ text: 'if' }, { text: 'for' }];

interface DirectiveItem extends PanelCard {
  title: string;
  needTemplate?: boolean;
  form: {
    input?: PanelFormItem[];
    output?: PanelFormItem[];
    export?: PanelFormItem[];
  };
  value: Record<string, any>;
}

@Component({
  selector: 'gt-panel-directive',
  template: `
    <div cdkDropList (cdkDropListDropped)="dropped($event)">
      <div
        class="card mb-3 transform"
        *ngFor="let directive of directives"
        cdkDrag
        cdkDragLockAxis="y"
      >
        <div class="card-header">
          <div class="d-flex justify-content-between">
            {{ directive.title }}
            <div class="btn-group btn-group-sm">
              <button class="btn btn-light btn-sm" cdkDragHandle>
                <i class="gt-icon">list</i>
              </button>
              <button
                class="btn btn-light btn-sm"
                (click)="removeValidator(directive)"
              >
                <i class="gt-icon">close</i>
              </button>
            </div>
          </div>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item" *ngIf="directive.form.input">
            <h6 class="card-title text-center">Input</h6>
            <gt-panel-form
              [formList]="directive.form.input"
              (formChange)="formChange($event, directive, 'input')"
              (expressionClick)="editExpression($event)"
            ></gt-panel-form>
          </li>
          <li class="list-group-item" *ngIf="directive.form.output">
            <h6 class="card-title text-center">Output</h6>
            <gt-panel-form
              [formList]="directive.form.output"
              (formChange)="formChange($event, directive, 'output')"
              (expressionClick)="editExpression($event)"
            ></gt-panel-form>
          </li>
        </ul>
      </div>
      <!--<gt-panel-card
        *ngFor="let directive of directives"
        [item]="directive"
        (removeItem)="removeValidator(directive)"
      >
        <div class="card-title">Input</div>
        <gt-properties-form
          [formList]="directive.form.input"
          (formChange)="formChange(directive, 'input', $event)"
        ></gt-properties-form>
        <div class="card-title">Output</div>
        <gt-properties-form
          [formList]="directive.form.output"
          (formChange)="formChange(directive, 'output', $event)"
        ></gt-properties-form>
        <div class="card-title">Export</div>
        <gt-properties-form
          [formList]="directive.form.export"
          (formChange)="formChange(directive, 'export', $event)"
        ></gt-properties-form>
      </gt-panel-card>-->
    </div>
    <div class="d-grid gap-2 mt-2">
      <button
        class="btn btn-light"
        i18n="Button: Add"
        #dropdownButton
        gt-dropdown
        [items]="directiveTypes"
        (itemClick)="addDirective($event.text)"
      >
        添加
      </button>
    </div>
  `,
})
export class PanelDirectiveComponent {
  public _gtNode: GtNode;

  @Input() set gtNode(gtNode: GtNode) {
    this.directives = gtNode.directive!.map(({ type, value }) =>
      this.getDirective(type, value),
    );
    this._gtNode = gtNode;
  }

  get gtNode() {
    return this._gtNode;
  }

  @Output() openDialog = new EventEmitter<OpenDialogEvent>();

  @ViewChild('dropdown', { static: true }) dropdown: TemplateRef<HTMLElement>;
  directives: DirectiveItem[] = [];
  directiveTypes = directiveTypes;

  constructor(private cdr: ChangeDetectorRef) {}

  formChange(
    formGroup: FormGroup,
    directive: DirectiveItem,
    type: 'input' | 'output',
  ) {
    if (formGroup.valid) {
      directive.value[type] = formGroup.value;
      this.updateGtNodeValidator();
    }
  }

  getDirective(type: string, value: Record<string, any> = {}): DirectiveItem {
    switch (type) {
      case 'if':
        return {
          title: type,
          form: {
            input: [
              {
                type: 'text',
                name: 'default',
                value: value.input?.default,
                expression: true,
                validators: Validators.required,
              },
            ],
          },
          value: {},
        };
      case 'for':
        return {
          title: type,
          form: {
            input: [
              {
                type: 'text',
                name: 'default',
                value: value.input?.default,
                expression: true,
                validators: Validators.required,
              },
            ],
            output: [
              {
                type: 'text',
                name: 'index',
                value: value.output?.index,
              },
              {
                type: 'text',
                name: 'item',
                value: value.output?.item,
              },
            ],
            export: [],
          },
          value: {},
        };
      default:
        throw new Error();
    }
  }

  addDirective(type: string) {
    this.directives.push(this.getDirective(type));
    this.updateGtNodeValidator();
  }

  removeValidator(directive: DirectiveItem) {
    this.directives.splice(this.directives.indexOf(directive), 1);
    this.updateGtNodeValidator();
  }

  updateGtNodeValidator() {
    this.gtNode.directive = this.directives.map(directive => ({
      needTemplate: true,
      type: directive.title,
      value: directive.value,
    }));
  }

  editExpression(formItem: PanelFormItem) {
    const expressionValue =
      formItem.control!.value instanceof DataBinding
        ? formItem.control!.value.data
        : undefined;
    this.openDialog.emit({
      type: 'expression',
      args: [expressionValue],
      cb: expression => {
        formItem.control!.setValue(new DataBinding(expression));
        this.cdr.markForCheck();
      },
    });
  }

  dropped(event: CdkDragDrop<void>) {
    moveItemInArray(this.directives, event.previousIndex, event.currentIndex);
    this.updateGtNodeValidator();
  }
}
