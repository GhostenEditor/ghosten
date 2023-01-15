import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { FormItem } from '../../../types';

@Component({
  selector: 'config-form-select',
  template: `
    <div class="input-group" [formGroup]="formGroup">
      <select class="form-select" [formControlName]="formItem.name">
        <option [ngValue]="undefined"></option>
        <option *ngFor="let option of formItem.options!" [ngValue]="option.value">
          {{ option.label }}
        </option>
      </select>
    </div>
  `,
})
export class SelectComponent {
  @Output() onclick: EventEmitter<FormItem> = new EventEmitter<FormItem>();

  constructor(@Inject('FormItem') public formItem: any, public formControl: FormControl, public formGroup: FormGroup) {}
}
