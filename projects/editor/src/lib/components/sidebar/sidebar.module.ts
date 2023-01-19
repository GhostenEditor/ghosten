import { CdkTreeModule } from '@angular/cdk/tree';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';

import { AccordionModule, ResizeModule } from '../../modules';
import { PanelModule } from '../panels/panel.module';

import { FloatBarComponent } from './float-bar.component';
import { SidebarComponent } from './sidebar.component';
import { SidebarConfigComponent } from './sidebar-config.component';
import { SidebarElementComponent } from './sidebar-element.component';
import { SidebarPageComponent } from './sidebar-page.component';
import { SidebarService } from './sidebar.service';
import { SidebarTreeComponent } from './sidebar-tree.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    OverlayModule,
    PanelModule,
    AccordionModule,
    DragDropModule,
    CdkTreeModule,
    PortalModule,
    ResizeModule,
  ],
  declarations: [
    SidebarConfigComponent,
    SidebarElementComponent,
    SidebarTreeComponent,
    SidebarPageComponent,
    SidebarComponent,
    FloatBarComponent,
  ],
  providers: [SidebarService],
  exports: [SidebarComponent],
})
export class SidebarModule {}
