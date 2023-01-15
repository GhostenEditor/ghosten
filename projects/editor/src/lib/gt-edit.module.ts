// module
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BlackboardModule } from './components/blackboard/blackboard.module';
import { DataBindingPipe } from './components/items/data-binding.pipe';
import { ItemsModule } from './components/items/items.module';
import { NavbarModule } from './components/navbar/navbar.module';
import { SidebarModule } from './components/sidebar/sidebar.module';

import { ContextmenuModule, ResizeModule, TemplateModule, TooltipModule } from './modules';
import { DragDirective } from './directives';
import { GtEditComponent } from './gt-edit.component';
import { providers } from './providers';

// class
@NgModule({
  imports: [
    CommonModule,
    SidebarModule,
    TooltipModule,
    ResizeModule,
    ContextmenuModule,
    BlackboardModule,
    NavbarModule,
    ItemsModule,
  ],
  declarations: [GtEditComponent, DragDirective],
  exports: [GtEditComponent, TemplateModule, DataBindingPipe],
  providers,
})
export class GtEditCoreModule {}
