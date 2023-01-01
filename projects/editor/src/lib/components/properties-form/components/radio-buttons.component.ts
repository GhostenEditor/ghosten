import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'properties-radio-buttons',
  template: ` <div
    class="btn-group"
    role="group"
    aria-label="Basic mixed styles example"
  >
    <button
      *ngFor="let btn of buttons"
      [class.active]="value === btn.value"
      (click)="onclick(btn)"
      type="button"
      class="btn btn-light"
    >
      <i class="gt-icon">{{ btn.icon }}</i>
    </button>
  </div>`,
})
export class RadioButtonsComponent {
  @Input() value: string;
  @Input() buttons: any[];
  @Output() onchange = new EventEmitter<string>();
  active: string;

  onclick(btn: any) {
    this.value = btn;
    this.onchange.emit(btn);
  }
}
