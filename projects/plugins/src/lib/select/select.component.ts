import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { Overlay } from '@angular/cdk/overlay';

import { DropdownComponent } from './dropdown.component';

export interface Option extends Record<string, any> {}

@Component({
  selector: 'gt-select',
  template: `
    <div
      class="form-select d-flex justify-content-between align-items-center"
      *ngIf="multiple"
      #el
      (click)="showDropdown(el)"
    >
      <div class="text-nowrap overflow-hidden">
        <span class="badge text-bg-info me-2" *ngFor="let item of value">
          {{ item.label }}
          <button
            type="button"
            class="btn-close ms-1"
            aria-label="Close"
            (click)="removeItem(item)"
          ></button
        ></span>
      </div>
      <button
        type="button"
        class="btn-close ms-1 flex-shrink-0"
        aria-label="Close"
        (click)="$event.stopPropagation()"
      ></button>
    </div>
    <div
      class="form-select d-flex justify-content-between align-items-center"
      *ngIf="!multiple"
      #el
      (click)="showDropdown(el)"
    >
      <div>{{ value?.label }}</div>
      <button
        type="button"
        class="btn-close ms-1"
        aria-label="Close"
        (click)="$event.stopPropagation()"
      ></button>
    </div>
  `,
})
export class SelectComponent implements OnInit {
  @Input() multiple = false;
  @Input() labelField = 'label';
  @Input() valueField = 'value';
  @Input() descriptionField: string;
  @Input() groupField: string;

  @Input() set options(options: any[]) {
    if (this.multiple) {
      const map = new Map<string, any[]>();
      options.forEach(option => {
        const group = map.get(option.group);
        if (group) {
          group.push(option);
        } else {
          map.set(option.group, [option]);
        }
      });
      this._nodes = Array.from(map);
    } else {
      this._nodes = [...options];
    }
  }

  @Output() add = new EventEmitter<Option>();
  @Output() remove = new EventEmitter<Option>();
  @Output() clear = new EventEmitter<void>();
  value: any | any[];
  _nodes: any[] = [];

  constructor(private overlay: Overlay) {}

  ngOnInit() {
    if (this.multiple && this.value === undefined) {
      this.value = [];
    }
  }

  removeItem(item: any) {
    item.active = false;
    this.value.splice(this.value.indexOf(item), 1);
    this.value = [...this.value];
    this.remove.emit(item);
  }

  showDropdown(el: HTMLElement) {
    const overlayRef = this.overlay.create({
      width: el.offsetWidth,
      panelClass: 'd-block',
      hasBackdrop: true,
      backdropClass: '',
      maxHeight: '90%',
      positionStrategy: this.overlay
        .position()
        .flexibleConnectedTo(el)
        .withPositions([
          {
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top',
            offsetY: 4,
          },
          {
            originX: 'start',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'bottom',
            offsetY: -4,
          },
        ]),
    });
    const componentRef = overlayRef.attach(
      new ComponentPortal(DropdownComponent),
    );
    componentRef.instance.value = this.value;
    componentRef.instance.multiple = this.multiple;
    componentRef.instance.nodes = this._nodes;

    componentRef.instance.dropdownClick.subscribe(event => {
      if (this.multiple) {
        if (event.value.length > this.value.length) {
          this.add.emit(event.option?.value);
        } else if (event.value.length < this.value?.length) {
          this.remove.emit(event.option?.value);
        }
        this.value = event.value;
        setTimeout(() => overlayRef.updatePosition());
      } else {
        this.value = event.value[0];
        overlayRef.dispose();
      }
    });
    overlayRef.backdropClick().subscribe(() => overlayRef.dispose());
  }
}
