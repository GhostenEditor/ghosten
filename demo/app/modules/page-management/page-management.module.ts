import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GtPluginModule } from '@ghosten/plugins';

import { DropdownComponent } from './dropdown.component';
import { PageEditComponent } from './page-edit.component';
import { PagesComponent } from './pages.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, GtPluginModule],
  exports: [DropdownComponent],
  declarations: [DropdownComponent, PagesComponent, PageEditComponent],
  providers: [],
})
export class PageManagementModule {}
