import { Observable, animationFrameScheduler, defer, interval } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';
import { clamp } from '@ghosten/common';
import { interpolate } from 'd3-interpolate';

export function tween<T>(from: T, to: T, duration = 500): Observable<T> {
  const valueInterpolate = interpolate(from, to);
  const timeScale = timeProcess(0, duration);
  return tweenSource(valueInterpolate, timeScale, duration);
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

function tweenSource<T>(
  valueScale: (t: number) => T,
  timeScale: (t: number) => number,
  duration: number,
) {
  return defer(() => {
    const start = animationFrameScheduler.now();
    return interval(0, animationFrameScheduler).pipe(
      map(() => animationFrameScheduler.now() - start),
    );
  }).pipe(
    takeWhile(elapsed => elapsed < duration),
    map(elapsed => valueScale(easeQuadInOut(timeScale(elapsed)))),
  );
}
