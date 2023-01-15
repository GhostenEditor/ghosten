import { Component, EventEmitter, Inject, Input, OnDestroy, OnInit, Output, Renderer2 } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DOCUMENT } from '@angular/common';

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
        [ngClass]="'modal-' + modalSize"
        [class.modal-fullscreen]="fullscreen"
      >
        <div class="modal-content" @fade cdkDrag cdkDragBoundary="body" #cdkDrag="cdkDrag" [cdkDragStartDelay]="50">
          <div class="modal-header" cdkDragHandle>
            <h4 class="modal-title flex-grow-1">{{ modalTitle }}</h4>
            <button
              type="button"
              class="btn btn-text"
              (mousedown)="$event.stopPropagation()"
              (click)="fullscreen = !fullscreen; cdkDrag.reset()"
            >
              <i class="gt-icon">{{ fullscreen ? 'minimize' : 'maximize' }}</i>
            </button>
            <button
              type="button"
              class="btn btn-text"
              data-bs-dismiss="modal"
              aria-label="Close"
              (mousedown)="$event.stopPropagation()"
              (click)="cancel.emit()"
            >
              <i class="gt-icon">close</i>
            </button>
          </div>
          <div class="modal-body">
            <ng-content></ng-content>
          </div>
          <div class="modal-footer" *ngIf="modalFooter">
            <button
              type="button"
              class="btn btn-light"
              [disabled]="modalPending"
              (click)="confirm.emit()"
              i18n="Button: Confirm"
            >
              <div class="spinner-border spinner-border-sm" role="status" *ngIf="modalPending">
                <span class="visually-hidden">Loading...</span>
              </div>
              确定
            </button>
            <button type="button" class="btn btn-text" (click)="cancel.emit()" i18n="Button: Cancel">取消</button>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() modalTitle: string;
  @Input() modalSize: 'xl' | 'lg' | 'md' | 'sm' = 'md';
  @Input() modalFooter: boolean;
  @Input() modalPending: boolean;
  @Input() fullscreen: boolean;
  @Output() confirm: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();

  constructor(@Inject(DOCUMENT) private _document: Document, private renderer: Renderer2) {}

  ngOnInit() {
    const body = this._document.body;
    const scrollbarWidth = window.innerWidth - this._document.documentElement.scrollWidth;
    this.renderer.setStyle(body, 'overflow', 'hidden');
    this.renderer.setStyle(body, 'paddingRight', scrollbarWidth + 'px');
  }

  ngOnDestroy() {
    const body = this._document.body;
    this.renderer.removeStyle(body, 'overflow');
    this.renderer.removeStyle(body, 'paddingRight');
  }
}