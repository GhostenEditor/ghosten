import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DOCUMENT } from '@angular/common';
import { FormItem } from '../../../types';

@Component({
  selector: 'config-form-input',
  template: `
    <ng-container [formGroup]="formGroup">
      <ng-container [ngSwitch]="formItem.type">
        <input *ngSwitchCase="'password'" type="color" class="form-control" [formControlName]="formItem.name" />
        <input *ngSwitchCase="'color'" type="color" class="form-control" [formControlName]="formItem.name" />
        <input
          *ngSwitchCase="'number'"
          type="number"
          class="form-control"
          autocomplete="off"
          pattern="[0-9]*"
          [formControlName]="formItem.name"
          (wheel)="onwheel($event)"
        />
        <input *ngSwitchDefault type="text" class="form-control" autocomplete="off" [formControlName]="formItem.name" />
      </ng-container>
    </ng-container>
  `,
})
export class InputComponent {
  constructor(
    @Inject('FormItem') public formItem: FormItem,
    public formControl: FormControl,
    public formGroup: FormGroup,
    @Inject(DOCUMENT) private _document: Document,
  ) {}

  onwheel(event: WheelEvent) {
    if (this._document.activeElement !== event.target) {
      return;
    }
    event.preventDefault();
    if (this.formItem.type === 'number') {
      this.formControl.setValue(Number(this.formControl.value) - Math.sign(event.deltaY));
    }
  }
}
