import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { A11yModule } from '@angular/cdk/a11y';
import { CdkListboxModule } from '@angular/cdk/listbox';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';

import { ConfigFormModule } from './modules/config-form/config-form.module';
import { CreateTableComponent } from './create-table.component';
import { ModalModule } from './modules/modal/modal.module';
import { modals } from './modals';
import { providers } from './providers';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DragDropModule,
    A11yModule,
    CdkListboxModule,
    ReactiveFormsModule,
    ModalModule,
    ConfigFormModule,
  ],
  declarations: [CreateTableComponent, ...modals],
  providers,
})
export class GtPluginModule {}
