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

import { DataBinding, GtNode, IGtNode } from '@ghosten/common';
import { OpenDialogEvent } from './types';
import { PanelFormItem } from './form.component';

@Component({
  selector: 'gt-panel-variable',
  template: ` <div class="card">
    <div class="card-header">
      <div class="card-title" i18n="Component Variable Name">组件变量名</div>
      <input
        type="text"
        class="form-control"
        [(ngModel)]="variableName"
        (ngModelChange)="variableNameChange()"
      />
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" *ngFor="let variable of variables">
        <div *ngIf="variable !== editingVariable">
          <div class="mb-3">
            <label class="form-label" i18n="Variable Name">变量名</label>
            <div class="form-control">{{ variable.name }}</div>
          </div>
          <div class="mb-3">
            <label class="form-label" i18n="Data Type">数据类型</label>
            <div class="form-control">{{ variable.type }}</div>
          </div>
          <div class="mb-3">
            <label class="form-label" i18n="Value">变量值</label>
            <div class="form-control">{{ variable.value }}</div>
          </div>
          <button
            type="button"
            class="btn btn-link"
            i18n="Button: Edit"
            (click)="editingVariable = variable"
          >
            修改
          </button>
          <button
            type="button"
            class="btn btn-link"
            i18n="Button: Remove"
            (click)="removeVariable(variable)"
          >
            删除
          </button>
        </div>
        <div *ngIf="variable === editingVariable">
          <gt-panel-form
            [formList]="formList"
            [value]="variable"
            #editForm
            (expressionClick)="editExpression($event)"
          ></gt-panel-form>
          <button
            type="button"
            class="btn btn-link"
            i18n="Button: Finish"
            (click)="finishEdit(editForm.formGroup, variable)"
          >
            完成
          </button>
        </div>
      </li>
      <li class="list-group-item bg-secondary-subtle">
        <gt-panel-form
          [formList]="formList"
          #form
          (expressionClick)="editExpression($event)"
        ></gt-panel-form>
        <button
          type="button"
          class="btn btn-link"
          i18n="Button: Add"
          (click)="addVariable(form.formGroup)"
        >
          增加
        </button>
      </li>
    </ul>
  </div>`,
})
export class VariableComponent {
  public _gtNode: GtNode;
  public variables: IGtNode.Variable[];
  public variableName: string | null;
  public editingVariable: IGtNode.Variable | null = null;
  @ViewChild('editTemplate', { static: true }) editTemplate: TemplateRef<any>;
  @Output() openDialog = new EventEmitter<OpenDialogEvent>();

  @Input() set gtNode(gtNode: GtNode) {
    this._gtNode = gtNode;
    this.variableName = gtNode.variableName;
    this.variables = gtNode.variable;
  }

  get gtNode() {
    return this._gtNode;
  }

  formList: PanelFormItem[] = [
    {
      label: '变量名',
      name: 'name',
      type: 'text',
      validators: Validators.required,
    },
    {
      label: '数据类型',
      name: 'type',
      type: 'select',
      validators: Validators.required,
      options: [
        { label: 'Boolean', value: 'Boolean' },
        { label: 'String', value: 'String' },
        { label: 'Number', value: 'Number' },
        { label: 'Null', value: 'Null' },
      ],
    },
    {
      label: '变量值',
      name: 'value',
      type: 'text',
      validators: Validators.required,
      expression: true,
    },
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  variableNameChange() {
    this.gtNode.variableName = this.variableName;
  }

  addVariable(form: FormGroup) {
    if (form.invalid) {
      Object.values(form.controls).forEach(control => control.markAsTouched());
      return;
    }
    const variable = this.normalizeVariable(form.value);
    if (variable) {
      if (this.gtNode.variable.find(({ name }) => name === variable.name)) {
        form.get('name')?.setErrors({ text: '变量名冲突' });
        return;
      }
      this.gtNode.variable.push(variable);
      form.reset();
    }
  }

  normalizeVariable(variable: any): IGtNode.Variable | null {
    if (variable.value instanceof DataBinding) {
      variable.type = 'DataBinding';
    }
    switch (variable.type) {
      case 'Boolean':
        variable.value = !!variable.value;
        break;
      case 'String':
        variable.value = String(variable.value);
        break;
      case 'Number':
        variable.value = Number(variable.value);
        break;
      case 'Null':
        variable.value = null;
        break;
      case 'DataBinding':
        break;
      default:
        return null;
    }
    return { ...variable };
  }

  removeVariable(variable: IGtNode.Variable) {
    this.gtNode.variable.splice(this.gtNode.variable.indexOf(variable), 1);
  }

  finishEdit(form: FormGroup, variable: IGtNode.Variable) {
    if (form.invalid) {
      Object.values(form.controls).forEach(control => control.markAsTouched());
      return;
    }
    const newVariable = this.normalizeVariable(form.value);
    if (newVariable) {
      if (
        this.gtNode.variable.find(
          _variable =>
            _variable !== variable && _variable.name === newVariable.name,
        )
      ) {
        form.get('name')?.setErrors({ text: '变量名冲突' });
        return;
      }
      const index = this.gtNode.variable.indexOf(variable);
      this.gtNode.variable.splice(index, 1, newVariable);
      this.editingVariable = null;
    }
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
}
