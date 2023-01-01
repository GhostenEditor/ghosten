import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EditAbstractComponent } from '@ghosten/editor';
import { battery } from '@ghosten/components';

@Component({
  selector: 'gt-battery',
  template: ` <div class="battery-title">{{ this.gtNode.property.title }}</div>
    <div class="battery-canvas flex-grow-1 overflow-hidden">
      <canvas #canvas></canvas>
    </div>
    <div class="battery-value">
      {{ this.gtNode.property.get('data') || 0 }}/{{
        this.gtNode.property.gaugeMax
      }}
    </div>`,
})
export class BatteryComponent extends EditAbstractComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLCanvasElement>;

  override ngOnInit() {
    super.ngOnInit();
    const canvas = this.canvas.nativeElement;
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
