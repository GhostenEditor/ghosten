import { Point } from '@angular/cdk/drag-drop';

import { EMPTY, Observable, Subject, of } from 'rxjs';

import { distinctUntilChanged, filter, map, skipWhile, switchMap, take, takeUntil, tap } from 'rxjs/operators';

import { calculateOffset, cloneElement, dragEnd, dragMove, dragStart, isTouchEvent, removeChild } from './drag';
import { removeDragRootStyle, setDragRootStyle } from './toggleDragRootStyle';
import { closest } from './index';
import { isDescendant } from './isDescendant';

export class Drag {
  private _target: HTMLElement | null = null;
  private _mirror: HTMLElement | null = null;
  private _placeholder: HTMLElement | null = null;
  private _parentElement: HTMLElement | null = null;
  private _refChild: HTMLElement | null = null;
  private _drop = new Subject<{
    parentElement: HTMLElement;
    refChild: HTMLElement | null;
    target: HTMLElement;
    placeholder: HTMLElement;
  }>();
  private _dragEnd$ = new Subject<{
    parentElement: HTMLElement;
    refChild: HTMLElement | null;
    target: HTMLElement;
  }>();
  drop = this._drop.asObservable();
  dragEnd = this._dragEnd$.asObservable();
  public disabled: boolean;

  constructor(public readonly el: HTMLElement, private _document: Document) {
    this._dragStart(this.el)
      .pipe(switchMap(event => this._dragEnd(this._dragMove(event), event)))
      .subscribe();
  }

  private _dragStart(el: HTMLElement): Observable<MouseEvent | TouchEvent> {
    return dragStart(el).pipe(
      switchMap(event => {
        this._target = closest(event.target as HTMLElement, '[data-draggable]');
        if (!(!isTouchEvent(event) && event.button !== 0) && !this.disabled && this._target) {
          return dragMove(this._document, event).pipe(
            skipWhile(e => {
              const { x, y } = calculateOffset(event, e);
              return Math.abs(x) + Math.abs(y) < 30;
            }),
            takeUntil(dragEnd(this._document, event)),
            take(1),
            switchMap(() => {
              const target = this._target!;
              const dragClientRect = target.getBoundingClientRect();
              const _document = this._document;

              function createMirror(target: HTMLElement) {
                const node: HTMLElement = cloneElement(target);
                for (const key in node.dataset) {
                  delete node.dataset[key];
                }
                node.style.width = dragClientRect.width + 'px';
                node.style.height = dragClientRect.height + 'px';
                const container = _document.createElement('div');
                container.classList.add('draggable-mirror');
                container.appendChild(node);
                return container;
              }

              function createPlaceholder(target: HTMLElement) {
                const node = cloneElement(target);
                for (const key in node.dataset) {
                  delete node.dataset[key];
                }
                node.classList.add('draggable-placeholder');
                return node;
              }

              this._mirror = createMirror(target);
              this._mirror.style.left = dragClientRect.left + 'px';
              this._mirror.style.top = dragClientRect.top + 'px';
              this._placeholder = createPlaceholder(target);
              this._placeholder.style.transform = `translate(${dragClientRect.left}px,${dragClientRect.top}px)`;
              target.classList.add('draggable-source');
              setDragRootStyle(this._document.documentElement, 'userSelect', 'none');
              setDragRootStyle(this._document.documentElement, 'cursor', 'grab');
              this._document.body.appendChild(this._mirror);
              this._document.body.appendChild(this._placeholder);
              return of(event);
            }),
          );
        } else {
          return EMPTY;
        }
      }),
    );
  }

  private _dragMove(startEvent: MouseEvent | TouchEvent) {
    return dragMove(this._document, startEvent).pipe(
      tap(event => {
        const { x, y } = calculateOffset(startEvent, event);
        this._mirror!.style.transform = `translate(${x}px,${y}px)`;
      }),
      // debounceTime(10),
      map(event => getDropAndRefElementByTarget(event, this._target!, this._document)),
      // tap(console.log),
      filter(
        (
          event,
        ): event is {
          parentElement: HTMLElement;
          refChild: HTMLElement | null;
        } => !!event,
      ),
      tap(({ parentElement, refChild }) => {
        this._parentElement = parentElement;
        this._refChild = refChild;
      }),
      distinctUntilChanged((x, y) => x.parentElement === y.parentElement && x.refChild === y.refChild),
      tap(event =>
        this._drop.next({
          ...event,
          target: this._target!,
          placeholder: this._placeholder!,
        }),
      ),
    );
  }

  private _dragEnd(
    source: Observable<{
      parentElement: HTMLElement;
      refChild: HTMLElement | null;
    }>,
    event: MouseEvent | TouchEvent,
  ): Observable<{ parentElement: HTMLElement; refChild: HTMLElement | null }> {
    return source.pipe(
      takeUntil(
        dragEnd(this._document, event).pipe(
          tap(() => {
            if (this._parentElement) {
              this._dragEnd$.next({
                parentElement: this._parentElement,
                refChild: this._refChild,
                target: this._target!,
              });
            }
            removeDragRootStyle(this._document.documentElement, 'userSelect');
            removeDragRootStyle(this._document.documentElement, 'cursor');
            removeChild(this._placeholder);
            removeChild(this._mirror);
            if (this._target) {
              this._target.classList.remove('draggable-source');
            }
            this._mirror = null;
            this._placeholder = null;
            this._target = null;
            this._parentElement = null;
            this._refChild = null;
          }),
        ),
      ),
    );
  }
}

export function getEventPoint(event: TouchEvent | MouseEvent): Point {
  if (isTouchEvent(event)) {
    return { x: event.touches[0].pageX, y: event.touches[0].pageY };
  } else {
    return { x: event.pageX, y: event.pageY };
  }
}

export function getMoveEventTarget(event: TouchEvent | MouseEvent, _document: Document): HTMLElement {
  if (isTouchEvent(event)) {
    return _document.elementFromPoint(event.touches[0].pageX, event.touches[0].pageY) as HTMLElement;
  } else {
    return event.target as HTMLElement;
  }
}

// todo: 类型限制
export function getDropAndRefElementByTarget(
  event: MouseEvent | TouchEvent,
  source: HTMLElement,
  _document: Document,
): { parentElement: HTMLElement; refChild: HTMLElement | null } | null {
  const target = getMoveEventTarget(event, _document);
  const { x, y } = getEventPoint(event);
  let gtElement: HTMLElement | null = null;
  let droppableElement: HTMLElement | null = null;
  let parentElement: HTMLElement | null = null;
  let refChild: HTMLElement | null = null;
  let cachedDom = target as HTMLElement;
  while (cachedDom.parentElement) {
    if (cachedDom.classList.contains('gt-page')) {
      const relativePosition = getRelativePosition({ x, y }, cachedDom);
      parentElement = cachedDom.children[0] as HTMLElement;
      switch (relativePosition) {
        case 'left':
        case 'top':
          refChild = Array.from(parentElement.children).find(child => child !== source) as HTMLElement;
          break;
        default:
          refChild = null;
          break;
      }
      return { refChild, parentElement };
    }
    if (cachedDom.dataset.hasOwnProperty('root')) {
      const relativePosition = getRelativePosition({ x, y }, cachedDom);
      parentElement = cachedDom as HTMLElement;
      switch (relativePosition) {
        case 'left':
        case 'top':
          refChild = Array.from(parentElement.children).find(child => child !== source) as HTMLElement;
          break;
        default:
          refChild = null;
          break;
      }
      return { refChild, parentElement };
    }
    if (cachedDom.dataset.hasOwnProperty('droppable')) {
      if (!droppableElement) {
        droppableElement = cachedDom;
      }
      if (cachedDom.classList.contains('gt-node')) {
        gtElement = cachedDom;
        break;
      }
    }
    if (cachedDom.dataset.hasOwnProperty('draggable')) {
      if (cachedDom.classList.contains('gt-node')) {
        gtElement = cachedDom;
        break;
      }
    }
    cachedDom = cachedDom.parentElement;
  }
  const gtPageDom = _document.querySelector('.gt-page');
  if (!gtPageDom) {
    throw new Error('');
  }
  if (gtElement === null) {
    return null; // gtElement = gtPageDom.children[0] as HTMLElement;
  }

  if (droppableElement === null) {
    const relativePosition = getRelativePosition({ x, y }, gtElement, gtElement.dataset.canHasChild === 'true');
    switch (relativePosition) {
      case 'left':
      case 'top':
        parentElement = gtElement.parentElement!;
        refChild = gtElement;
        break;
      case 'right':
      case 'bottom':
        parentElement = gtElement.parentElement!;
        refChild = gtElement.nextElementSibling! as HTMLElement;
        break;
      case 'center':
        return null;
    }
  } else {
    const relativePosition = getRelativePosition({ x, y }, droppableElement);
    if (gtElement === droppableElement) {
      switch (relativePosition) {
        case 'left':
        case 'top':
          parentElement = gtElement.parentElement!;
          refChild = gtElement;
          break;
        case 'right':
        case 'bottom':
          parentElement = gtElement.parentElement!;
          refChild = gtElement.nextElementSibling! as HTMLElement;
          break;
        case 'center':
          parentElement = gtElement!;
          refChild = null;
      }
    } else {
      switch (relativePosition) {
        case 'left':
        case 'top':
        case 'right':
        case 'bottom':
        case 'center':
          parentElement = droppableElement;
      }
    }
  }
  if (
    (refChild !== null && (refChild === source.nextElementSibling || refChild === source)) ||
    isDescendant(gtElement, source)
  ) {
    return null;
  }
  return { parentElement, refChild };
}

function getRelativePosition(
  { x, y }: Point,
  element: HTMLElement,
  canHasChild: boolean = true,
): 'top' | 'bottom' | 'left' | 'right' | 'center' {
  const edgeRate = canHasChild ? 0.08 : 0.5;
  const max = canHasChild ? 10 : Infinity;
  const { top, bottom, left, right, width, height } = element.getBoundingClientRect();
  if (y - top < Math.min(height * edgeRate, max)) {
    return 'top';
  } else if (bottom - y < Math.min(height * edgeRate, max)) {
    return 'bottom';
  } else if (right - x < Math.min(width * edgeRate, max)) {
    return 'right';
  } else if (x - left < Math.min(width * edgeRate, max)) {
    return 'left';
  } else {
    return 'center';
  }
}

export function findGtElement(element: HTMLElement | null): HTMLElement | null {
  let gtElement: HTMLElement | null = null;
  if (!element) return null;
  while (element.parentElement) {
    if (element.classList.contains('gt-node')) {
      return element;
    }
    element = element.parentElement;
  }
  return gtElement;
}
