import { Observable, animationFrames, concat, take } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

export function tween<T>(from: T, to: T, duration = 500): Observable<T> {
  const valueInterpolate = interpolate<T>(from, to);
  return tweenSource<T>(valueInterpolate, duration);
}

function easeQuadInOut(p: number) {
  return 1 - Math.pow(p - 1, 4);
}

function tweenSource<T>(valueScale: (t: number) => T, duration: number) {
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
