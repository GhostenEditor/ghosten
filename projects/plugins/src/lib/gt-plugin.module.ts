import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { A11yModule } from '@angular/cdk/a11y';
import { CdkListboxModule } from '@angular/cdk/listbox';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';

import { ContextmenuModule } from './contextmenu/contextmenu.module';
import { CreateTableComponent } from './create-table.component';
import { ModalActionComponent } from './modal-action/action-edit.component';
import { ModalModule } from './modules/modal/modal.module';
import { NodeEditorModule } from './modals/node-editor/node-editor.module';
import { SelectModule } from './select/select.module';
import { modals } from './modals';
import { providers } from './providers';

@NgModule({
  imports: [
    CommonModule,
    ContextmenuModule,
    FormsModule,
    DragDropModule,
    A11yModule,
    CdkListboxModule,
    SelectModule,
    ReactiveFormsModule,
    ModalModule,
    NodeEditorModule,
  ],
  declarations: [CreateTableComponent, ModalActionComponent, ...modals],
  exports: [ModalModule],
  providers,
})
export class GtPluginModule {}
