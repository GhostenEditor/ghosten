import { Directive, ElementRef, Input, NgZone } from '@angular/core';

import { tween, waterBall } from '../plugins';
import { convertColorToGL } from '../utils';

@Directive({
  selector: '[gt-waterBall]',
})
export class WaterDirective {
  private waterBall: any;

  @Input() min: number;
  @Input() max: number;

  @Input() set value(v: number) {
    const value = (this.max - this.min) * this.waterBall.process + this.min;
    this._ngZone.runOutsideAngular(() =>
      tween(isNaN(value) ? 0 : value, v).subscribe(
        v => (this.waterBall.process = (v - this.min) / (this.max - this.min)),
      ),
    );
  }

  @Input() set color(v: string) {
    this._ngZone.runOutsideAngular(() =>
      tween<number[]>(this.waterBall.color, convertColorToGL(v)).subscribe(
        color => (this.waterBall.color = color),
      ),
    );
  }

  @Input() set background(v: string) {
    this._ngZone.runOutsideAngular(() =>
      tween<number[]>(this.waterBall.background, convertColorToGL(v)).subscribe(
        color => (this.waterBall.background = color),
      ),
    );
  }

  constructor(elementRef: ElementRef, private _ngZone: NgZone) {
    this._ngZone.runOutsideAngular(
      () => (this.waterBall = waterBall(elementRef.nativeElement)),
    );
  }
}
