import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { BatteryProperty, battery } from '@ghosten/components';
import { RenderAbstractComponent } from '@ghosten/renderer';

@Component({
  selector: 'gt-battery',
  template: ` <div class="battery-title">{{ this.gtNode.property.title }}</div>
    <div class="battery-canvas flex-grow-1 overflow-hidden">
      <canvas #canvas></canvas>
    </div>
    <div class="battery-value">
      {{ this.gtNode.property.data || 0 }}/{{ this.gtNode.property.gaugeMax }}
    </div>`,
})
export class BatteryComponent
  extends RenderAbstractComponent<BatteryProperty>
  implements OnInit {
  @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLCanvasElement>;
  // public value: number;
  // public max: number;
  // public title: string;
  // private direction: 'horizontal' | 'vertical' = 'vertical';
  // private min: number;

  override ngOnInit() {
    super.ngOnInit();
    const canvas: HTMLCanvasElement = this.canvas.nativeElement;
    // const context = canvas.getContext('2d')!;
    // this.min = this.gtNode.property.gaugeMin;
    // this.max = this.gtNode.property.gaugeMax;
    // this.title = this.gtNode.property.title;
    // this.direction = this.gtNode.property.direction;
    // battery(context, this.title, this.value, this.max, this.min, this.direction);
    // this.subscriptions.push(this.gtNode.property.data
    //   .pipe(map((value: any) => isNaN(+value) ? 0 : +value))
    //   .subscribe((value: number) => {
    //     this.value = value;
    //     battery(context, this.title, value, this.max, this.min, this.direction);
    //   }));
    this.draw(canvas.getContext('2d')!);
  }

  draw(context: CanvasRenderingContext2D) {
    battery(
      context,
      this.gtNode.property.title,
      this.gtNode.property.data,
      this.gtNode.property.gaugeMax,
      this.gtNode.property.gaugeMin,
      this.gtNode.property.direction,
    );
    requestAnimationFrame(() => this.draw(context));
  }
}
