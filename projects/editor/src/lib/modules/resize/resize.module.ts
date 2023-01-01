import { NgModule } from '@angular/core';

import { ResizeDirective } from './resize.directive';

@NgModule({
  exports: [ResizeDirective],
  declarations: [ResizeDirective],
})
export class ResizeModule {}
