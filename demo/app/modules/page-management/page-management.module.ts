import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ModalModule } from '../modal/modal.module';

import { PageEditComponent } from './page-edit.component';
import { PagesComponent } from './pages.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ModalModule],
  declarations: [PagesComponent, PageEditComponent],
})
export class PageManagementModule {}
