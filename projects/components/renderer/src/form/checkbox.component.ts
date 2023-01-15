import { Component } from '@angular/core';
import { FormAbstractComponent } from '@ghosten/renderer';
import { RadioProperty } from '@ghosten/components';

@Component({
  selector: 'gt-checkbox',
  template: `
    <ng-container *ngIf="formGroup" [formGroup]="formGroup">
      <label class="form-label" *ngIf="property.showLabel">{{ property.labelText }}</label>
      <div
        class="form-check"
        *ngFor="let option of property.options"
        [class.form-check-inline]="property.layout === 'config-form-check-inline'"
        [class.form-check-reverse]="property.layout === 'config-form-check-reverse'"
      >
        <input
          class="form-check-input"
          type="checkbox"
          [formControlName]="property.name"
          [value]="option.value"
          [id]="gtNode.id + '-' + option.value"
        />
        <label class="form-check-label" [for]="gtNode.id + '-' + option.value" *ngIf="option.label">{{
          option.label
        }}</label>
      </div>
    </ng-container>
    <ng-container *ngIf="!formGroup">
      <label class="form-label" *ngIf="property.showLabel">{{ property.labelText }}</label>
      <div
        class="form-check"
        *ngFor="let option of property.options"
        [class.form-check-inline]="property.layout === 'config-form-check-inline'"
        [class.form-check-reverse]="property.layout === 'config-form-check-reverse'"
      >
        <input
          class="form-check-input"
          type="checkbox"
          [name]="property.name || gtNode.id"
          [(ngModel)]="property.value"
          [value]="option.value"
          [id]="gtNode.id + '-' + option.value"
        />
        <label class="form-check-label" [for]="gtNode.id + '-' + option.value" *ngIf="option.label">{{
          option.label
        }}</label>
      </div>
    </ng-container>
  `,
})
export class CheckboxComponent extends FormAbstractComponent<RadioProperty> {}
