import { A11yModule } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';

import { ModalComponent } from './modal.component';

@NgModule({
  imports: [DragDropModule, CommonModule, A11yModule],
  exports: [ModalComponent],
  declarations: [ModalComponent],
})
export class ModalModule {}
