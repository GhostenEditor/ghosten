import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentRef,
  ElementRef,
  HostBinding,
  Injector,
  NgZone,
  OnDestroy,
  OnInit,
  Optional,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Observable, Subscription, concat, from, isObservable, of } from 'rxjs';

import { DataBinding, GtNode } from '@ghosten/common';

import { DirectiveContext } from './directive.context';
import { GlobalVariableService } from './global-variable.service';
import { GtRender } from '../classes/gt.class';
import { TemplateDirective } from '../directives/template.directive';
import { getUsedStyle } from '../utils';

@Component({
  selector: 'gt-abstract',
  template: '',
})
export class RenderAbstractComponent<T = any>
implements OnInit, AfterViewInit, OnDestroy {
  private dataBindingValueMap = new Map<
    DataBinding,
    { source: Observable<any>; latestValue: any }
  >();
  public subscriptions: Subscription[] = [];
  @ViewChild(TemplateDirective, { static: true }) template: TemplateDirective;
  @ViewChildren(TemplateDirective) templates: QueryList<TemplateDirective>;
  control: FormControl;

  @HostBinding('class.clearfix') get clearfix() {
    return this.gtNode.style.clearfix;
  }

  public property: T = this.gtNode.property;
  public style = this.gtNode.style;

  constructor(
    private renderer: Renderer2,
    public elRef: ElementRef,
    public cdr: ChangeDetectorRef,
    public injector: Injector,
    public viewContainerRef: ViewContainerRef,
    public gt: GtRender,
    public gtNode: GtNode<T, RenderAbstractComponent<T>>,
    public ngZone: NgZone,
    private globalVariable: GlobalVariableService,
    @Optional() public http: HttpClient,
    @Optional() public formGroup: FormGroup,
    @Optional() public directiveContext: DirectiveContext,
  ) {
    if (this.gtNode.type === 'form') {
      this.formGroup = new FormGroup({});
    }
    this.afterConstructor();
  }

  afterConstructor() {}

  ngOnInit() {
    this.initStyle();
    if (!this.gtNode.core.dynamicTemplate) {
      if (this.gtNode.core.canHasChild) {
        this.refresh();
      }
      if (this.gtNode.action) {
        this.onEvent('onInit');
      }
    }

    if (this.gtNode.variableName) {
      this.gt.componentVariables.set(this.gtNode.variableName!, {
        ...this,
        ...this.gtNode.property,
        ...this.gtNode.variable.reduce<any>((acc, cur) => {
          if (cur.value instanceof DataBinding) {
            cur.value = cur.value.compile({}, this.globalVariable);
          }
          acc[cur.name] = cur.value;
          return acc;
        }, {}),
        ...this.directiveContext,
      });
    }
  }

  ngAfterViewInit() {
    if (this.gtNode.core.dynamicTemplate) {
      this.refresh();
      this.onEvent('onInit');
    }
  }

  ngOnDestroy() {
    if (
      this.control &&
      this.formGroup &&
      this.formGroup.contains(this.gtNode.property.name)
    ) {
      this.formGroup.removeControl(this.gtNode.property.name);
    }
    if (this.gtNode.action) {
      this.onEvent('onDestroy');
    }
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  initStyle() {
    getUsedStyle(this.gtNode.style).forEach(([prop, value]) =>
      this.renderer.setStyle(this.elRef.nativeElement, prop, value),
    );
  }

  refresh() {
    if (this.gtNode.core.canHasChild) {
      if (this.gtNode.core.dynamicTemplate) {
        const templatesMap = new Map<string, TemplateDirective>();
        this.templates.forEach(template => {
          template.clear();
          templatesMap.set(template.templateID, template);
        });
        this.gtNode.children.forEach(gtNode => {
          const template = templatesMap.get(gtNode.outletID!);
          if (template) template.insert(gtNode, this.getGtNodeInjector(gtNode));
        });
      } else {
        this.gtNode.children.forEach(gtNode => {
          this.template.insert(gtNode, this.getGtNodeInjector(gtNode));
        });
      }
    }
  }

  insert(gtNode: GtNode, index?: number): ComponentRef<any> | null {
    if (!gtNode.component || !gtNode.property.show) {
      return null;
    }
    let componentRef: ComponentRef<any>;
    if (this.gtNode.core.dynamicTemplate) {
      const template = this.templates.find(
        te => te.templateID === gtNode.outletID,
      );
      if (template) {
        componentRef = template.insert(
          gtNode,
          this.getGtNodeInjector(gtNode),
          index,
        );
      } else {
        throw new Error();
      }
    } else {
      componentRef = this.template.insert(
        gtNode,
        this.getGtNodeInjector(gtNode),
        index,
      );
    }
    return componentRef;
  }

  move(gtNode: GtNode, index: number) {
    return this.template.move(gtNode, index);
  }

  remove(gtNode: GtNode) {
    this.template.remove(gtNode);
  }

  onEvent(eventType: string, event?: Event) {
    if (!this.gtNode.action || !Array.isArray(this.gtNode.action[eventType])) {
      return;
    }
    concat(
      ...this.gtNode.action[eventType].map(action => {
        const globalVariables: Record<string, any> = {
          ...this.globalVariable,
          ...Object.fromEntries(this.gt.componentVariables),
        };
        try {
          const result = Function(
            'window',
            'document',
            'event',
            ...Object.keys(globalVariables),
            action.script,
          ).call(
            this,
            undefined,
            undefined,
            event,
            ...Object.values(globalVariables),
          );
          if (isObservable(result) || result instanceof Promise) {
            return from(result);
          } else {
            return of(result);
          }
        } catch (e) {
          console.warn(e, action.script, this.gtNode);
          return of(null);
        }
      }),
    ).subscribe();
  }

  getGtNodeInjector(gtNode: GtNode) {
    return Injector.create({
      providers: [
        { provide: GtNode, useValue: gtNode },
        { provide: FormGroup, useValue: this.formGroup },
        { provide: DirectiveContext, useValue: this.directiveContext },
      ],
      parent: this.injector,
    });
  }

  resolveDataBinding(data: DataBinding | any): any {
    if (data instanceof DataBinding) {
      const result = data.compile(
        {},
        {
          getComponentByName: (name: string) =>
            this.gt.componentVariables.get(name)!.componentRef.instance,
        },
      );
      if (isObservable(result)) {
        const obj = this.dataBindingValueMap.get(data);
        if (obj) {
          return obj.latestValue;
        } else {
          const _obj: any = {
            source: result,
            latestValue: null,
          };
          this.dataBindingValueMap.set(data, _obj);
          this.subscriptions.push(
            result.subscribe(value => {
              _obj.latestValue = value;
              this.cdr.markForCheck();
            }),
          );
        }
      } else {
        return result;
      }
    } else {
      return data;
    }
  }
}
