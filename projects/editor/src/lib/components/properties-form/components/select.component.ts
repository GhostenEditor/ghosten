import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

import { FormItem } from '../types';

@Component({
  selector: 'property-select',
  template: `
    <div class="input-group" [formGroup]="formGroup">
      <select class="form-select" [formControlName]="formItem.name">
        <option *ngFor="let option of formItem.options!" [value]="option.value">
          {{ option.label }}
        </option>
      </select>
    </div>
  `,
})
export class SelectComponent {
  @Output() onclick: EventEmitter<FormItem> = new EventEmitter<FormItem>();

  constructor(
    @Inject('FormItem') public formItem: any,
    public formControl: UntypedFormControl,
    public formGroup: UntypedFormGroup,
  ) {}
}
