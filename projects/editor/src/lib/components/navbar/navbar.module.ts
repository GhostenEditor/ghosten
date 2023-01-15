import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DropdownModule, TooltipModule } from '../../modules';
import { NavbarComponent } from './navbar.component';

@NgModule({
  imports: [DropdownModule, TooltipModule, CommonModule],
  exports: [NavbarComponent],
  declarations: [NavbarComponent],
})
export class NavbarModule {}
