import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { BatteryProperty, battery } from '@ghosten/components';
import { RenderAbstractComponent } from '@ghosten/renderer';

@Component({
  selector: 'gt-battery',
  template: ` <div class="text-center text-truncate">
      {{ this.property.title }}
    </div>
    <div class="flex-grow-1 overflow-hidden h-100">
      <canvas class="d-block" #canvas></canvas>
    </div>
    <div class="text-center text-truncate">
      {{ this.property.data || 0 }}/{{ this.property.gaugeMax }}
    </div>`,
})
export class BatteryComponent
  extends RenderAbstractComponent<BatteryProperty>
  implements OnInit
{
  @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLCanvasElement>;

  override ngOnInit() {
    super.ngOnInit();
    const canvas: HTMLCanvasElement = this.canvas.nativeElement;
    this.draw(canvas.getContext('2d')!);
  }

  draw(context: CanvasRenderingContext2D) {
    battery(
      context,
      this.property.title,
      this.property.data,
      this.property.gaugeMax,
      this.property.gaugeMin,
      this.property.direction,
    );
    requestAnimationFrame(() => this.draw(context));
  }
}
