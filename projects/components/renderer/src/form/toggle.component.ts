import { Component } from '@angular/core';
import { FormAbstractComponent } from '@ghosten/renderer';
import { ToggleProperty } from '@ghosten/components';

@Component({
  selector: 'gt-toggle',
  template: `
    <div class="input-group has-validation">
      <div class="form-check form-switch">
        <ng-container *ngIf="formGroup" [formGroup]="formGroup">
          <input
            type="checkbox"
            class="form-check-input"
            role="switch"
            [class.is-valid]="control.touched && control.valid"
            [class.is-invalid]="control.touched && control.invalid"
            [id]="'form-node-' + gtNode.id"
            [formControlName]="property.name"
          />
          <label class="form-check-label" [for]="'form-node-' + gtNode.id">{{
            property.labelText
          }}</label>
          <div
            [class.valid-feedback]="control.valid"
            [class.invalid-feedback]="control.invalid"
          >
            {{ errorText(control.errors) }}
          </div>
        </ng-container>
        <ng-container *ngIf="!formGroup">
          <input
            type="checkbox"
            class="form-check-input"
            role="switch"
            #ngModel="ngModel"
            [class.is-valid]="ngModel.control.touched && ngModel.control.valid"
            [class.is-invalid]="
              ngModel.control.touched && ngModel.control.invalid
            "
            [id]="'form-node-' + gtNode.id"
            [(ngModel)]="property.value"
          />
          <label class="form-check-label" [for]="'form-node-' + gtNode.id">{{
            property.labelText
          }}</label>
          <div
            [class.valid-feedback]="ngModel.control.valid"
            [class.invalid-feedback]="ngModel.control.invalid"
          >
            {{ errorText(ngModel.control.errors) }}
          </div>
        </ng-container>
      </div>
    </div>
  `,
})
export class ToggleComponent extends FormAbstractComponent<ToggleProperty> {}
