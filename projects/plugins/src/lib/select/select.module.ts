import { CdkListboxModule } from '@angular/cdk/listbox';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { DropdownComponent } from './dropdown.component';
import { SelectComponent } from './select.component';

@NgModule({
  imports: [CommonModule, CdkListboxModule, FormsModule],
  exports: [SelectComponent],
  declarations: [SelectComponent, DropdownComponent],
  providers: [],
})
export class SelectModule {}
