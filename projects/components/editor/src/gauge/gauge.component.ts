import { Component } from '@angular/core';
import { EditAbstractComponent } from '@ghosten/editor';
import { GaugeProperty } from '@ghosten/components';

@Component({
  selector: 'gt-gauge',
  template: `
    <ng-template
      gt-gauge
      [max]="gtNode.property.gaugeMax"
      [min]="gtNode.property.gaugeMin"
    ></ng-template>
    <div class="px-2 text-center">{{ gtNode.property.title }}</div>
  `,
})
export class GaugeComponent extends EditAbstractComponent<GaugeProperty> {}
