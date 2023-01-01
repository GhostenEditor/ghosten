import { Component } from '@angular/core';
import { FormAbstractComponent } from '@ghosten/renderer';

import { TextareaProperty } from '@ghosten/components';

@Component({
  selector: 'gt-textarea',
  host: {
    class: 'd-block',
  },
  template: ` <label class="form-label" *ngIf="gtNode.property.showLabel">{{
      gtNode.property.labelText
    }}</label>
    <div class="input-group has-validation" [ngClass]="property.inputSize">
      <ng-container *ngIf="formGroup" [formGroup]="formGroup">
        <textarea
          class="form-control"
          [class.is-valid]="control.touched && control.valid"
          [class.is-invalid]="control.touched && control.invalid"
          [rows]="gtNode.property.textareaRows"
          [placeholder]="gtNode.property.placeholder || ''"
          [formControlName]="gtNode.property.name"
        ></textarea>
        <div
          [class.valid-feedback]="control.valid"
          [class.invalid-feedback]="control.invalid"
        >
          {{ errorText(control.errors) }}
        </div>
      </ng-container>
      <ng-container *ngIf="!formGroup">
        <textarea
          class="form-control"
          #ngModel="ngModel"
          [class.is-valid]="ngModel.control.touched && ngModel.control.valid"
          [class.is-invalid]="
            ngModel.control.touched && ngModel.control.invalid
          "
          [name]="property.name"
          [rows]="gtNode.property.textareaRows"
          [placeholder]="gtNode.property.placeholder || ''"
          [(ngModel)]="gtNode.property.value"
        ></textarea>
        <div
          [class.valid-feedback]="ngModel.control.valid"
          [class.invalid-feedback]="ngModel.control.invalid"
        >
          {{ errorText(ngModel.control.errors) }}
        </div>
      </ng-container>
    </div>`,
})
export class TextareaComponent extends FormAbstractComponent<TextareaProperty> {}
