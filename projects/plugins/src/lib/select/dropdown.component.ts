import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListboxValueChangeEvent } from '@angular/cdk/listbox';

@Component({
  selector: 'gt-select-dropdown',
  template: ` <div
    class="dropdown-menu d-block position-static shadow overflow-auto"
    style="max-height: 40rem"
    cdkListbox
    [cdkListboxMultiple]="multiple"
    [(ngModel)]="value"
    (cdkListboxValueChange)="onChange($event)"
  >
    <form class="p-2 mb-2 bg-light border-bottom">
      <input
        type="search"
        class="form-control"
        autocomplete="false"
        placeholder="Type to filter..."
      />
    </form>
    <ul class="list-unstyled mb-0">
      <ng-container *ngFor="let group of nodes; let i = index">
        <li>
          <h6 class="dropdown-header">{{ group[0] }}</h6>
        </li>
        <li *ngFor="let option of group[1]" [cdkOption]="option">
          <a class="dropdown-item" [class.active]="option.active">{{
            option.label
          }}</a>
        </li>
        <li *ngIf="i !== nodes.length - 1">
          <hr class="dropdown-divider" />
        </li>
      </ng-container>
    </ul>
  </div>`,
})
export class DropdownComponent {
  @Input() nodes: any[];
  @Input() value: any;
  @Input() multiple = false;
  @Output() dropdownClick = new EventEmitter<ListboxValueChangeEvent<any>>();

  onChange(event: ListboxValueChangeEvent<any>) {
    if (!this.multiple) {
      this.value = event.value[0];
      // @ts-ignore
      event.listbox.options.forEach(option => {
        if (option !== event.option) {
          option.value.active = false;
        }
      });
    }
    event.option!.value.active = !event.option!.value.active;
    this.dropdownClick.emit(event);
  }
}
