import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { ToastComponent } from './toast.component';
import { ToastService } from './toast.service';

@NgModule({
  imports: [OverlayModule, CommonModule, PortalModule],
  declarations: [ToastComponent],
  providers: [ToastService],
})
export class ToastModule {}
