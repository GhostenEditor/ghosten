import { ComponentRef, Injectable } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { Overlay } from '@angular/cdk/overlay';

import { IToast, ToastPositions } from './types';
import { ToastComponent } from './toast.component';

@Injectable({ providedIn: 'root' })
export class ToastService {
  private componentRefs: Partial<
    Record<ToastPositions, ComponentRef<ToastComponent>>
  > = {};

  constructor(private overlay: Overlay) {}

  show(toast: IToast) {
    const position = toast.position || 'bottom_right';
    if (!this.componentRefs[position]) {
      this.componentRefs[position] = this.overlay
        .create()
        .attach(new ComponentPortal(ToastComponent));
      this.componentRefs[position]!.instance.position = position;
    }
    this.componentRefs[position]!.instance.add(toast);
  }
}
