import {
  ChangeDetectorRef,
  ComponentRef,
  Directive,
  Inject,
  Injector,
  Input,
  OnInit,
  Optional,
  Type,
  ViewContainerRef,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { GtNode } from '@ghosten/common';

import { GT_RENDER_COMPONENT_MAP, GT_RENDER_DIRECTIVE_MAP } from '../injectors';
import { DirectiveContext } from '../components/directive.context';

@Directive({
  selector: '[gtTemplate]',
})
export class TemplateDirective implements OnInit {
  @Input() templateID: string;
  @Input() directiveContext: DirectiveContext;
  private readonly componentMap: Record<any, Type<any>>;

  constructor(
    public viewContainerRef: ViewContainerRef,
    private cdr: ChangeDetectorRef,
    private injector: Injector,
    @Optional() private gtNode: GtNode,
    @Optional() public formGroup: FormGroup,
    @Optional() private _directiveContext: DirectiveContext = {},
    @Inject(GT_RENDER_COMPONENT_MAP) componentMap: any[],
    @Inject(GT_RENDER_DIRECTIVE_MAP) private directiveMap: Record<string, Type<any>>,
  ) {
    this.componentMap = Object.assign({}, ...componentMap);
  }

  ngOnInit() {
    if (this.gtNode) {
      if (this.gtNode.dynamicChildren) {
        const dynamicChildren = this.gtNode.dynamicChildren();
        dynamicChildren.forEach(childNode => {
          if (this.templateID) {
            if (childNode.outletID === this.templateID) {
              this.insert(childNode);
            }
          } else {
            this.insert(childNode);
          }
        });
      } else {
        this.gtNode.children.forEach(childNode => {
          if (this.templateID) {
            if (childNode.outletID === this.templateID) {
              this.insert(childNode);
            }
          } else {
            this.insert(childNode);
          }
        });
      }
    }
  }

  insert<K = any>(gtNode: GtNode<any, ComponentRef<K>>, injector?: Injector, index?: number): ComponentRef<K> {
    const needTemplate = gtNode.directive.length;
    if (!injector) {
      injector = this.getGtNodeInjector(gtNode);
    }
    if (needTemplate) {
      const directive = gtNode.directive[0];
      const newGtNode = new GtNode({ type: 'directive' }, gtNode, gtNode.boardId);
      gtNode.directive = gtNode.directive.slice(1);
      const componentRef = this.viewContainerRef.createComponent<K>(this.directiveMap[directive.type], {
        index,
        injector: Injector.create({
          providers: [
            {
              provide: 'gtDirective',
              useValue: directive,
            },
            {
              provide: 'originalGtNode',
              useValue: gtNode,
            },
            {
              provide: GtNode,
              useValue: newGtNode,
            },
          ],
          parent: injector,
        }),
      });
      newGtNode.componentRef = componentRef as ComponentRef<K>;
      // this.cdr.detectChanges();
      return componentRef;
    } else {
      const componentRef = this.viewContainerRef.createComponent<K>(this.componentMap[gtNode.type], {
        index,
        injector,
      });
      gtNode.componentRef = componentRef as ComponentRef<K>;
      // this.cdr.detectChanges();
      return componentRef;
    }
  }

  indexOf(gtNode: GtNode<any, ComponentRef<any>>): number {
    if (gtNode.componentRef) {
      return this.viewContainerRef.indexOf(gtNode.componentRef.hostView);
    } else {
      return -1;
    }
  }

  remove(gtNode: GtNode<any, ComponentRef<any>>) {
    if (gtNode.componentRef) {
      const index = this.viewContainerRef.indexOf(gtNode.componentRef.hostView);
      if (index !== -1) {
        this.viewContainerRef.remove(index);
        this.cdr.detectChanges();
      }
      gtNode.componentRef = null;
    } else {
      console.error('remove failed');
    }
  }

  move(gtNode: GtNode, index: number) {
    const viewRef = this.viewContainerRef.move(gtNode.componentRef!.hostView, index);
    this.cdr.detectChanges();
    return viewRef;
  }

  clear() {
    this.viewContainerRef.clear();
    this.cdr.detectChanges();
  }

  getGtNodeInjector(gtNode: GtNode) {
    return Injector.create({
      providers: [
        { provide: GtNode, useValue: gtNode },
        { provide: FormGroup, useValue: this.formGroup },
        { provide: DirectiveContext, useValue: this.directiveContext || this._directiveContext },
      ],
      parent: this.injector,
    });
  }
}
