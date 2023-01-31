import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GtModalModule } from '@ghosten/utils';
import { PageEditComponent } from './page-edit.component';
import { PagesComponent } from './pages.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, GtModalModule, DragDropModule],
  declarations: [PagesComponent, PageEditComponent],
})
export class PageManagementModule {}
