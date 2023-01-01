import { Component } from '@angular/core';
import { EditAbstractComponent } from '@ghosten/editor';
import { InputProperty } from '@ghosten/components';

@Component({
  selector: 'gt-input',
  host: {
    class: 'd-block',
  },
  template: `
    <label class="form-label" *ngIf="gtNode.property.showLabel">{{
      gtNode.property.labelText
    }}</label>
    <div class="input-group has-validation" [ngClass]="property.inputSize">
      <button
        *ngIf="property.inputType === 'number'"
        type="button"
        class="btn btn-outline-secondary"
      >
        -
      </button>
      <input
        type="text"
        class="form-control"
        [style]="property.inputType"
        [ngClass]="gtNode.property.inputSize"
        [attr.placeholder]="gtNode.property.placeholder"
        [disabled]="gtNode.property.disabled"
        [readonly]="gtNode.property.readonly"
      />
      <button
        *ngIf="property.inputType === 'number'"
        type="button"
        class="btn btn-outline-secondary"
      >
        +
      </button>
    </div>
  `,
})
export class InputComponent extends EditAbstractComponent<InputProperty> {
  /*@HostBinding('class') get className() {
    return [
      'form-control',
      'gt-node',
      'isDraggable',
      this.gtNode.property.inputSize,
    ].join(' ');
  }

  @HostBinding('disabled') get disabled() {
    return this.gtNode.property.disabled;
  }
  @HostBinding('placeholder') get placeholder() {
    return this.gtNode.property.placeholder;
  }
  @HostBinding('readonly') get readonly() {
    return this.gtNode.property.readonly;
  }*/
}
