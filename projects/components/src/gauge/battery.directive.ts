import { Directive, ElementRef, Input, NgZone, OnDestroy, OnInit } from '@angular/core';

import { battery } from '../plugins';

@Directive({
  selector: '[gt-battery]',
})
export class BatteryDirective implements OnInit, OnDestroy {
  private frameId: number;

  @Input() title: string;
  @Input() data: number;
  @Input() gaugeMax: number;
  @Input() gaugeMin: number;
  @Input() direction: 'horizontal' | 'vertical';

  constructor(private elementRef: ElementRef<HTMLCanvasElement>, private ngZone: NgZone) {}

  // todo ssr not supports canvas
  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      const context = this.elementRef.nativeElement.getContext('2d')!;
      battery(context, this.data, this.gaugeMax, this.gaugeMin, this.direction);
      const loop = () => {
        battery(context, this.data, this.gaugeMax, this.gaugeMin, this.direction);
        this.frameId = requestAnimationFrame(loop);
      };
      this.frameId = requestAnimationFrame(loop);
    });
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.frameId);
  }
}
