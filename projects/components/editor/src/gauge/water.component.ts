import { Component } from '@angular/core';
import { EditAbstractComponent } from '@ghosten/editor';
import { WaterProperty } from '@ghosten/components';

@Component({
  selector: 'gt-water',
  template: `
    <div class="position-relative h-100">
      <canvas
        class="d-block mx-auto"
        gt-waterBall
        [value]="gtNode.property.data"
        [max]="gtNode.property.gaugeMax"
        [min]="gtNode.property.gaugeMin"
        [color]="gtNode.property.color"
        [background]="gtNode.property.background"
      ></canvas>
      <span
        class="position-absolute top-50 start-50 translate-middle text-white"
        style="margin-top: -14px"
        >{{ gtNode.property.data }}</span
      >
      <div class="text-truncate text-center">{{ gtNode.property.title }}</div>
    </div>
  `,
})
export class WaterComponent extends EditAbstractComponent<WaterProperty> {}
