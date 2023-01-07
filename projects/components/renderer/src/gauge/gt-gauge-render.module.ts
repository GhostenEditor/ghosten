import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  GT_NODE_DEFAULT_CONFIG,
  GT_RENDER_COMPONENT_MAP,
  GtRenderCoreModule,
} from '@ghosten/renderer';
import { GaugeModule, gtGaugeConfigMap } from '@ghosten/components';

import { BatteryComponent } from './battery.component';
import { GaugeComponent } from './gauge.component';
import { WaterComponent } from './water.component';

@NgModule({
  imports: [CommonModule, GtRenderCoreModule, GaugeModule],
  declarations: [GaugeComponent, WaterComponent, BatteryComponent],
  providers: [
    {
      provide: GT_RENDER_COMPONENT_MAP,
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
  ],
})
export class GtGaugeRenderModule {}
