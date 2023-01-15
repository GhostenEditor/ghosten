import { Component } from '@angular/core';
import { EditAbstractComponent } from '@ghosten/editor';
import { SelectProperty } from '@ghosten/components';

@Component({
  selector: 'gt-select',
  host: {
    class: 'd-block',
  },
  template: `
    <label class="form-label" *ngIf="gtNode.property.showLabel">{{ property.labelText | dataBinding }}</label>
    <div class="input-group has-validation" [ngClass]="property.inputSize">
      <select class="form-select" [ngClass]="property.inputSize" [disabled]="property.disabled"></select>
    </div>
  `,
})
export class SelectComponent extends EditAbstractComponent<SelectProperty> {}
