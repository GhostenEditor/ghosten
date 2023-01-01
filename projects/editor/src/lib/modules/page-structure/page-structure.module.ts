import { BidiModule } from '@angular/cdk/bidi';
import { NgModule } from '@angular/core';

import {
  PageStructureDirective,
  PageStructureSourceDirective,
} from './page-structure.directive';

@NgModule({
  imports: [BidiModule],
  exports: [PageStructureDirective, PageStructureSourceDirective],
  declarations: [PageStructureDirective, PageStructureSourceDirective],
})
export class PageStructureModule {}
