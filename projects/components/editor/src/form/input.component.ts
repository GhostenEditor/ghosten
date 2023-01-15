import { Component } from '@angular/core';
import { EditAbstractComponent } from '@ghosten/editor';
import { InputProperty } from '@ghosten/components';

@Component({
  selector: 'gt-input',
  host: {
    class: 'd-block',
  },
  template: `
    <label class="form-label" *ngIf="gtNode.property.showLabel">{{ gtNode.property.labelText }}</label>
    <div class="input-group has-validation" [ngClass]="property.inputSize">
      <button *ngIf="property.inputType === 'number'" type="button" class="btn btn-outline-secondary">-</button>
      <input
        [type]="property.inputType"
        class="form-control"
        [style]="property.inputType"
        [ngClass]="gtNode.property.inputSize"
        [attr.placeholder]="gtNode.property.placeholder"
        [disabled]="gtNode.property.disabled"
        [readonly]="gtNode.property.readonly"
      />
      <button *ngIf="property.inputType === 'number'" type="button" class="btn btn-outline-secondary">+</button>
    </div>
  `,
})
export class InputComponent extends EditAbstractComponent<InputProperty> {}
