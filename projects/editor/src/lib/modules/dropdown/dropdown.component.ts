import { Component, EventEmitter, Input, Output } from '@angular/core';
import { slideFadeIn } from '../../animations';

export interface DropdownItem {
  text: string;
  description?: string;
  active?: boolean;
  icon?: string;
  data?: any;
}

@Component({
  animations: [slideFadeIn],
  selector: 'gt-dropdown',
  template: ` <ul @slideFadeIn class="dropdown-menu d-block position-static w-100 shadow">
    <li *ngFor="let item of items">
      <button type="button" class="dropdown-item" [class.active]="item.active" (click)="itemClick.emit(item)">
        <i class="gt-icon me-3" *ngIf="item.icon">{{ item.icon }}</i
        >{{ item.text }}
      </button>
    </li>
  </ul>`,
})
export class DropdownComponent {
  @Input() items: DropdownItem[];
  @Output() itemClick = new EventEmitter<DropdownItem>();
}
