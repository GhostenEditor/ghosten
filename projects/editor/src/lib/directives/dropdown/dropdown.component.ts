import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface DropdownItem {
  text: string;
  description?: string;
}

@Component({
  selector: 'gt-dropdown',
  host: {
    class: 'w-100',
  },
  template: ` <ul class="dropdown-menu d-block position-static w-100 shadow">
    <li *ngFor="let item of items">
      <a class="dropdown-item" (click)="itemClick.emit(item)">{{
        item.text
      }}</a>
    </li>
  </ul>`,
})
export class DropdownComponent {
  @Input() items: DropdownItem[];
  @Output() itemClick = new EventEmitter<DropdownItem>();
}
