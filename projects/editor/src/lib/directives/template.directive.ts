import {
  ChangeDetectorRef,
  ComponentRef,
  Directive,
  Injector,
  Input,
  Type,
  ViewContainerRef,
} from '@angular/core';
import { GtNode } from '@ghosten/common';

@Directive({
  selector: '[gtTemplate]',
})
export class TemplateDirective<T = Type<any>> {
  @Input() templateID: string;

  constructor(
    public viewContainerRef: ViewContainerRef,
    private cdr: ChangeDetectorRef,
    private injector: Injector,
  ) {}

  insert<K = T>(gtNode: GtNode, index?: number): ComponentRef<K> {
    if (!gtNode.component) {
      // return (this.gt as any).log.emit(`type为${gtNode.type}的组件不存在！`);
    }
    const injector: Injector = Injector.create({
      providers: [{ provide: GtNode, useValue: gtNode }],
      parent: this.injector,
    });
    const componentRef = this.viewContainerRef.createComponent<K>(
      gtNode.component,
      { index, injector },
    );
    gtNode.componentRef = componentRef;
    this.cdr.detectChanges();
    // this.cdr.markForCheck();
    return componentRef;
  }

  remove(index?: number) {
    this.viewContainerRef.remove(index);
    // this.cdr.detectChanges();
  }

  move(gtNode: GtNode, index: number) {
    const viewRef = this.viewContainerRef.move(
      gtNode.componentRef!.hostView,
      index,
    );
    this.cdr.detectChanges();
    // this.cdr.markForCheck();
    return viewRef;
  }

  clear() {
    this.viewContainerRef.clear();
    // this.cdr.markForCheck();
    this.cdr.detectChanges();
  }
}
