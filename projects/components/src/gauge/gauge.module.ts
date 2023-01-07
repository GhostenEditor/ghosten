import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PlatformModule } from '@angular/cdk/platform';

import { GaugeDirective } from './gauge.directive';
import { WaterDirective } from './water.directive';

@NgModule({
  imports: [CommonModule, PlatformModule],
  exports: [WaterDirective, GaugeDirective],
  declarations: [WaterDirective, GaugeDirective],
})
export class GaugeModule {}
