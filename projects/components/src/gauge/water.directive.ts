import {
  Directive,
  ElementRef,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { WaterBall, interpolate, tween } from '../plugins';
import { convertColorToGL } from '../utils';

@Directive({
  selector: '[gt-waterBall]',
})
export class WaterDirective implements OnInit, OnDestroy {
  private waterBall: WaterBall;
  private _min: number | undefined;
  private _max: number | undefined;
  private _minColor: string;
  private _maxColor: string;
  private _value: number | undefined;
  private subscription = Subscription.EMPTY;
  private frameId: number;

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

  constructor(private elementRef: ElementRef, private _ngZone: NgZone) {
    this.waterBall = new WaterBall(this.elementRef.nativeElement);
  }

  ngOnInit() {
    this._ngZone.runOutsideAngular(() => {
      const loop = (time: number) => {
        this.waterBall.render(time);
        this.frameId = requestAnimationFrame(loop);
      };
      this.frameId = requestAnimationFrame(loop);
    });
  }

  ngOnDestroy() {
    this.waterBall.destroy();
    cancelAnimationFrame(this.frameId);
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
