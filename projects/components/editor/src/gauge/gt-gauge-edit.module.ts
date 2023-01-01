import { NgModule } from '@angular/core';

import {
  GT_EDIT_COMPONENT_MAP,
  GT_NODE_DEFAULT_CONFIG,
  GT_TEMPLATE_MAP,
  GtEditCoreModule,
} from '@ghosten/editor';
import { WaterModule, gtGaugeConfigMap } from '@ghosten/components';

import { BatteryComponent } from './battery.component';
import { GaugeComponent } from './gauge.component';
import { GaugeDirective } from './gauge.directive';
import { WaterComponent } from './water.component';

@NgModule({
  imports: [GtEditCoreModule, WaterModule],
  declarations: [
    GaugeDirective,
    GaugeComponent,
    WaterComponent,
    BatteryComponent,
  ],
  exports: [WaterModule],
  providers: [
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
