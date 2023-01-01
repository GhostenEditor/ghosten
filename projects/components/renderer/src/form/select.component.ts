import { Component } from '@angular/core';
import { FormAbstractComponent } from '@ghosten/renderer';
import { SelectProperty } from '@ghosten/components';

@Component({
  selector: 'gt-select',
  host: {
    class: 'd-block',
  },
  template: `
    <label class="form-label" *ngIf="gtNode.property.showLabel">{{
      gtNode.property.labelText | dataBinding
    }}</label>
    <div class="input-group has-validation" [ngClass]="property.inputSize">
      <ng-container *ngIf="formGroup" [formGroup]="formGroup">
        <select
          class="form-select"
          [class.is-valid]="control.touched && control.valid"
          [class.is-invalid]="control.touched && control.invalid"
          [formControlName]="gtNode.property.name"
          [multiple]="property.multiple"
        >
          <option [attr.selected]="control.value === null" disabled></option>
          <option
            *ngFor="let option of property.options | dataBinding"
            [attr.value]="option[property.valueField]"
          >
            {{ option[property.labelField] }}
          </option>
        </select>
        <div
          [class.valid-feedback]="control.valid"
          [class.invalid-feedback]="control.invalid"
        >
          {{ errorText(control.errors) }}
        </div>
      </ng-container>
      <ng-container *ngIf="!formGroup">
        <select
          #ngModel="ngModel"
          class="form-select"
          [class.is-valid]="ngModel.control.touched && ngModel.control.valid"
          [class.is-invalid]="
            ngModel.control.touched && ngModel.control.invalid
          "
          [disabled]="gtNode.property.disabled | dataBinding"
          [(ngModel)]="property.value"
          [multiple]="property.multiple"
        >
          <option
            value=""
            [attr.selected]="ngModel.control.value === null"
          ></option>
          <option
            *ngFor="let option of property.options | dataBinding"
            [attr.value]="option.value"
          >
            {{ option.label }}
          </option>
        </select>
        <div
          [class.valid-feedback]="ngModel.control.valid"
          [class.invalid-feedback]="ngModel.control.invalid"
        >
          {{ errorText(ngModel.control.errors) }}
        </div>
      </ng-container>
    </div>
  `,
})
export class SelectComponent extends FormAbstractComponent<SelectProperty> {}
