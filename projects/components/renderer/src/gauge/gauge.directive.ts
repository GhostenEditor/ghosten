import {
  Directive,
  Input,
  NgZone,
  OnDestroy,
  ViewContainerRef,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { Gauge, tween } from '@ghosten/components';

@Directive({
  selector: '[gt-gauge]',
})
export class GaugeDirective implements OnDestroy {
  private gauge: Gauge;
  private subscription = Subscription.EMPTY;

  @Input() set min(v: number) {
    this.gauge.min = v;
    this.gauge.render();
  }

  @Input() set max(v: number) {
    this.gauge.max = +v;
    this.gauge.render();
  }

  @Input() set data(data: number) {
    this.subscription.unsubscribe();
    this._ngZone.runOutsideAngular(() => {
      this.subscription = tween(this.gauge.value, data).subscribe(
        v => (this.gauge.value = v),
      );
    });
  }

  constructor(viewContainerRef: ViewContainerRef, private _ngZone: NgZone) {
    this.gauge = new Gauge(
      viewContainerRef.element.nativeElement.parentElement,
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
