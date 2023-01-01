import { Directive, Input, NgZone, ViewContainerRef } from '@angular/core';

import { Gauge } from '@ghosten/components';

@Directive({
  selector: '[gt-gauge]',
})
export class GaugeDirective {
  private gauge: Gauge;

  @Input() set min(v: number) {
    this.gauge.min = v;
    this.gauge.render();
  }

  @Input() set max(v: number) {
    this.gauge.max = +v;
    this.gauge.render();
  }

  constructor(public viewContainerRef: ViewContainerRef, _ngZone: NgZone) {
    _ngZone.runOutsideAngular(() => {
      this.gauge = new Gauge(
        viewContainerRef.element.nativeElement.parentElement,
      );
      this.gauge.value = 80;
    });
  }
}
