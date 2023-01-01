import {
  ChangeDetectorRef,
  Component,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-toast',
  animations: [
    trigger('slide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(100%)' }),
        animate(
          '250ms ease-out',
          style({ opacity: 1, transform: 'translateX(0)' }),
        ),
      ]),
      transition(':leave', [
        animate(
          '250ms ease-out',
          style({ opacity: 0, transform: 'translateX(50%)' }),
        ),
      ]),
    ]),
  ],
  template: `
    <div class="toast-container position-fixed bottom-0 end-0 p-3">
      <div
        class="toast show mb-2 overflow-hidden"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        @slide
        *ngFor="let toast of toastList"
        (mouseenter)="toast.paused = true"
        (mouseleave)="toast.paused = false"
      >
        <div class="toast-header">
          <strong class="me-auto">{{ toast.type }}</strong>
          <small>{{ toast.time | date : 'medium' }}</small>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
            (click)="remove(toast)"
          ></button>
        </div>
        <div class="toast-body">
          <div>{{ toast.message }}</div>
          <div>{{ toast.detail }}</div>
        </div>
        <div class="mt-2 p-2 border-top text-end" *ngIf="toast.buttons">
          <button
            type="button"
            class="btn btn-light btn-sm"
            *ngFor="let button of toast.buttons"
            (click)="toast.buttonClick(button)"
          >
            {{ button }}
          </button>
        </div>
        <div class="progress" style="height: 2px;--bs-progress-bg: transparent">
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
  @Input() toastList: any[];
  timer: any;
  progress = 100;

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    let last = performance.now();
    this.ngZone.runOutsideAngular(() => {
      const loop = (now: number) => {
        const elapsed = now - last;
        this.toastList.forEach(toast => {
          if (toast.hasOwnProperty('remain') && !toast.paused) {
            toast.remain -= elapsed;
            toast.remain = Math.max(0, toast.remain);
            this.ngZone.run(
              () =>
                (toast.progress = +((toast.remain - 200) / 5000).toFixed(2)),
            );
            if (toast.remain === 0) {
              setTimeout(() => this.remove(toast));
            }
          } else {
            toast.remain = 5000;
          }
        });
        last = now;
        this.timer = requestAnimationFrame(loop);
      };
      this.timer = requestAnimationFrame(loop);
    });
  }

  remove(toast: any) {
    this.toastList.splice(this.toastList.indexOf(toast), 1);
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.timer);
  }
}
