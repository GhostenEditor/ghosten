import { Component } from '@angular/core';
import { EditAbstractComponent } from '@ghosten/editor';
import { GaugeProperty } from '@ghosten/components';

@Component({
  selector: 'gt-gauge',
  template: `
    <canvas
      gt-gauge
      [data]="property.data | dataBinding"
      [max]="gtNode.property.gaugeMax"
      [min]="gtNode.property.gaugeMin"
      [startColor]="property.startColor"
      [endColor]="property.endColor"
    ></canvas>
    <div class="px-2 text-center">{{ gtNode.property.title }}</div>
  `,
})
export class GaugeComponent extends EditAbstractComponent<GaugeProperty> {}
