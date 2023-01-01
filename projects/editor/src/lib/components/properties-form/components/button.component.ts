import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormControlService } from '../form-control.service';
import { FormItem } from '../types';

@Component({
  selector: 'properties-button',
  template: ` <button
    type="button"
    class="btn btn-light"
    (click)="formControlService.buttonClick.next(this.formItem)"
  >
    编辑
  </button>`,
})
export class ButtonComponent {
  @Output() buttonClick = new EventEmitter();

  constructor(
    public formControlService: FormControlService,
    @Inject('FormItem') public formItem: FormItem,
  ) {}
}
