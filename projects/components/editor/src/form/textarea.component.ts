import { Component } from '@angular/core';
import { EditAbstractComponent } from '@ghosten/editor';
import { TextareaProperty } from '@ghosten/components';

@Component({
  selector: 'gt-textarea',
  host: {
    class: 'd-block',
  },
  template: `
    <label class="form-label" *ngIf="gtNode.property.showLabel">{{
      gtNode.property.labelText
    }}</label>
    <div class="input-group has-validation" [ngClass]="property.inputSize">
      <textarea
        class="form-control"
        [rows]="property.textareaRows"
        [placeholder]="gtNode.property.placeholder || ''"
        [disabled]="gtNode.property.disabled"
      ></textarea>
    </div>
  `,
})
export class TextareaComponent extends EditAbstractComponent<TextareaProperty> {}
