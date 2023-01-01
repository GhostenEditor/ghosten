import {
  Directive,
  ElementRef,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { filter } from 'rxjs/operators';

import { getDOMTransformMatrix } from '../../utils';

@Directive({
  selector: '[gtZoom]',
})
export class ZoomDirective implements OnInit, OnDestroy {
  @Input() zoomZone: HTMLElement;
  @Input() gtZoomDisabled: boolean;
  private readonly _container: HTMLElement;
  private subscription = Subscription.EMPTY;

  constructor(
    _elementRef: ElementRef,
    private _renderer: Renderer2,
    private _ngZone: NgZone,
  ) {
    this._container = _elementRef.nativeElement;
    this._renderer.setStyle(this._container, 'transform-origin', 'left top');
  }

  ngOnInit() {
    this._ngZone.runOutsideAngular(() => {
      this.subscription = fromEvent<WheelEvent>(
        this.zoomZone || this._container,
        'wheel',
        {
          passive: true,
          capture: true,
        },
      ).subscribe(event => this.zoom(event));
      fromEvent<TouchEvent>(this.zoomZone || this._container, 'touchstart')
        .pipe(filter(event => event.touches.length === 2))
        .subscribe();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  zoom(event: WheelEvent) {
    if (this.gtZoomDisabled) {
      return;
    }
    event.stopPropagation();
    const matrix = getDOMTransformMatrix(this._container);
    const delta = 1 - event.deltaY / 1000;
    const scale = +(matrix.a * delta).toFixed(2);
    if (Math.max(0.2, Math.min(scale, 5)) !== scale) {
      return;
    }
    const domRect = this._container.getBoundingClientRect();
    const containerRect =
      this._container.parentElement!.getBoundingClientRect();

    this._renderer.setStyle(
      this._container,
      'transform',
      new WebKitCSSMatrix()
        .scale(scale, scale)
        .translate(
          (event.pageX - (event.pageX - domRect.x) * delta - containerRect.x) /
            scale,
          (event.pageY - (event.pageY - domRect.y) * delta - containerRect.y) /
            scale,
        ),
    );
  }
}
