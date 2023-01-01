import { Component, Inject } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'properties-toggle',
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
export class ToggleComponent {
  constructor(
    @Inject('FormItem') public formItem: any,
    public formControl: UntypedFormControl,
    public formGroup: UntypedFormGroup,
  ) {}
}
