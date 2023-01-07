import { Directive, ElementRef, Input, NgZone } from '@angular/core';
import { Subscription } from 'rxjs';

import { tween, waterBall } from '../plugins';
import { convertColorToGL } from '../utils';
import { interpolate } from '../plugins/tween';

@Directive({
  selector: '[gt-waterBall]',
})
export class WaterDirective {
  private waterBall: any;
  private _min: number | undefined;
  private _max: number | undefined;
  private _minColor: string;
  private _maxColor: string;
  private _value: number | undefined;
  private subscription = Subscription.EMPTY;

  @Input() get min() {
    return this._min;
  }

  set min(v: number | undefined) {
    this._min = v;
    this.updateValue();
  }

  @Input() get max() {
    return this._max;
  }

  set max(v: number | undefined) {
    this._max = v;
    this.updateValue();
  }

  @Input() get value() {
    return this._value;
  }

  set value(v: number | undefined) {
    this._value = v;
    this.updateValue();
  }

  @Input() get minColor() {
    return this._minColor;
  }

  set minColor(v: string) {
    this._minColor = v;
    this.updateValue();
  }

  @Input() get maxColor() {
    return this._maxColor;
  }

  set maxColor(v: string) {
    this._maxColor = v;
    this.updateValue();
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

  private updateValue() {
    this._ngZone.runOutsideAngular(() => {
      if (
        typeof this.max === 'number' &&
        typeof this.min === 'number' &&
        typeof this.value === 'number'
      ) {
        const value = (this.max - this.min) * this.waterBall.process + this.min;
        this.subscription.unsubscribe();
        this.subscription = tween(
          isNaN(value) ? 0 : value,
          this.value,
        ).subscribe(value => {
          this.waterBall.process =
            (value - this.min!) / (this.max! - this.min!);
          this.waterBall.color = this.getColor(this.waterBall.process);
        });
      }
    });
  }

  // private updateColor() {
  //   this.waterBall.color = this.getColor(this.waterBall.process);
  // }

  private getColor(value: number): number[] {
    return interpolate<number[]>(
      convertColorToGL(this.minColor),
      convertColorToGL(this.maxColor),
    )(value);
  }
}
