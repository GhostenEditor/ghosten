import { Directive, ElementRef, Inject, Input, NgZone, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { map, takeUntil, tap } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

import { getDOMTransformMatrix, removeDragRootStyle, setDragRootStyle } from '../utils';

@Directive({
  selector: '[gtDrag]',
})
export class DragDirective implements OnInit {
  @Input() handle: HTMLElement;
  @Input() gtDragDisabled: boolean;
  private readonly _container: HTMLElement;

  constructor(
    _elementRef: ElementRef,
    private _renderer: Renderer2,
    @Inject(DOCUMENT) private _document: Document,
    private _ngZone: NgZone,
  ) {
    this._container = _elementRef.nativeElement;
  }

  ngOnInit() {
    this._ngZone.runOutsideAngular(() => {
      if (this.handle) {
        this._renderer.listen(this.handle, 'mousedown', event => this.move(event));
      } else {
        this._renderer.listen(this._container, 'mousedown', event => this.move(event));
      }
    });
  }

  move(event: MouseEvent) {
    if (this.gtDragDisabled) {
      return;
    }
    event.stopPropagation();
    const matrix = getDOMTransformMatrix(this._container);

    setDragRootStyle(this._document.documentElement, 'userSelect', 'none');
    fromEvent<MouseEvent>(this._document, 'pointermove', { passive: true })
      .pipe(
        takeUntil(
          fromEvent<MouseEvent>(this._document, 'pointerup').pipe(
            tap(() => removeDragRootStyle(this._document.documentElement, 'userSelect')),
          ),
        ),
        map((evt: MouseEvent) => ({
          offsetX: evt.clientX - event.clientX,
          offsetY: evt.clientY - event.clientY,
        })),
      )
      .subscribe(({ offsetX, offsetY }) => {
        this._renderer.setStyle(
          this._container,
          'transform',
          matrix.translate(offsetX / matrix.a, offsetY / matrix.d).toString(),
        );
      });
  }
}
