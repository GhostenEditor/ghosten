import {
  Directive,
  ElementRef,
  Input,
  NgZone,
  OnDestroy,
  Renderer2,
} from '@angular/core';
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

@Directive({ selector: '[gtPan]' })
export class PanDirective implements OnDestroy {
  @Input() panDisabled = false;
  @Input() panTarget: HTMLElement;
  private subscription = Subscription.EMPTY;

  constructor(private el: ElementRef, renderer: Renderer2, ngZone: NgZone) {
    ngZone.runOutsideAngular(() => {
      this.subscription = dragStart(this.el.nativeElement)
        .pipe(
          switchMap(event => {
            if (this.panDisabled) {
              return EMPTY;
            }
            const matrix = getDOMTransformMatrix(this.panTarget);
            setDragRootStyle('userSelect', 'none');
            setDragRootStyle('cursor', 'grab');
            return dragMove(event).pipe(
              takeUntil(
                dragEnd(event).pipe(
                  tap(() => {
                    removeDragRootStyle('userSelect');
                    removeDragRootStyle('cursor');
                  }),
                ),
              ),
              map(evt => calculateOffset(event, evt)),
              tap(({ x, y }) => {
                renderer.setStyle(
                  this.panTarget,
                  'transform',
                  matrix.translate(x / matrix.a, y / matrix.d).toString(),
                );
              }),
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
