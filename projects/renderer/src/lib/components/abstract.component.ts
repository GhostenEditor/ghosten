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
export class RenderAbstractComponent<T = any> implements OnInit, AfterViewInit, OnDestroy {
  private dataBindingValueMap = new Map<DataBinding, { source: Observable<any>; latestValue: any }>();
  public subscriptions: Subscription[] = [];
  @ViewChild(TemplateDirective, { static: true }) template: TemplateDirective;
  @ViewChildren(TemplateDirective) templates: QueryList<TemplateDirective>;
  control: FormControl;

  @HostBinding('attr.class') get ngClass() {
    return this.gtNode.classList.join(' ');
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
    if (this.gtNode.variableName) {
      const variable: any = {};
      for (const property in this) {
        const that = this;
        if (typeof that[property] === 'function') {
          variable[property] = that[property];
        } else {
          Object.defineProperty(variable, property, {
            configurable: true,
            get(): any {
              return that[property];
            },
            set(v: any) {
              that[property] = v;
            },
          });
        }
      }
      for (const property in this.property) {
        const that = this.property;
        if (typeof that[property] === 'function') {
          variable[property] = that[property];
        } else {
          Object.defineProperty(variable, property, {
            configurable: false,
            get(): any {
              return that[property];
            },
            set(v: any) {
              that[property] = v;
            },
          });
        }
      }
      this.gtNode.variable.forEach(_variable => {
        if (_variable.value instanceof DataBinding) {
          _variable.value = _variable.value.compile({}, this.globalVariable);
        }
        Object.defineProperty(variable, _variable.name, {
          configurable: true,
          get(): any {
            return _variable.value;
          },
          set(v: any) {
            v.value = v;
          },
        });
      });
      for (const property in this.directiveContext) {
        const that = this.directiveContext;
        if (typeof that[property] === 'function') {
          variable[property] = that[property];
        } else {
          Object.defineProperty(variable, property, {
            configurable: false,
            get(): any {
              return that[property];
            },
          });
        }
      }
      this.gt.componentVariables.set(this.gtNode.variableName!, variable);
    }
  }

  ngAfterViewInit() {
    this.onEvent('onInit');
  }

  ngOnDestroy() {
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
          if (template) template.insert(gtNode);
        });
      } else {
        this.gtNode.children.forEach(gtNode => {
          this.template.insert(gtNode);
        });
      }
    }
  }

  insert(gtNode: GtNode, index?: number): ComponentRef<any> | null {
    if (!gtNode.property.show) {
      return null;
    }
    let componentRef: ComponentRef<any>;
    if (this.gtNode.core.dynamicTemplate) {
      const template = this.templates.find(te => te.templateID === gtNode.outletID);
      if (template) {
        componentRef = template.insert(gtNode, undefined, index);
      } else {
        throw new Error();
      }
    } else {
      componentRef = this.template.insert(gtNode, undefined, index);
    }
    return componentRef;
  }

  move(gtNode: GtNode, index: number) {
    return this.template.move(gtNode, index);
  }

  remove(gtNode: GtNode) {
    this.template.remove(gtNode);
  }

  showModal(modalId: string) {
    this.gt.showModal.emit(modalId);
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
          const result = Function('window', 'document', 'event', ...Object.keys(globalVariables), action.script).call(
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
        } catch (error) {
          this.gt.log.next({
            type: 'error',
            message: 'Script execute failed',
            data: {
              error,
              script: action.script,
              gtNode: this.gtNode,
            },
          });
          return of(null);
        }
      }),
    ).subscribe();
  }

  resolveDataBinding(data: DataBinding | any): any {
    if (data instanceof DataBinding) {
      const result = data.compile(
        {},
        {
          getComponentByName: (name: string) => this.gt.componentVariables.get(name)!.componentRef.instance,
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
