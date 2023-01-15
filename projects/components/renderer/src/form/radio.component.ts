import { Component } from '@angular/core';
import { FormAbstractComponent } from '@ghosten/renderer';
import { RadioProperty } from '@ghosten/components';

@Component({
  selector: 'gt-radio',
  template: `
    <label class="form-label" *ngIf="property.showLabel">{{ property.labelText }}</label>
    <div class="has-validation">
      <ng-container *ngIf="formGroup" [formGroup]="formGroup">
        <div
          class="form-check"
          *ngFor="let option of property.options; let i = index"
          [class.form-check-inline]="property.layout === 'config-form-check-inline'"
          [class.form-check-reverse]="property.layout === 'config-form-check-reverse'"
        >
          <input
            class="form-check-input"
            type="radio"
            [formControlName]="property.name"
            [value]="option.value"
            [id]="gtNode.id + '-' + option.value"
            [class.is-valid]="control.touched && control.valid"
            [class.is-invalid]="control.touched && control.invalid"
          />
          <label class="form-check-label" [for]="gtNode.id + '-' + option.value" *ngIf="option.label">{{
            option.label
          }}</label>
          <div
            *ngIf="i === property.options.length - 1"
            [class.valid-feedback]="control.valid"
            [class.invalid-feedback]="control.invalid"
          >
            {{ control.errors | json }}
          </div>
        </div>
      </ng-container>
      <ng-container *ngIf="!formGroup">
        <div
          class="form-check"
          *ngFor="let option of property.options"
          [class.form-check-inline]="property.layout === 'config-form-check-inline'"
          [class.form-check-reverse]="property.layout === 'config-form-check-reverse'"
        >
          <input
            class="form-check-input"
            type="radio"
            #ngModel="ngModel"
            [class.is-valid]="ngModel.control.touched && ngModel.control.valid"
            [class.is-invalid]="ngModel.control.touched && ngModel.control.invalid"
            [name]="property.name || gtNode.id"
            [(ngModel)]="property.value"
            [value]="option.value"
            [id]="gtNode.id + '-' + option.value"
          />
          <label class="form-check-label" [for]="gtNode.id + '-' + option.value" *ngIf="option.label">{{
            option.label
          }}</label>
          <div [class.valid-feedback]="ngModel.control.valid" [class.invalid-feedback]="ngModel.control.invalid">
            {{ ngModel.control.errors | json }}
          </div>
        </div>
      </ng-container>
    </div>
  `,
})
export class RadioComponent extends FormAbstractComponent<RadioProperty> {}
