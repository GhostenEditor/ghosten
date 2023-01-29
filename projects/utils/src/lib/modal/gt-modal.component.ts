import {
  AnimationEvent,
  animate,
  animateChild,
  group,
  query,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

const fadeAnimation = trigger('dialogContainer', [
  state('void, exit', style({ opacity: 0, transform: 'matrix(.9,0,0,.9,0,30)' })),
  state('enter', style({ transform: 'none' })),
  transition(
    '* => enter',
    group([
      animate('200ms cubic-bezier(0, 0, 0.2, 1)', style({ transform: 'none', opacity: 1 })),
      query('@*', animateChild(), { optional: true }),
    ]),
    {
      params: { enterAnimationDuration: '150ms', exitAnimationDuration: '75ms' },
    },
  ),
  transition(
    '* => void, * => exit',
    group([
      animate('100ms cubic-bezier(0, 0, 0.2, 1)', style({ opacity: 0, transform: 'matrix(.9,0,0,.9,0,30)' })),
      query('@*', animateChild(), { optional: true }),
    ]),
  ),
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
        <div
          class="modal-content"
          [@dialogContainer]="_getAnimationState()"
          (@dialogContainer.done)="_onAnimationDone($event)"
          cdkDrag
          cdkDragBoundary="body"
          #cdkDrag="cdkDrag"
          [cdkDragStartDelay]="50"
        >
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
              autofocus
              (mousedown)="$event.stopPropagation()"
              (click)="onCancel()"
            >
              <i class="gt-icon">close</i>
            </button>
          </div>
          <div class="modal-body">
            <ng-content></ng-content>
          </div>
          <div class="modal-footer" *ngIf="modalFooter">
            <button type="button" class="btn btn-light" [disabled]="modalPending" (click)="onConfirm()">
              <div class="spinner-border spinner-border-sm" role="status" *ngIf="modalPending">
                <span class="visually-hidden">Loading...</span>
              </div>
              <ng-container i18n="Button: Confirm">确定</ng-container>
            </button>
            <button type="button" class="btn btn-text" (click)="onCancel()" i18n="Button: Cancel">取消</button>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class GtModalComponent implements OnInit, OnDestroy {
  static modals: GtModalComponent[] = [];
  @Input() modalTitle: string;
  @Input() modalSize: 'xl' | 'lg' | 'md' | 'sm' = 'md';
  @Input() modalFooter: boolean;
  @Input() modalPending: boolean;
  @Input() fullscreen: boolean;
  @Output() confirm: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();
  @Output() animationDone: EventEmitter<any> = new EventEmitter();
  private _state: 'void' | 'enter' | 'exit' = 'enter';

  ngOnInit() {
    if (!GtModalComponent.modals.length) {
      const scrollbarWidth = window.innerWidth - document.documentElement.scrollWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = scrollbarWidth + 'px';
    }
    GtModalComponent.modals.push(this);
  }

  ngOnDestroy() {
    GtModalComponent.modals.splice(GtModalComponent.modals.indexOf(this), 1);
    if (!GtModalComponent.modals.length) {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
  }

  onConfirm() {
    this.confirm.emit();
  }

  onCancel() {
    this._state = 'exit';
    this.cancel.emit();
  }

  _getAnimationState() {
    return {
      value: this._state,
    };
  }

  _onAnimationDone({ toState }: AnimationEvent) {
    if (toState === 'exit') {
      this.animationDone.emit();
    }
  }
}
