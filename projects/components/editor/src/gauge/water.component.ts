import { Component } from '@angular/core';
import { EditAbstractComponent } from '@ghosten/editor';
import { WaterProperty } from '@ghosten/components';

@Component({
  selector: 'gt-water',
  template: `
    <div class="h-100 d-flex flex-column">
      <div class="position-relative flex-grow-1">
        <canvas
          class="d-block mx-auto"
          gt-waterBall
          [value]="property.data"
          [max]="property.gaugeMax"
          [min]="property.gaugeMin"
          [minColor]="property.minColor"
          [maxColor]="property.maxColor"
          [background]="property.background"
        ></canvas>
        <span class="position-absolute top-50 start-50 translate-middle text-white">{{ property.data }}</span>
      </div>
      <div class="text-truncate text-center p-2">{{ property.title }}</div>
    </div>
  `,
})
export class WaterComponent extends EditAbstractComponent<WaterProperty> {}
