import { NgModule } from '@angular/core';

import { ZoomDirective } from './zoom.directive';

@NgModule({
  exports: [ZoomDirective],
  declarations: [ZoomDirective],
})
export class ZoomModule {}
