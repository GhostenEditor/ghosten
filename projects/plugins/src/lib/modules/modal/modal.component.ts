import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

const fadeAnimation = trigger('fade', [
  state('in', style({ transform: 'matrix(1,0,0,1,0,0)', opacity: 1 })),
  transition('void => *', [
    style({
      transform: 'matrix(.9,0,0,.9,0,30)',
      opacity: 0,
    }),
    animate('200ms cubic-bezier(0, 0, 0.2, 1)'),
  ]),
]);

@Component({
  selector: 'gt-modal',
  animations: [fadeAnimation],
  template: `
    <div
      class="modal d-block"
      cdkTrapFocus
      [cdkTrapFocusAutoCapture]="true"
      tabindex="-1"
      aria-modal="true"
      role="dialog"
    >
      <div
        class="modal-dialog modal-dialog-scrollable"
        [ngClass]="'modal-' + size"
        [class.modal-fullscreen]="fullscreen"
      >
        <div
          class="modal-content"
          @fade
          cdkDrag
          cdkDragBoundary="body"
          #cdkDrag="cdkDrag"
          [cdkDragStartDelay]="50"
        >
          <div class="modal-header" cdkDragHandle>
            <h4 class="modal-title flex-grow-1">{{ modalTitle }}</h4>
            <button
              type="button"
              class="btn btn-link"
              (mousedown)="$event.stopPropagation()"
              (click)="fullscreen = !fullscreen; cdkDrag.reset()"
            >
              <i class="gt-icon">{{ fullscreen ? 'minimize' : 'maximize' }}</i>
            </button>
            <button
              type="button"
              class="btn btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              (mousedown)="$event.stopPropagation()"
              (click)="cancel.emit()"
            ></button>
          </div>
          <div class="modal-body">
            <ng-content></ng-content>
          </div>
          <div class="modal-footer" *ngIf="!noFooter">
            <button
              type="button"
              class="btn btn-light"
              (click)="confirm.emit()"
              i18n="Button: Confirm"
            >
              确定
            </button>
            <button
              type="button"
              class="btn btn-link"
              (click)="cancel.emit()"
              i18n="Button: Cancel"
            >
              取消
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ModalComponent {
  @Input() modalTitle: string;
  @Input() size: 'xl' | 'lg' | 'md' | 'sm' = 'md';
  @Input() noFooter: boolean;
  @Input() fullscreen: boolean;
  @Output() confirm: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();
}
