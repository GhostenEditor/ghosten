import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PlatformModule } from '@angular/cdk/platform';

import { BatteryDirective } from './battery.directive';
import { GaugeDirective } from './gauge.directive';
import { WaterDirective } from './water.directive';

@NgModule({
  imports: [CommonModule, PlatformModule],
  exports: [WaterDirective, GaugeDirective, BatteryDirective],
  declarations: [WaterDirective, GaugeDirective, BatteryDirective],
})
export class GaugeModule {}
