import { Component, Inject } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { FormItem } from '../types';

@Component({
  selector: 'properties-input',
  template: `
    <ng-container [formGroup]="formGroup">
      <ng-container [ngSwitch]="formItem.type">
        <input
          *ngSwitchCase="'number'"
          [type]="formItem.type"
          class="form-control"
          title=""
          autocomplete="off"
          pattern="[0-9]*"
          [formControlName]="formItem.name"
          (wheel)="onwheel($event)"
          (ngModelChange)="setValue($event)"
        />
        <input
          *ngSwitchDefault
          [type]="formItem.type"
          class="form-control"
          title=""
          autocomplete="off"
          [formControlName]="formItem.name"
          (wheel)="onwheel($event)"
          (ngModelChange)="setValue($event)"
        />
      </ng-container>
    </ng-container>
  `,
})
export class InputComponent {
  constructor(
    @Inject('FormItem') public formItem: FormItem,
    public formControl: UntypedFormControl,
    public formGroup: UntypedFormGroup,
  ) {}

  onwheel(event: WheelEvent) {
    if (document.activeElement !== event.target) {
      return;
    }
    event.preventDefault();
    if (this.formItem.type === 'number') {
      this.formControl.setValue(
        Number(this.formControl.value) - Math.sign(event.deltaY),
      );
    }
  }

  setValue(value: any) {
    // console.log(value);
  }
}
