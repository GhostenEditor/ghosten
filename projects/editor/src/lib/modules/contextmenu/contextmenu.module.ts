import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContextMenu, ContextMenuComponent } from './contextMenu';

@NgModule({
  imports: [CommonModule],
  declarations: [ContextMenuComponent],
  providers: [ContextMenu],
})
export class ContextmenuModule {}
