import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { Portal } from '@angular/cdk/portal';

import { GtEdit } from '../../classes';

@Component({
  selector: 'gt-float-bar',
  template: `
    <div
      class="card"
      cdkDrag
      cdkDragBoundary="html"
      gtResize
      [resizes]="'all'"
      [minWidth]="180"
      [minHeight]="300"
      [transform]="true"
      style="width: 260px;height: 600px;"
      [style.transform]="transform"
      (updateTransform)="updateTransform($event)"
      (cdkDragEnded)="dragEnded.emit($event)"
    >
      <div class="card-header bg-body" style="cursor: move" cdkDragHandle>
        <ul class="nav nav-pills card-header-pills">
          <li class="nav-item">
            <a class="nav-link active"
              ><i class="gt-icon">{{ icon }}</i></a
            >
          </li>
          <li class="nav-item ms-auto mt-1">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              (click)="windowClose.emit()"
            ></button>
          </li>
        </ul>
      </div>
      <div class="card-body p-0 overflow-scroll">
        <ng-template [cdkPortalOutlet]="componentPortal"></ng-template>
      </div>
    </div>
  `,
  host: {
    style: 'width:0;height:0;',
  },
})
export class FloatBarComponent<T> {
  @Input() icon: string;
  @Input() componentPortal: Portal<T> | null;
  @Output() windowClose = new EventEmitter();
  @Output() dragEnded = new EventEmitter<CdkDragEnd>();
  transform: string;

  constructor(public gt: GtEdit, private cdr: ChangeDetectorRef) {}

  updateTransform(transform: string) {
    this.transform = transform;
    this.cdr.detectChanges();
  }
}
