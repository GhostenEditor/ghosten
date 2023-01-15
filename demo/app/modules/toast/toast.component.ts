import { ChangeDetectorRef, Component, Input, NgZone, OnDestroy, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

import { IToast, ToastPositions } from './types';

@Component({
  selector: 'app-toast',
  animations: [
    trigger('slide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(10%)' }),
        animate('250ms cubic-bezier(0.4,0.0,0.2,1)', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        animate('250ms cubic-bezier(0.4,0.0,0.2,1)', style({ opacity: 0, transform: 'translateX(50%)' })),
      ]),
    ]),
  ],
  template: `
    <div class="toast-container position-fixed p-3" [ngClass]="toastContainerClass">
      <div
        class="toast show mb-2 overflow-hidden"
        [ngClass]="'text-bg-' + toast.type"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        @slide
        *ngFor="let toast of toastList"
        (mouseenter)="toast.paused = true"
        (mouseleave)="toast.paused = false"
      >
        <div class="toast-header" *ngIf="toast.title">
          <strong class="me-auto">{{ toast.title }}</strong>
          <small>{{ toast.time | date : 'medium' }}</small>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
            (click)="remove(toast)"
          ></button>
        </div>
        <div class="toast-body" *ngIf="toast.title">
          <div>{{ toast.message }}</div>
          <div>{{ toast.detail }}</div>
        </div>
        <div class="toast-body d-flex justify-content-between" *ngIf="!toast.title">
          <div>{{ toast.message }}</div>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
            (click)="remove(toast)"
          ></button>
        </div>
        <div class="mt-2 p-2 border-top text-end" *ngIf="toast.buttons" [ngClass]="'border-' + toast.type + '-subtle'">
          <button
            type="button"
            class="btn btn-sm"
            [ngClass]="'btn-' + toast.type"
            *ngFor="let button of toast.buttons"
            (click)="toast.buttonClick && toast.buttonClick(button)"
          >
            {{ button }}
          </button>
        </div>
        <div class="progress" *ngIf="toast.duration !== false" style="height: 2px;--bs-progress-bg: transparent">
          <div
            class="progress-bar w-100"
            role="progressbar"
            aria-label="Example 1px high"
            style="transform-origin: left;transition: transform 200ms linear;"
            [style.transform]="'scaleX(' + toast.progress + ')'"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  `,
})
export class ToastComponent implements OnInit, OnDestroy {
  _position: ToastPositions;
  @Input() set position(position: ToastPositions) {
    this._position = position;
    switch (position) {
      case 'top_left':
        this.toastContainerClass = 'top-0 start-0';
        break;
      case 'top_right':
        this.toastContainerClass = 'top-0 end-0';
        break;
      case 'top_center':
        this.toastContainerClass = 'top-0 start-50 translate-middle-x';
        break;
      case 'middle_left':
        this.toastContainerClass = 'top-50 start-0 translate-middle-y';
        break;
      case 'middle_right':
        this.toastContainerClass = 'top-50 end-0 translate-middle-y';
        break;
      case 'middle_center':
        this.toastContainerClass = 'top-50 start-50 translate-middle';
        break;
      case 'bottom_left':
        this.toastContainerClass = 'bottom-0 start-0';
        break;
      case 'bottom_right':
        this.toastContainerClass = 'bottom-0 end-0';
        break;
      case 'bottom_center':
        this.toastContainerClass = 'bottom-0 start-50 translate-middle-x';
        break;
    }
  }

  get position() {
    return this._position;
  }

  toastContainerClass: string;
  toastList: (IToast & {
    paused: boolean;
    progress: number;
    remain: number;
  })[] = [];
  timer: any;
  progress = 100;

  constructor(private ngZone: NgZone, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    let last = performance.now();
    this.ngZone.runOutsideAngular(() => {
      const loop = (now: number) => {
        const elapsed = now - last;
        this.toastList.forEach(toast => {
          if (toast.duration !== false && !toast.paused) {
            toast.remain -= elapsed;
            toast.remain = Math.max(0, toast.remain);
            this.ngZone.run(() => (toast.progress = +((toast.remain - 200) / 5000).toFixed(2)));
            if (toast.remain === 0) {
              setTimeout(() => this.remove(toast));
            }
          }
        });
        last = now;
        this.timer = requestAnimationFrame(loop);
      };
      this.timer = requestAnimationFrame(loop);
    });
  }

  add(toast: IToast) {
    const _toast = {
      ...toast,
      time: toast.time || Date.now(),
      paused: false,
      progress: 1,
      remain: typeof toast.duration === 'boolean' ? 0 : toast.duration || 5000,
    };
    if (/bottom/.test(this.position)) {
      this.toastList.unshift(_toast);
    } else {
      this.toastList.push(_toast);
    }
  }

  remove(toast: any) {
    this.toastList.splice(this.toastList.indexOf(toast), 1);
    this.cdr.detectChanges();
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.timer);
  }
}
