import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface DropdownItem {
  text: string;
  description?: string;
  active?: boolean;
  icon?: string;
  data?: any;
}

@Component({
  selector: 'gt-dropdown',
  template: ` <ul class="dropdown-menu d-block position-static w-100 shadow">
    <li *ngFor="let item of items">
      <a
        class="dropdown-item"
        [class.active]="item.active"
        (click)="itemClick.emit(item)"
        ><i class="gt-icon me-3" *ngIf="item.icon">{{ item.icon }}</i
        >{{ item.text }}</a
      >
    </li>
  </ul>`,
})
export class DropdownComponent {
  @Input() items: DropdownItem[];
  @Output() itemClick = new EventEmitter<DropdownItem>();
}
