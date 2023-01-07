import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-offcanvas',
  host: {
    class: 'offcanvas-lg',
    '[class.show]': 'show',
    '[class.offcanvas-start]': 'position==="start"',
    '[class.offcanvas-end]': 'position==="end"',
    '[class.bg-primary]': 'theme==="primary"',
  },
  template: `
    <div class="offcanvas-header pb-0">
      <img
        src="assets/icons/128.png"
        alt="Ghosten Logo"
        class="rounded"
        style="width: 2rem;"
      />
      <h5 class="offcanvas-title">
        {{ offCanvasTitle }}
      </h5>
      <button
        type="button"
        class="btn btn-close"
        (click)="offCanvasClose.emit()"
      ></button>
    </div>
    <div class="offcanvas-body pt-0">
      <hr class="d-lg-none text-body-50" />
      <div class="me-auto"></div>
      <ng-content></ng-content>
    </div>
  `,
})
export class OffcanvasComponent {
  private _show = false;
  @Input() get show() {
    return this._show;
  }

  set show(show: boolean) {
    this._show = show;
    if (show) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.scrollWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = scrollbarWidth + 'px';
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
  }

  @Input() position: 'start' | 'end';
  @Input() theme: string;
  @Input() offCanvasTitle: string;
  @Output() offCanvasClose = new EventEmitter();
}
