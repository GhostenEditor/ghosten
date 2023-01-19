import { Component, Inject, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'properties-four-numbers',
  host: {
    class: 'input-group',
  },
  template: `
    <input
      *ngFor="let item of values; let i = index"
      class="form-control"
      title=""
      type="number"
      pattern="[0-9]*"
      [(ngModel)]="item.value"
      [ngModelOptions]="{ updateOn: 'blur' }"
      [disabled]="!!i && values[i - 1].value === null"
      (ngModelChange)="_onchange()"
    />
  `,
})
export class FourNumbersComponent implements OnDestroy {
  values: { value: number | null }[];
  private subscription = Subscription.EMPTY;

  constructor(@Inject('FormItem') public formItem: any, public formControl: FormControl, public formGroup: FormGroup) {
    this.setValue();
    this.subscription = this.formControl.valueChanges.subscribe(() => this.setValue());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  setValue() {
    const values = this.formControl.value === null ? [] : this.formControl.value.split(' ');
    this.values = [
      { value: values[0] ? +values[0].match(/(-|\d)+/)![0] : null },
      { value: values[1] ? +values[1].match(/(-|\d)+/)![0] : null },
      { value: values[2] ? +values[2].match(/(-|\d)+/)![0] : null },
      { value: values[3] ? +values[3].match(/(-|\d)+/)![0] : null },
    ];
  }

  _onchange() {
    this.formControl.setValue(
      this.values
        .reduce((acc, { value }) => {
          if (value === 0) {
            return acc + value + ' ';
          } else if (value === null) {
            return acc;
          } else {
            return acc + value + 'px ';
          }
        }, '')
        .trim() || null,
    );
  }
}
