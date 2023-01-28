import { Component, EventEmitter, Inject, Input, OnDestroy, OnInit, Output, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-offcanvas',
  template: `
    <div
      class="offcanvas-lg"
      [class.show]="show"
      [class.hiding]="hiding"
      [class.offcanvas-start]="position === 'start'"
      [class.offcanvas-end]="position === 'end'"
      [class.bg-primary]="theme === 'primary'"
    >
      <div class="offcanvas-header pb-0">
        <img src="assets/icons/128.png" alt="Ghosten Logo" class="rounded" style="width: 2rem;" />
        <h5 class="offcanvas-title">
          {{ offCanvasTitle }}
        </h5>
        <button type="button" class="btn btn-close" (click)="show = false; showChange.emit(show)"></button>
      </div>
      <div class="offcanvas-body pt-0">
        <hr class="d-lg-none text-body-50" />
        <div class="me-auto"></div>
        <ng-content></ng-content>
      </div>
    </div>
    <div
      class="offcanvas-backdrop fade show"
      [class.show]="show"
      [class.d-none]="!show && !hiding"
      (click)="show = false; showChange.emit(show)"
    ></div>
  `,
  styles: [
    `
      @media (max-width: 991.98px) {
        :host {
          position: fixed;
          z-index: 1045;
        }
      }
    `,
  ],
})
export class OffcanvasComponent implements OnInit, OnDestroy {
  private _show = false;
  public hiding = false;

  @Input() get show() {
    return this._show;
  }

  set show(show: boolean) {
    if (this._show === show) {
      return;
    }
    this._show = show;
    const body = this._document.body;
    if (show) {
      this.hiding = false;
      const scrollbarWidth = window.innerWidth - this._document.documentElement.scrollWidth;
      this.renderer.setStyle(body, 'overflow', 'hidden');
      this.renderer.setStyle(body, 'paddingRight', scrollbarWidth + 'px');
    } else {
      this.hiding = true;
      setTimeout(() => {
        this.hiding = false;
        this.renderer.removeStyle(body, 'overflow');
        this.renderer.removeStyle(body, 'paddingRight');
      }, 300);
    }
  }

  @Input() position: 'start' | 'end';
  @Input() theme: string;
  @Input() offCanvasTitle: string;
  @Output() showChange = new EventEmitter();
  private subscription = Subscription.EMPTY;

  constructor(@Inject(DOCUMENT) private _document: Document, private renderer: Renderer2, private router: Router) {}

  ngOnInit() {
    this.subscription = this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      if (this.show) {
        this.show = false;
        this.showChange.emit(this.show);
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
