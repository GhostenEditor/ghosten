import { NgModule } from '@angular/core';

import { PageStructureModule, PanModule, ResizeModule, TemplateModule, ZoomModule } from '../../modules';
import { BlackboardComponent } from './blackboard.component';

@NgModule({
  imports: [PanModule, PageStructureModule, ResizeModule, ZoomModule, TemplateModule],
  exports: [BlackboardComponent],
  declarations: [BlackboardComponent],
})
export class BlackboardModule {}
