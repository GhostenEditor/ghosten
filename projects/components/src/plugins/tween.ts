import { Observable, animationFrames, concat, take } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';
import { clamp } from '@ghosten/common';

export function tween<T>(from: T, to: T, duration = 500): Observable<T> {
  const valueInterpolate = interpolate<T>(from, to);
  const timeScale = timeProcess(0, duration);
  return tweenSource<T>(valueInterpolate, timeScale, duration);
}

const timeProcess = (start: number, end: number): ((t: number) => number) => {
  const duration = end - start;
  return (time: number): number => {
    time = clamp(time, start, end);
    return (time - start) / duration;
  };
};

function easeQuadInOut(p: number) {
  return 1 - Math.pow(p - 1, 4);
}

function tweenSource<T>(valueScale: (t: number) => T, timeScale: (t: number) => number, duration: number) {
  return concat(
    animationFrames().pipe(
      map(({ elapsed }) => elapsed / duration),
      takeWhile(v => v < 1),
    ),
    animationFrames().pipe(
      take(1),
      map(() => 1),
    ),
  ).pipe(map(progress => valueScale(easeQuadInOut(progress))));
}

export function interpolate<T>(from: any, to: any): (t: number) => T {
  return (progress: number) => {
    if (Array.isArray(from) && Array.isArray(to)) {
      return from.map((v: number, i) => (to[i] - v) * progress + v);
    } else if (typeof from === 'number' && typeof to === 'number') {
      return (to - from) * progress + from;
    } else {
      return to;
    }
  };
}
