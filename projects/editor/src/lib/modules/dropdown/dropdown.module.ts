import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';

import { DropdownComponent } from './dropdown.component';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
  imports: [CommonModule, OverlayModule],
  exports: [DropdownDirective, DropdownComponent],
  declarations: [DropdownDirective, DropdownComponent],
})
export class DropdownModule {}
