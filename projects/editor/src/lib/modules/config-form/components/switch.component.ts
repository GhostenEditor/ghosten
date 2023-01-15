import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'config-form-switch',
  host: {
    class: 'py-2 d-block',
  },
  template: ` <div class="form-check form-switch" [formGroup]="formGroup">
    <input
      type="checkbox"
      class="form-check-input"
      role="switch"
      [id]="formItem.name"
      [formControlName]="formItem.name"
    />
    <label class="form-check-label" [for]="formItem.name"></label>
  </div>`,
})
export class SwitchComponent {
  constructor(@Inject('FormItem') public formItem: any, public formControl: FormControl, public formGroup: FormGroup) {}
}
