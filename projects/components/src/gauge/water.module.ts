import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WaterDirective } from './water.directive';

@NgModule({
  imports: [CommonModule],
  exports: [WaterDirective],
  declarations: [WaterDirective],
})
export class WaterModule {}
