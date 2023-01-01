import { NgModule } from '@angular/core';

import { PanDirective } from './pan.directive';

@NgModule({
  exports: [PanDirective],
  declarations: [PanDirective],
})
export class PanModule {}
