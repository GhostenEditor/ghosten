import {
  ChangeDetectorRef,
  Component,
  ComponentRef,
  Directive,
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

import { EMPTY, Observable, Subscription, interval, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { DirectiveContext } from '../components/directive.context';

@Directive({
  selector: '[gtTemplate]',
})
export class TemplateDirective {
  @Input() templateID: string;

  constructor(
    public viewContainerRef: ViewContainerRef,
    private cdr: ChangeDetectorRef,
    private injector: Injector,
  ) {}

  insert<K = any>(
    gtNode: GtNode<any, Type<K>, ComponentRef<K>>,
    injector?: Injector,
    index?: number,
  ): ComponentRef<K | TemplateComponent<any>> {
    const needTemplate = gtNode.directive.find(
      ({ needTemplate }) => needTemplate,
    );
    if (!injector) {
      injector = Injector.create({
        providers: [{ provide: GtNode, useValue: gtNode }],
        parent: this.injector,
      });
    }
    const componentRef = this.viewContainerRef.createComponent<
      K | TemplateComponent<any>
    >(needTemplate ? TemplateComponent : gtNode.component, {
      index,
      injector,
    });
    gtNode.componentRef = componentRef as ComponentRef<K>;
    return componentRef;
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
    const viewRef = this.viewContainerRef.move(
      gtNode.componentRef!.hostView,
      index,
    );
    this.cdr.detectChanges();
    return viewRef;
  }

  clear() {
    this.viewContainerRef.clear();
    this.cdr.detectChanges();
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

  private diff = this.iterableDiffers
    .find([])
    .create<DirectiveItem>((index, { gtNode }) => gtNode.id);
  private subscription = Subscription.EMPTY;

  constructor(
    private iterableDiffers: IterableDiffers,
    private gtNode: GtNode<T>,
    private injector: Injector,
    @Optional() private formGroup: FormGroup,
    @Optional() private directiveContext: DirectiveContext,
  ) {}

  ngOnInit() {
    this.subscription = getSourceByDirective(
      this.gtNode.directive[0],
      this.gtNode,
    ).subscribe(children => {
      const change = this.diff.diff(children);
      this.resolveDiffChange(change);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  resolveDiffChange(change: IterableChanges<DirectiveItem> | null) {
    if (change) {
      change.forEachOperation(
        (
          { item: { gtNode, item }, previousIndex },
          adjustedPreviousIndex,
          currentIndex,
        ) => {
          if (previousIndex === null) {
            const injector = Injector.create({
              providers: [
                { provide: GtNode, useValue: gtNode },
                { provide: FormGroup, useValue: this.formGroup },
                {
                  provide: DirectiveContext,
                  useValue: Object.assign(
                    Object.create(this.directiveContext),
                    { index: currentIndex, item },
                  ),
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
        },
      );
    }
  }
}

function getSourceByDirective(
  directive: IGtNode.Directive,
  gtNode: GtNode,
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
          gtNode.component,
        );
        const source =
          inputValue instanceof DataBinding
            ? inputValue.compile({}, { interval, map })
            : of(!!inputValue);
        return source.pipe(
          map(flag =>
            flag ? [{ gtNode: cloneNode, item: {}, index: 0 }] : [],
          ),
        );
      } else {
        return of([]);
      }
    case 'for':
      if (directive.value.input) {
        const inputValue = directive.value.input.default;
        const source =
          inputValue instanceof DataBinding
            ? inputValue.compile({}, { interval, map })
            : of(!!inputValue);
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
                    gtNode.component,
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
