import { Component } from '@angular/core';
import { EditAbstractComponent } from '@ghosten/editor';
import { RadioProperty } from '@ghosten/components';

@Component({
  selector: 'gt-radio',
  template: `
    <label class="form-label" *ngIf="property.showLabel">{{ property.labelText }}</label>
    <div>
      <div
        class="form-check"
        *ngIf="!property.options.length"
        [class.form-check-inline]="property.layout === 'config-form-check-inline'"
        [class.form-check-reverse]="property.layout === 'config-form-check-reverse'"
      >
        <input class="form-check-input" [type]="property.inputType" />
        <label class="form-check-label" *ngIf="property.showLabel">{{ property.inputType | uppercase }}</label>
      </div>
      <div
        class="form-check"
        *ngFor="let option of property.options"
        [class.form-check-inline]="property.layout === 'config-form-check-inline'"
        [class.form-check-reverse]="property.layout === 'config-form-check-reverse'"
      >
        <input class="form-check-input" [type]="property.inputType" />
        <label class="form-check-label" *ngIf="option.label">{{ option.label }}</label>
      </div>
    </div>
  `,
})
export class RadioComponent extends EditAbstractComponent<RadioProperty> {}
