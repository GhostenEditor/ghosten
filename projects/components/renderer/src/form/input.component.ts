import { Component } from '@angular/core';
import { FormAbstractComponent } from '@ghosten/renderer';
import { InputProperty } from '@ghosten/components';

import { fromEvent, takeUntil } from 'rxjs';

@Component({
  selector: 'gt-input',
  host: {
    class: 'd-block',
  },
  template: `
    <label [for]="'config-form-node-' + gtNode.id" class="form-label" *ngIf="gtNode.property.showLabel">{{
      gtNode.property.labelText
    }}</label>
    <div class="input-group has-validation" [ngClass]="property.inputSize">
      <ng-container *ngIf="formGroup" [formGroup]="formGroup">
        <button
          *ngIf="property.inputType === 'number'"
          type="button"
          class="btn btn-outline-secondary"
          (click)="spin(-1)"
        >
          -
        </button>
        <input
          type="text"
          class="form-control"
          [type]="property.inputType"
          [id]="'config-form-node-' + gtNode.id"
          [attr.placeholder]="gtNode.property.placeholder"
          [class.is-valid]="control.touched && control.valid"
          [class.is-invalid]="control.touched && control.invalid"
          [readonly]="gtNode.property.readonly"
          [formControlName]="gtNode.property.name"
          (change)="onEvent('change')"
          (blur)="onEvent('blur')"
        />
        <button
          *ngIf="property.inputType === 'number'"
          type="button"
          class="btn btn-outline-secondary"
          (click)="spin(1)"
        >
          +
        </button>
        <div [class.valid-feedback]="control.valid" [class.invalid-feedback]="control.invalid">
          {{ errorText(control.errors) }}
        </div>
      </ng-container>
      <ng-container *ngIf="!formGroup">
        <button
          *ngIf="property.inputType === 'number'"
          type="button"
          class="btn btn-outline-secondary"
          (click)="spin(-1)"
        >
          -
        </button>
        <input
          type="text"
          class="form-control"
          #input
          #ngModel="ngModel"
          [id]="'config-form-node-' + gtNode.id"
          [type]="property.inputType"
          [attr.placeholder]="gtNode.property.placeholder"
          [class.is-valid]="ngModel.control.touched && ngModel.control.valid"
          [class.is-invalid]="ngModel.control.touched && ngModel.control.invalid"
          [readonly]="gtNode.property.readonly"
          [(ngModel)]="gtNode.property.value"
          (change)="onEvent('change')"
          (blur)="onEvent('blur')"
          (focus)="onFocus($event, input)"
        />
        <button
          *ngIf="property.inputType === 'number'"
          type="button"
          class="btn btn-outline-secondary"
          (click)="spin(1)"
        >
          +
        </button>
        <div [class.valid-feedback]="ngModel.control.valid" [class.invalid-feedback]="ngModel.control.invalid">
          {{ errorText(ngModel.control.errors) }}
        </div>
      </ng-container>
    </div>
  `,
})
export class InputComponent extends FormAbstractComponent<InputProperty> {
  onFocus(event: FocusEvent, target: HTMLInputElement) {
    if (this.property.inputType === 'number') {
      fromEvent<WheelEvent>(target, 'wheel')
        .pipe(takeUntil(fromEvent(target, 'blur')))
        .subscribe(event => {
          event.preventDefault();
          event.stopPropagation();
          const value = this.property.value;
          const toNumber = value ? +value : 0;
          if (!Number.isNaN(toNumber)) {
            this.property.value = toNumber - Math.sign(event.deltaY) * Math.ceil(Math.abs(event.deltaY) / 100);
          }
        });
    }
  }

  spin(v: number) {
    const value = this.control.value;
    const toNumber: number = value ? +value : 0;
    if (!Number.isNaN(toNumber)) {
      this.control.setValue(toNumber + v);
    }
  }
}
