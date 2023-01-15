import { NgModule } from '@angular/core';

import {
  GT_EDIT_COMPONENT_MAP,
  GT_ELEMENT_LISTS,
  GT_NODE_DEFAULT_CONFIG,
  GT_TEMPLATE_MAP,
  GtEditCoreModule,
} from '@ghosten/editor';
import { GaugeModule, gtGaugeConfigMap } from '@ghosten/components';

import { BatteryComponent } from './battery.component';
import { GaugeComponent } from './gauge.component';
import { WaterComponent } from './water.component';

@NgModule({
  imports: [GtEditCoreModule, GaugeModule],
  declarations: [GaugeComponent, WaterComponent, BatteryComponent],
  providers: [
    {
      provide: GT_ELEMENT_LISTS,
      useValue: {
        title: $localize`:Element Group Title\: Component:组件`,
        elements: [
          {
            label: $localize`:Element Label\: Gauge:仪表盘`,
            type: 'gauge',
            icon: 'gauge',
          },
          {
            label: $localize`:Element Label\: Water:水位图`,
            type: 'water',
            icon: 'water',
          },
          {
            label: $localize`:Element Label\: Slot:占位符`,
            type: 'slot',
            icon: 'slot',
          },
          {
            label: $localize`:Element Label\: Battery:电池`,
            type: 'battery',
            icon: 'battery',
          },
        ],
      },
      multi: true,
    },
    {
      provide: GT_EDIT_COMPONENT_MAP,
      useValue: {
        gauge: GaugeComponent,
        water: WaterComponent,
        battery: BatteryComponent,
      },
      multi: true,
    },
    {
      provide: GT_NODE_DEFAULT_CONFIG,
      useFactory: gtGaugeConfigMap,
      multi: true,
    },
    {
      provide: GT_TEMPLATE_MAP,
      useValue: {
        gauge: '<div>Gauge</div>',
        water: '<div>Water</div>',
        battery: '<div>Battery</div>',
      },
      multi: true,
    },
  ],
})
export class GtGaugeEditModule {}
