import { Directive, ElementRef, EventEmitter, Inject, Input, NgZone, OnDestroy, Output } from '@angular/core';
import { EMPTY, Subscription } from 'rxjs';
import { map, switchMap, takeUntil, tap } from 'rxjs/operators';

import {
  calculateOffset,
  dragEnd,
  dragMove,
  dragStart,
  getDOMTransformMatrix,
  removeDragRootStyle,
  setDragRootStyle,
} from '../../utils';
import { DOCUMENT } from '@angular/common';

@Directive({ selector: '[gtPan]' })
export class PanDirective implements OnDestroy {
  @Input() panDisabled = false;
  @Input() panTarget: HTMLElement;
  @Output() updateTransform = new EventEmitter<string>();
  private subscription = Subscription.EMPTY;

  constructor(private el: ElementRef, ngZone: NgZone, @Inject(DOCUMENT) _document: Document) {
    ngZone.runOutsideAngular(() => {
      this.subscription = dragStart(this.el.nativeElement)
        .pipe(
          switchMap(event => {
            if (this.panDisabled) {
              return EMPTY;
            }
            const matrix = getDOMTransformMatrix(this.panTarget);
            setDragRootStyle(_document.documentElement, 'userSelect', 'none');
            setDragRootStyle(_document.documentElement, 'cursor', 'grab');
            return dragMove(_document, event).pipe(
              takeUntil(
                dragEnd(_document, event).pipe(
                  tap(() => {
                    removeDragRootStyle(_document.documentElement, 'userSelect');
                    removeDragRootStyle(_document.documentElement, 'cursor');
                  }),
                ),
              ),
              map(evt => calculateOffset(event, evt)),
              tap(({ x, y }) => this.updateTransform.emit(matrix.translate(x / matrix.a, y / matrix.d).toString())),
            );
          }),
        )
        .subscribe();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
