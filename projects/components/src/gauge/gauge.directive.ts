import { Directive, Input, NgZone, OnDestroy, ViewContainerRef } from '@angular/core';
import { Platform } from '@angular/cdk/platform';

import { Subscription } from 'rxjs';

import { Gauge, tween } from '../plugins';

@Directive({
  selector: '[gt-gauge]',
})
export class GaugeDirective implements OnDestroy {
  private gauge: Gauge;
  private subscription = Subscription.EMPTY;

  @Input() set min(v: number) {
    this.gauge.min = +v;
    this.gauge.render();
  }

  @Input() set max(v: number) {
    this.gauge.max = +v;
    this.gauge.render();
  }

  @Input() set startColor(v: string) {
    this.gauge.color1 = v;
    this.gauge.render();
  }

  @Input() set endColor(v: string) {
    this.gauge.color2 = v;
    this.gauge.render();
  }

  @Input() set data(data: number) {
    this._ngZone.runOutsideAngular(() => {
      this.subscription.unsubscribe();
      this.subscription = tween(
        this.gauge.value,
        data,
        (Math.abs(data - this.gauge.value) / (this.gauge.max - this.gauge.min)) * 1500,
      ).subscribe(v => (this.gauge.value = v));
    });
  }

  constructor(private _ngZone: NgZone, viewContainerRef: ViewContainerRef, platform: Platform) {
    this.gauge = new Gauge(viewContainerRef.element.nativeElement.parentElement, platform.SAFARI);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
