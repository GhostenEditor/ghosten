import { NgModule } from '@angular/core';

import { DataBindingPipe } from './data-binding.pipe';
import { DivisionComponent } from './division.component';
import { EditAbstractComponent } from './abstract.component';
import { TemplateModule } from '../../modules';

@NgModule({
  imports: [TemplateModule],
  exports: [DataBindingPipe],
  declarations: [EditAbstractComponent, DivisionComponent, DataBindingPipe],
})
export class ItemsModule {}
