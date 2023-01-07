import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'properties-four-numbers',
  host: {
    class: 'input-group',
  },
  template: `
    <input
      *ngFor="let value of values; let i = index"
      class="form-control"
      title=""
      type="number"
      pattern="[0-9]*"
      [value]="value.value"
      [disabled]="i && !values[i - 1].value.trim()"
      (change)="_onchange($any($event.target).value, i)"
    />
  `,
})
export class FourNumbersComponent {
  get values(): any[] {
    const values = ('' + (this.formControl.value || '')).split(' ');
    return [
      { value: values[0] ? values[0].match(/(-|\d)+/)![0] : '' },
      { value: values[1] ? values[1].match(/(-|\d)+/)![0] : '' },
      { value: values[2] ? values[2].match(/(-|\d)+/)![0] : '' },
      { value: values[3] ? values[3].match(/(-|\d)+/)![0] : '' },
    ];
  }

  constructor(
    @Inject('FormItem') public formItem: any,
    public formControl: FormControl,
    public formGroup: FormGroup,
  ) {}

  _onchange(v: any, index: number) {
    this.values[index].value = v;
    this.formItem.value = this.values
      .reduce((acc, { value }) => {
        if (+value === 0) {
          return acc + value + ' ';
        } else {
          return acc + value + 'px ';
        }
      }, '')
      .trim();
    this.formControl.setValue(this.formItem.value);
  }
}
