import { Component } from '@angular/core';
import { FormAbstractComponent } from '@ghosten/renderer';
import { RadioProperty } from '@ghosten/components';

@Component({
  selector: 'gt-radio',
  template: `
    <ng-container *ngIf="formGroup" [formGroup]="formGroup">
      <div
        class="form-check"
        *ngFor="let option of property.options"
        [class.form-check-inline]="property.layout === 'form-check-inline'"
        [class.form-check-reverse]="property.layout === 'form-check-reverse'"
      >
        <input
          class="form-check-input"
          [type]="property.inputType"
          [formControlName]="property.name"
          [value]="option.value"
          [id]="gtNode.id + '-' + option.value"
        />
        <label
          class="form-check-label"
          [for]="gtNode.id + '-' + option.value"
          *ngIf="property.showLabel"
          >{{ option.label }}</label
        >
      </div>
    </ng-container>
    <ng-container *ngIf="!formGroup">
      <div
        class="form-check"
        *ngFor="let option of property.options"
        [class.form-check-inline]="property.layout === 'form-check-inline'"
        [class.form-check-reverse]="property.layout === 'form-check-reverse'"
      >
        <input
          class="form-check-input"
          [type]="property.inputType"
          [name]="property.name"
          [value]="option.value"
          [(ngModel)]="property.value"
          [id]="gtNode.id + '-' + option.value"
        />
        <label
          class="form-check-label"
          [for]="gtNode.id + '-' + option.value"
          *ngIf="property.showLabel"
          >{{ option.label }}</label
        >
      </div>
    </ng-container>
  `,
})
export class RadioComponent extends FormAbstractComponent<RadioProperty> {}
