import {
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  NgZone,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { clamp } from '@ghosten/common';

import { filter, map, takeUntil, tap } from 'rxjs/operators';
import { fromEvent, iif, merge } from 'rxjs';

import {
  getDOMTransformMatrix,
  isTouchEvent,
  removeDragRootStyle,
  setDragRootStyle,
} from '../../utils';

type ResizeType = 't' | 'b' | 'l' | 'r' | 'tl' | 'tr' | 'bl' | 'br';

@Directive({
  selector: '[gtResize]',
})
export class ResizeDirective implements OnInit {
  @Input() resizes: ResizeType[] | 'all';
  @Input() transform = false;
  @Input() minWidth: number = 0;
  @Input() maxWidth: number = Infinity;
  @Input() minHeight: number = 0;
  @Input() maxHeight: number = Infinity;
  @Output() updateTransform = new EventEmitter<string>();

  private readonly container: HTMLElement;
  private _widthResize: boolean = false;
  private _heightResize: boolean = false;

  constructor(
    _elementRef: ElementRef,
    private _renderer: Renderer2,
    @Inject(DOCUMENT) private _document: Document,
    private _ngZone: NgZone,
  ) {
    this.container = _elementRef.nativeElement;
  }

  ngOnInit(): void {
    const position = window
      .getComputedStyle(this.container)
      .getPropertyValue('position');
    if (position === 'static') {
      this._renderer.setStyle(this.container, 'position', 'relative');
    }
    const resizerContainer = this._renderer.createElement('div');
    this._renderer.addClass(resizerContainer, 'resizer-container');
    this._renderer.appendChild(this.container, resizerContainer);
    let resizes: ResizeType[] = [];
    if (Array.isArray(this.resizes)) {
      resizes = this.resizes;
    } else if (this.resizes === 'all') {
      resizes = ['t', 'b', 'l', 'r', 'tl', 'tr', 'bl', 'br'];
    }
    this._ngZone.runOutsideAngular(() => {
      resizes.forEach(resizeType => {
        const resizer = this._renderer.createElement('div') as HTMLDivElement;
        this.setResizeStyle(resizeType, resizer);
        this._renderer.appendChild(resizerContainer, resizer);
        merge(
          fromEvent<MouseEvent>(resizer, 'mousedown', { passive: false }).pipe(
            filter(event => event.button === 0),
          ),
          fromEvent<TouchEvent>(resizer, 'touchstart', { passive: true }),
        ).subscribe(event => this.resize(event, resizeType));
      });
    });
    this._widthResize =
      this.resizes === 'all' || /[lr]/.test(this.resizes.join(''));
    this._heightResize =
      this.resizes === 'all' || /[tb]/.test(this.resizes.join(''));
  }

  setResizeStyle(type: ResizeType, resizer: HTMLDivElement) {
    switch (type) {
      case 't':
        this._renderer.setStyle(resizer, 'left', '.6rem');
        this._renderer.setStyle(resizer, 'right', '.6rem');
        this._renderer.setStyle(resizer, 'top', '-.6rem');
        this._renderer.setStyle(resizer, 'height', '1.2rem');
        this._renderer.setStyle(resizer, 'cursor', 'ns-resize');
        break;
      case 'b':
        this._renderer.setStyle(resizer, 'left', '.6rem');
        this._renderer.setStyle(resizer, 'right', '.6rem');
        this._renderer.setStyle(resizer, 'bottom', '-.6rem');
        this._renderer.setStyle(resizer, 'height', '1.2rem');
        this._renderer.setStyle(resizer, 'cursor', 'ns-resize');
        break;
      case 'l':
        this._renderer.setStyle(resizer, 'top', '.6rem');
        this._renderer.setStyle(resizer, 'bottom', '.6rem');
        this._renderer.setStyle(resizer, 'left', '-.6rem');
        this._renderer.setStyle(resizer, 'width', '1.2rem');
        this._renderer.setStyle(resizer, 'cursor', 'ew-resize');
        break;
      case 'r':
        this._renderer.setStyle(resizer, 'top', '.6rem');
        this._renderer.setStyle(resizer, 'bottom', '.6rem');
        this._renderer.setStyle(resizer, 'right', '-.6rem');
        this._renderer.setStyle(resizer, 'width', '1.2rem');
        this._renderer.setStyle(resizer, 'cursor', 'ew-resize');
        break;
      case 'tl':
        this._renderer.setStyle(resizer, 'width', '1.2rem');
        this._renderer.setStyle(resizer, 'height', '1.2rem');
        this._renderer.setStyle(resizer, 'left', '-.6rem');
        this._renderer.setStyle(resizer, 'top', '-.6rem');
        this._renderer.setStyle(resizer, 'cursor', 'nwse-resize');
        break;
      case 'tr':
        this._renderer.setStyle(resizer, 'width', '1.2rem');
        this._renderer.setStyle(resizer, 'height', '1.2rem');
        this._renderer.setStyle(resizer, 'right', '-.6rem');
        this._renderer.setStyle(resizer, 'top', '-.6rem');
        this._renderer.setStyle(resizer, 'cursor', 'nesw-resize');
        break;
      case 'bl':
        this._renderer.setStyle(resizer, 'width', '1.2rem');
        this._renderer.setStyle(resizer, 'height', '1.2rem');
        this._renderer.setStyle(resizer, 'left', '-.6rem');
        this._renderer.setStyle(resizer, 'bottom', '-.6rem');
        this._renderer.setStyle(resizer, 'cursor', 'nesw-resize');
        break;
      case 'br':
        this._renderer.setStyle(resizer, 'width', '1.2rem');
        this._renderer.setStyle(resizer, 'height', '1.2rem');
        this._renderer.setStyle(resizer, 'right', '-.6rem');
        this._renderer.setStyle(resizer, 'bottom', '-.6rem');
        this._renderer.setStyle(resizer, 'cursor', 'nwse-resize');
        break;
    }
    this._renderer.setStyle(resizer, 'position', 'absolute');
    this._renderer.setStyle(resizer, 'z-index', '1');
  }

  resize(event: MouseEvent | TouchEvent, type: string) {
    event.stopPropagation();
    const style = window.getComputedStyle(this.container);
    const lastWidth = parseInt(style.getPropertyValue('width'), 10);
    const lastHeight = parseInt(style.getPropertyValue('height'), 10);
    const matrix = getDOMTransformMatrix(this.container);
    setDragRootStyle('userSelect', 'none');
    if (!isTouchEvent(event)) {
      let cursor: string = 'auto';
      switch (type) {
        case 't':
        case 'b':
          cursor = 'ns-resize';
          break;
        case 'l':
        case 'r':
          cursor = 'ew-resize';
          break;
        case 'tl':
        case 'br':
          cursor = 'nwse-resize';
          break;
        case 'tr':
        case 'bl':
          cursor = 'nesw-resize';
          break;
      }
      setDragRootStyle('cursor', cursor);
    }
    iif(
      () => isTouchEvent(event),
      fromEvent<TouchEvent>(this._document, 'touchmove', {
        passive: false,
        capture: true,
      }).pipe(
        tap(evt => evt.preventDefault()),
        takeUntil(
          fromEvent(this._document, 'touchend').pipe(
            tap(() => {
              removeDragRootStyle('userSelect');
              removeDragRootStyle('cursor');
            }),
          ),
        ),
        map(evt => ({
          offsetX:
            evt.touches[0].clientX - (event as TouchEvent).touches[0].clientX,
          offsetY:
            evt.touches[0].clientY - (event as TouchEvent).touches[0].clientY,
        })),
      ),
      fromEvent<MouseEvent>(this._document, 'mousemove', {
        passive: false,
        capture: true,
      }).pipe(
        takeUntil(
          fromEvent(this._document, 'mouseup').pipe(
            tap(() => {
              removeDragRootStyle('userSelect');
              removeDragRootStyle('cursor');
            }),
          ),
        ),
        map((evt: MouseEvent) => ({
          offsetX: evt.clientX - (event as MouseEvent).clientX,
          offsetY: evt.clientY - (event as MouseEvent).clientY,
        })),
      ),
    ).subscribe(({ offsetX, offsetY }) => {
      let dx = 0;
      let dy = 0;
      let dw = 0;
      let dh = 0;
      switch (type) {
        case 't':
          offsetY = -clamp(
            -offsetY,
            this.maxHeight - lastHeight,
            this.minHeight - lastHeight,
          );
          break;
        case 'l':
          offsetX = -clamp(
            -offsetX,
            this.maxWidth - lastWidth,
            this.minWidth - lastWidth,
          );
          break;
        case 'b':
          offsetY = clamp(
            offsetY,
            this.maxHeight - lastHeight,
            this.minHeight - lastHeight,
          );
          break;
        case 'r':
          offsetX = clamp(
            offsetX,
            this.maxWidth - lastWidth,
            this.minWidth - lastWidth,
          );
          break;
        case 'tl':
          offsetY = -clamp(
            -offsetY,
            this.maxHeight - lastHeight,
            this.minHeight - lastHeight,
          );
          offsetX = -clamp(
            -offsetX,
            this.maxWidth - lastWidth,
            this.minWidth - lastWidth,
          );
          break;
        case 'tr':
          offsetY = -clamp(
            -offsetY,
            this.maxHeight - lastHeight,
            this.minHeight - lastHeight,
          );
          offsetX = clamp(
            offsetX,
            this.maxWidth - lastWidth,
            this.minWidth - lastWidth,
          );
          break;
        case 'bl':
          offsetY = clamp(
            offsetY,
            this.maxHeight - lastHeight,
            this.minHeight - lastHeight,
          );
          offsetX = -clamp(
            -offsetX,
            this.maxWidth - lastWidth,
            this.minWidth - lastWidth,
          );
          break;
        case 'br':
          offsetY = clamp(
            offsetY,
            this.maxHeight - lastHeight,
            this.minHeight - lastHeight,
          );
          offsetX = clamp(
            offsetX,
            this.maxWidth - lastWidth,
            this.minWidth - lastWidth,
          );

          break;
      }
      switch (type) {
        case 't':
          dy = offsetY;
          dh = -offsetY;
          break;
        case 'l':
          dx = offsetX;
          dw = -offsetX;
          break;
        case 'b':
          dh = offsetY;
          break;
        case 'r':
          dw = offsetX;
          break;
        case 'tl':
          dx = offsetX;
          dy = offsetY;
          dw = -offsetX;
          dh = -offsetY;
          break;
        case 'tr':
          dy = offsetY;
          dw = offsetX;
          dh = -offsetY;
          break;
        case 'bl':
          dx = offsetX;
          dw = -offsetX;
          dh = offsetY;
          break;
        case 'br':
          dw = offsetX;
          dh = offsetY;
          break;
      }
      if (this.transform) {
        this.updateTransform.emit(
          matrix.translate(dx / matrix.a, dy / matrix.d).toString(),
        );
      }
      if (this._widthResize) {
        this._renderer.setStyle(
          this.container,
          'width',
          `${lastWidth + dw / matrix.a}px`,
        );
      }
      if (this._heightResize) {
        this._renderer.setStyle(
          this.container,
          'height',
          `${lastHeight + dh / matrix.d}px`,
        );
      }
    });
  }
}
