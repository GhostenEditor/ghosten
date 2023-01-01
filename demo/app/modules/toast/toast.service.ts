import {
  ApplicationRef,
  ComponentRef,
  Injectable,
  Injector,
  createComponent,
} from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ToastComponent } from './toast.component';

@Injectable({ providedIn: 'root' })
export class ToastService {
  private componentRef: ComponentRef<ToastComponent>;

  constructor(
    private overlay: Overlay,
    private applicationRef: ApplicationRef,
    private injector: Injector,
  ) {}

  show(toast: any) {
    toast.time = Date.now();
    if (!this.componentRef) {
      const container = document.createElement('div');
      document.body.appendChild(container);
      this.componentRef = createComponent(ToastComponent, {
        environmentInjector: this.applicationRef.injector,
        hostElement: container,
      });
      this.applicationRef.attachView(this.componentRef.hostView);
      this.componentRef.instance.toastList = [toast];
    } else {
      this.componentRef.instance.toastList.push(toast);
    }
  }
}
