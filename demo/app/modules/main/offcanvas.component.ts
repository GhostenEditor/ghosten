import { Component, EventEmitter, Inject, Input, Output, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

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
      <img src="assets/icons/128.png" alt="Ghosten Logo" class="rounded" style="width: 2rem;" />
      <h5 class="offcanvas-title">
        {{ offCanvasTitle }}
      </h5>
      <button type="button" class="btn btn-close" (click)="offCanvasClose.emit()"></button>
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
    const body = this._document.body;
    if (show) {
      const scrollbarWidth = window.innerWidth - this._document.documentElement.scrollWidth;
      this.renderer.setStyle(body, 'overflow', 'hidden');
      this.renderer.setStyle(body, 'paddingRight', scrollbarWidth + 'px');
    } else {
      this.renderer.removeStyle(body, 'overflow');
      this.renderer.removeStyle(body, 'paddingRight');
    }
  }

  @Input() position: 'start' | 'end';
  @Input() theme: string;
  @Input() offCanvasTitle: string;
  @Output() offCanvasClose = new EventEmitter();

  constructor(@Inject(DOCUMENT) private _document: Document, private renderer: Renderer2) {}
}
