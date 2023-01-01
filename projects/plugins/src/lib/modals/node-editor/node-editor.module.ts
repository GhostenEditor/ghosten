import { AccordionModule, PanModule, ZoomModule } from '@ghosten/editor';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';

import { ConnectionService } from './connection.service';
import { ConnectionsComponent } from './connections.component';
import { ModalModule } from '../../modules/modal/modal.module';
import { NodeComponent } from './node.component';
import { NodeEditorCanvasDirective } from './node-editor.canvas';
import { NodeEditorComponent } from './node-editor.component';
import { SocketDirective } from './socket.directive';

@NgModule({
  imports: [
    CommonModule,
    ModalModule,
    AccordionModule,
    DragDropModule,
    ZoomModule,
    PanModule,
  ],
  exports: [],
  declarations: [
    NodeEditorComponent,
    NodeEditorCanvasDirective,
    NodeComponent,
    ConnectionsComponent,
    SocketDirective,
  ],
  providers: [ConnectionService],
})
export class NodeEditorModule {}
