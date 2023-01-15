import { ComponentRef, Directive, Injector, StaticProvider, Type, ViewContainerRef, ViewRef } from '@angular/core';

@Directive({ selector: '[template-directive]' })
export class TemplateDirective {
  constructor(public viewContainerRef: ViewContainerRef, private injector: Injector) {}

  insert<K>(formItem: any, component: Type<K>, providers: StaticProvider[] = [], index?: number): ComponentRef<K> {
    const injector: Injector = Injector.create({
      providers,
      parent: this.injector,
    });
    return this.viewContainerRef.createComponent<K>(component, {
      index,
      injector,
    });
  }

  move(hostView: ViewRef, index: number) {
    if (index !== this.viewContainerRef.indexOf(hostView)) {
      this.viewContainerRef.move(hostView, index);
    }
  }

  remove(index?: number) {
    this.viewContainerRef.remove(index);
  }
}
