import {
  ChangeDetectorRef,
  Component,
  ComponentRef,
  Directive,
  Inject,
  Injector,
  Input,
  IterableChanges,
  IterableDiffers,
  OnDestroy,
  OnInit,
  Optional,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { DataBinding, GtNode, IGtNode } from '@ghosten/common';

import { EMPTY, Observable, Subscription, interval, isObservable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { GT_RENDER_COMPONENT_MAP, GT_RENDER_DIRECTIVE_MAP } from '../injectors';
import { DirectiveContext } from '../components/directive.context';
import { GlobalVariableService } from '../components/global-variable.service';
import { GtRender } from '../classes/gt.class';

@Directive({
  selector: '[gtTemplate]',
})
export class TemplateDirective implements OnInit {
  @Input() templateID: string;
  @Input() directiveContext: DirectiveContext;
  private componentMap: Record<any, Type<any>>;

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

  insert<K = any>(gtNode: GtNode<any, Type<K>, ComponentRef<K>>, injector?: Injector, index?: number): ComponentRef<K> {
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

  indexOf(gtNode: GtNode<any, any, ComponentRef<any>>): number {
    if (gtNode.componentRef) {
      return this.viewContainerRef.indexOf(gtNode.componentRef.hostView);
    } else {
      return -1;
    }
  }

  remove(gtNode: GtNode<any, any, ComponentRef<any>>) {
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

interface DirectiveItem {
  gtNode: GtNode;
  item: any;
  index: number;
}

@Component({
  selector: 'template-component',
  template: '<ng-template gtTemplate></ng-template>',
})
export class TemplateComponent<T> implements OnInit, OnDestroy {
  @ViewChild(TemplateDirective, { static: true }) template: TemplateDirective;

  private diff = this.iterableDiffers.find([]).create<DirectiveItem>((index, { gtNode }) => gtNode.id);
  private subscription = Subscription.EMPTY;

  constructor(
    private iterableDiffers: IterableDiffers,
    private gt: GtRender,
    private gtNode: GtNode<T>,
    private injector: Injector,
    @Optional() private formGroup: FormGroup,
    @Optional() private directiveContext: DirectiveContext,
    private globalVariable: GlobalVariableService,
  ) {}

  ngOnInit() {
    this.subscription = getSourceByDirective(this.gtNode.directive[0], this.gtNode, {
      ...Object.fromEntries(this.gt.componentVariables),
      ...this.globalVariable,
    }).subscribe(children => {
      const change = this.diff.diff(children);
      this.resolveDiffChange(change);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  resolveDiffChange(change: IterableChanges<DirectiveItem> | null) {
    if (change) {
      change.forEachOperation(({ item: { gtNode, item }, previousIndex }, adjustedPreviousIndex, currentIndex) => {
        if (previousIndex === null) {
          const injector = Injector.create({
            providers: [
              { provide: GtNode, useValue: gtNode },
              { provide: FormGroup, useValue: this.formGroup },
              {
                provide: DirectiveContext,
                useValue: Object.assign(Object.create(this.directiveContext), { index: currentIndex, item }),
              },
            ],
            parent: this.injector,
          });
          this.template.insert(gtNode, injector, currentIndex!);
        } else if (currentIndex === null) {
          this.template.remove(gtNode);
        } else if (adjustedPreviousIndex !== null) {
          this.template.move(gtNode, currentIndex);
        }
      });
    }
  }
}

function getSourceByDirective(
  directive: IGtNode.Directive,
  gtNode: GtNode,
  globalVariables: any,
): Observable<DirectiveItem[]> {
  const filteredDirective = gtNode.directive.filter(d => d !== directive);
  switch (directive.type) {
    case 'if':
      if (directive.value.input) {
        const inputValue = directive.value.input.default;
        const cloneNode = new GtNode(
          {
            type: gtNode.type,
            directive: filteredDirective,
          },
          gtNode,
          gtNode.boardId,
        );
        const source = inputValue instanceof DataBinding ? inputValue.compile({}, globalVariables) : !!inputValue;
        return (isObservable(source) ? source : of(source)).pipe(
          map(flag => (flag ? [{ gtNode: cloneNode, item: {}, index: 0 }] : [])),
        );
      } else {
        return of([]);
      }
    case 'for':
      if (directive.value.input) {
        const inputValue = directive.value.input.default;
        const source = inputValue instanceof DataBinding ? inputValue.compile({}, { interval, map }) : of(!!inputValue);
        return source.pipe(
          map(items =>
            Array.isArray(items)
              ? items.map((item, index) => ({
                  gtNode: new GtNode(
                    {
                      // id: gtNode.id + '-' + index,
                      type: gtNode.type,
                      directive: filteredDirective,
                    },
                    gtNode,
                    gtNode.boardId,
                  ),
                  item,
                  index,
                }))
              : [],
          ),
        );
      } else {
        return of([]);
      }
    default:
      return EMPTY;
  }
}
