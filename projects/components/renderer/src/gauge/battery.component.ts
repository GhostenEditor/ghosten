import { Component } from '@angular/core';

import { BatteryProperty } from '@ghosten/components';
import { RenderAbstractComponent } from '@ghosten/renderer';

@Component({
  selector: 'gt-battery',
  template: ` <div class="text-center text-truncate">
      {{ this.property.title }}
    </div>
    <div class="flex-grow-1 overflow-hidden h-100">
      <canvas
        class="d-block"
        gt-battery
        [data]="property.data | dataBinding"
        [title]="property.title"
        [direction]="property.direction"
        [gaugeMax]="property.gaugeMax"
        [gaugeMin]="property.gaugeMin"
      ></canvas>
    </div>
    <div class="text-center text-truncate">{{ this.property.data || 0 }}/{{ this.property.gaugeMax }}</div>`,
})
export class BatteryComponent extends RenderAbstractComponent<BatteryProperty> {}
