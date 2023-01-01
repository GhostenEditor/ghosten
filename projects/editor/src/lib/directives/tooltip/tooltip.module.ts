import { BidiModule } from '@angular/cdk/bidi';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TooltipComponent } from './tooltip.component';
import { TooltipDirective } from './tooltip.directive';

@NgModule({
  imports: [CommonModule, BidiModule],
  exports: [TooltipDirective],
  declarations: [TooltipComponent, TooltipDirective],
})
export class TooltipModule {}
