import {
  ChangeDetectorRef,
  ComponentRef,
  Directive,
  Inject,
  Injector,
  Input,
  NgModule,
  Type,
  ViewContainerRef,
} from '@angular/core';
import { GtNode } from '@ghosten/common';

import { GT_EDIT_COMPONENT_MAP } from '../../injectors';

@Directive({
  selector: '[gtTemplate]',
})
export class TemplateDirective<T = Type<any>> {
  @Input() templateID: string;
  private readonly componentMap: Record<any, Type<any>>;

  constructor(
    public viewContainerRef: ViewContainerRef,
    private cdr: ChangeDetectorRef,
    private injector: Injector,
    @Inject(GT_EDIT_COMPONENT_MAP) componentMap: any[],
  ) {
    this.componentMap = Object.assign({}, ...componentMap);
  }

  insert<K = T>(gtNode: GtNode, index?: number): ComponentRef<K> {
    if (!this.componentMap[gtNode.type]) {
      // return (this.gt as any).log.emit(`type为${gtNode.type}的组件不存在！`);
    }
    const injector: Injector = Injector.create({
      providers: [{ provide: GtNode, useValue: gtNode }],
      parent: this.injector,
    });
    const componentRef = this.viewContainerRef.createComponent<K>(this.componentMap[gtNode.type], { index, injector });
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
    const viewRef = this.viewContainerRef.move(gtNode.componentRef!.hostView, index);
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

@NgModule({
  exports: [TemplateDirective],
  declarations: [TemplateDirective],
})
export class TemplateModule {}
