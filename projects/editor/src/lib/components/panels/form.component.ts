import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { DataBinding } from '@ghosten/common';
import { Subscription } from 'rxjs';

export interface PanelFormItem {
  name: string;
  type: string;
  label?: string;
  expression?: boolean;
  value?: any;
  disabled?: boolean;
  validators?: ValidatorFn | ValidatorFn[];
  control?: FormControl;
  options?: { label: string; value: any }[];
}

@Component({
  selector: 'gt-panel-form',
  template: `
    <form [formGroup]="formGroup">
      <div class="mb-3" *ngFor="let formItem of formList">
        <label class="form-label">{{ formItem.label || formItem.name }}</label>
        <div class="input-group input-group-sm has-validation">
          <div class="form-control" *ngIf="isDataBinding(formItem.control!.value)">~~DataBinding~~</div>
          <ng-container *ngIf="!isDataBinding(formItem.control!.value)">
            <ng-container [ngSwitch]="formItem.type">
              <input
                *ngSwitchCase="'text'"
                type="text"
                class="form-control"
                [formControlName]="formItem.name"
                [class.is-invalid]="formItem.control!.touched && formItem.control!.invalid"
              />
              <input
                *ngSwitchCase="'number'"
                type="number"
                class="form-control"
                [formControlName]="formItem.name"
                [class.is-invalid]="formItem.control!.touched && formItem.control!.invalid"
              />
              <select
                *ngSwitchCase="'select'"
                class="form-select"
                [formControlName]="formItem.name"
                [class.is-invalid]="formItem.control!.touched && formItem.control!.invalid"
              >
                <option *ngFor="let option of formItem.options" [value]="option.value">
                  {{ option.label }}
                </option>
              </select>
            </ng-container>
          </ng-container>

          <button
            type="button"
            *ngIf="formItem.control!.value !== null"
            class="btn btn-outline-secondary"
            (click)="formItem.control!.reset()"
          >
            <i class="gt-icon">close</i>
          </button>
          <button
            type="button"
            *ngIf="formItem.expression"
            class="btn btn-outline-secondary"
            (click)="expressionClick.emit(formItem)"
          >
            f(x)
          </button>
          <div class="invalid-feedback">
            {{ formGroup.get(formItem.name)!.errors | json }}
          </div>
        </div>
      </div>
    </form>
  `,
})
export class FormComponent implements OnInit, OnDestroy {
  private _formList: PanelFormItem[];
  public formGroup = new FormGroup({});
  private subscription = Subscription.EMPTY;

  @Input() set value(value: any) {
    this.formGroup.setValue(value);
  }

  @Input() get formList(): PanelFormItem[] {
    return this._formList;
  }

  set formList(formList: PanelFormItem[]) {
    Object.keys(this.formGroup.controls).forEach(name => this.formGroup.removeControl(name));
    this._formList = formList.map(formItem => {
      const formControl = new FormControl(
        {
          value: formItem.value !== undefined ? formItem.value : null,
          disabled: formItem.disabled,
        },
        formItem.validators,
      );
      this.formGroup.addControl(formItem.name, formControl);
      return { ...formItem, control: formControl };
    });
  }

  @Output() expressionClick = new EventEmitter<PanelFormItem>();
  @Output() formChange = new EventEmitter<FormGroup>();

  constructor() {}

  ngOnInit() {
    this.subscription = this.formGroup.valueChanges.subscribe(() => this.formChange.emit(this.formGroup));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  isDataBinding(value: any) {
    return value instanceof DataBinding;
  }
}
