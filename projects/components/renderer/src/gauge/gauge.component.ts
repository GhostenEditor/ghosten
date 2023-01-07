import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GaugeProperty } from '@ghosten/components';
import { RenderAbstractComponent } from "@ghosten/renderer";

@Component({
  selector: 'gt-gauge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <ng-template
      gt-gauge
      [max]="property.gaugeMax"
      [min]="property.gaugeMin"
      [startColor]="property.startColor"
      [endColor]="property.endColor"
      [data]="property.data | dataBinding"
    ></ng-template>
    <div class="px-2 text-center">{{ gtNode.property.title }}</div>`,
})
export class GaugeComponent extends RenderAbstractComponent<GaugeProperty> {}
