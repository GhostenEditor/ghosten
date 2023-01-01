import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { FormItem } from '../types';

@Component({
  selector: 'properties-data-binding',
  template: ` <div class="input-group">
    <input type="text" class="form-control" disabled [value]="'数据绑定中'" />
    <button
      class="btn btn-outline-secondary btn-sm"
      type="button"
      (click)="formControl.reset()"
    >
      <i class="gt-icon">close</i>
    </button>
  </div>`,
})
export class DataBindingComponent {
  @Output() dataReset = new EventEmitter();

  constructor(
    @Inject('FormItem') public formItem: FormItem,
    public formControl: UntypedFormControl,
  ) {}
}
