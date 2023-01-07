import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'properties-icon',
  template: `
    <select class="form-select" [formControlName]="formItem.name">
      <option *ngFor="let option of formItem.options!" [ngValue]="option.value">
        <i [class]="'fa fa-' + option.value"></i><span>{{ option.value }}</span>
      </option>
    </select>
  `,
})
export class IconComponent {
  constructor(
    @Inject('FormItem') public formItem: any,
    public formControl: FormControl,
    public formGroup: FormGroup,
  ) {}
}
