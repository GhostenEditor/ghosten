import { Injectable } from '@angular/core';

import { Observable, fromEvent, merge } from 'rxjs';
import { filter, skipWhile, take, takeUntil, tap } from 'rxjs/operators';
import { removeDragRootStyle } from './toggleDragRootStyle';

function easeQuadInOut(p: number) {
  return 1 - Math.pow(p - 1, 4);
}

export const fromDragEvent = (target: Document, event: MouseEvent | TouchEvent): Observable<MouseEvent | TouchEvent> =>
  dragMove(target, event).pipe(
    skipWhile(e => {
      const { x, y } = calculateOffset(event, e);
      return Math.abs(x) + Math.abs(y) < 30;
    }),
    take(1),
    takeUntil(dragEnd(target, event).pipe(tap(() => removeDragRootStyle(target.documentElement, 'userSelect')))),
  );

export function cloneElement(target: HTMLElement): HTMLElement {
  const mirror: HTMLElement = target.cloneNode(true) as HTMLElement;
  if (target.querySelectorAll('canvas')) {
    const targetCanvasList = target.querySelectorAll('canvas');
    const cloneCanvasList = mirror.querySelectorAll('canvas');
    Array.from(targetCanvasList).forEach((canvas, index) => {
      cloneCanvasList[index].style.background = `url(${canvas.toDataURL()}) no-repeat center center / contain`;
      cloneCanvasList[index].style.width = '100%';
      cloneCanvasList[index].style.height = '100%';
    });
  }
  return mirror;
}

// export const createMirror = (target: HTMLElement) => {
//   const dragClientRect = target.getBoundingClientRect();
//   const mirror: HTMLElement = cloneElement(target);
//   mirror.classList.add('draggable-mirror');
//   mirror.style.left = dragClientRect.left + 'px';
//   mirror.style.top = dragClientRect.top + 'px';
//   mirror.style.width = dragClientRect.width + 'px';
//   mirror.style.height = dragClientRect.height + 'px';
//   document.body.appendChild(mirror);
//   return mirror;
// };
// export const createPlaceholder = (target: HTMLElement) => {
//   // const dragClientRect = target.getBoundingClientRect();
//   const placeholder: HTMLElement = cloneElement(target);
//   placeholder.classList.add('draggable-placeholder');
//   document.body.appendChild(placeholder);
//   return placeholder;
// };
export const removeMirror = (mirror: HTMLElement) => mirror.parentElement && mirror.parentElement.removeChild(mirror);

// 计算光标相对于dropNode的位置
// export function calcRelativePosition(t: HTMLElement, event: MouseEvent | TouchEvent) {
//   const { x, y, width, height } = t.getBoundingClientRect();
//   const { clientX, clientY } = !isTouchEvent(event) ? event : event.touches[0];
//   if (clientX - x < 10) {
//     return 'left';
//   }
//   if (clientY - y < 10) {
//     return 'top';
//   }
//   if (x + width - clientX < 10) {
//     return 'right';
//   }
//   if (y + height - clientY < 10) {
//     return 'bottom';
//   }
//   return 'center';
// }
//
// export function findDragAndDrop(
//   element: HTMLElement,
//   drag = element,
// ): { drag: HTMLElement | null; drop: HTMLElement | null } {
//   let drop: HTMLElement | null = null;
//   if (element.classList.contains('isDroppable')) {
//     drop = element;
//     return { drag, drop };
//   }
//   if (element.classList.contains('isDraggable')) {
//     drag = element;
//   }
//   if (element.parentElement !== null) {
//     return findDragAndDrop(element.parentElement, drag);
//   } else {
//     return { drag, drop };
//   }
// }

export const dragStart = (element: HTMLElement): Observable<MouseEvent | TouchEvent> =>
  merge(
    fromEvent<MouseEvent>(element, 'mousedown', { passive: true }),
    fromEvent<TouchEvent>(element, 'touchstart', { passive: true }).pipe(filter(event => event.touches.length === 1)),
  );

export const dragMove = (
  target: Document,
  startEvent: MouseEvent | TouchEvent,
): Observable<MouseEvent | TouchEvent> => {
  if (isTouchEvent(startEvent)) {
    return fromEvent<TouchEvent>(target, 'touchmove', {
      passive: false,
      capture: false,
    }).pipe(tap(event => event.preventDefault()));
  } else {
    return fromEvent<MouseEvent>(target, 'mousemove', {
      passive: true,
      capture: false,
    });
  }
};

export const dragEnd = (target: Document, startEvent: MouseEvent | TouchEvent): Observable<MouseEvent | TouchEvent> => {
  if (isTouchEvent(startEvent)) {
    return fromEvent<TouchEvent>(target, 'touchend', { capture: true });
  } else {
    return fromEvent<MouseEvent>(target, 'mouseup', { capture: true });
  }
};

export function calculateOffset(
  startEvent: MouseEvent | TouchEvent,
  moveEvent: MouseEvent | TouchEvent,
): { x: number; y: number } {
  if (isTouchEvent(startEvent) && isTouchEvent(moveEvent)) {
    const point1 = startEvent.touches[0] ||
      startEvent.changedTouches[0] || {
        pageX: 0,
        pageY: 0,
      };
    const point2 = moveEvent.touches[0] ||
      moveEvent.changedTouches[0] || {
        pageX: 0,
        pageY: 0,
      };
    return {
      x: point2.pageX - point1.pageX,
      y: point2.pageY - point1.pageY,
    };
  } else {
    return {
      x: (moveEvent as MouseEvent).clientX - (startEvent as MouseEvent).clientX,
      y: (moveEvent as MouseEvent).clientY - (startEvent as MouseEvent).clientY,
    };
  }
}

export interface TranslateAnimationObj {
  element: HTMLElement;
  from?: { left: number; top: number };
  to?: { left: number; top: number };
  duration?: number;
  elapse?: number;
}

@Injectable()
export class TranslateAnimation {
  status: 'start' | 'stop' = 'stop';
  queue: TranslateAnimationObj[] = [];
  lastFrameTime: number = Date.now();

  add(obj: TranslateAnimationObj) {
    const currentTranslate = obj.element.style.transform.match(/(\d|\.)+/g) || [0, 0];
    const index = this.queue.findIndex(item => item.element === obj.element);
    const { duration = 250, element, to = { left: 0, top: 0 } } = obj;
    let from = obj.from;
    const elapse = 0;

    if (index !== -1 || !from) {
      from = { left: +currentTranslate[0], top: +currentTranslate[1] };
    }

    const newObj: TranslateAnimationObj = {
      element,
      from,
      to,
      duration,
      elapse,
    };
    /*if (element.children[0].classList.contains('btn-primary')) {
     console.log(from);
     }*/
    if (from.left === to.left && from.top === to.top) {
      return;
    }
    if (index === -1) {
      this.queue.push(newObj);
    } else {
      this.queue[index] = newObj;
    }
    element.style.transform = `translate(${from.left}px,${from.top}px)`;
    if (this.status === 'stop') {
      this.start();
    }
  }

  remove(obj: TranslateAnimationObj) {
    this.queue.splice(this.queue.indexOf(obj), 1);
  }

  start() {
    this.status = 'start';
    this.lastFrameTime = performance.now();
    this.anime();
  }

  anime() {
    requestAnimationFrame(currentFrameTime => {
      const timePerFrame = currentFrameTime - this.lastFrameTime;
      // console.log(this.queue);
      this.queue.forEach(obj => {
        const { element, from, to, duration = 200, elapse } = obj;
        const progress = elapse! / duration > 1 ? 1 : elapse! / duration;
        const left = Math.round((to!.left - from!.left) * easeQuadInOut(progress) + from!.left);
        const top = Math.round((to!.top - from!.top) * easeQuadInOut(progress) + from!.top);
        element.style.transform = `translate(${left}px,${top}px)`;

        if (left === 0 && top === 0) {
          element.style.transform = '';
        }
        if (duration <= elapse!) {
          this.remove(obj);
        }
        obj.elapse! += timePerFrame;
      });
      if (this.queue.length > 0) {
        this.anime();
      } else {
        this.status = 'stop';
        // console.log('stop');
      }
      this.lastFrameTime = currentFrameTime;
    });
  }
}

export function isTouchEvent(event: TouchEvent | MouseEvent): event is TouchEvent {
  return event.type.startsWith('touch');
}

export function removeChild(child: HTMLElement | null) {
  if (child && child.parentElement) {
    child.parentElement.removeChild(child);
  }
}
