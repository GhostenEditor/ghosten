import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  Input,
  OnDestroy,
  ViewChild,
} from '@angular/core';

import { DataBinding, GtNode } from '@ghosten/common';

import { Subscription, fromEvent } from 'rxjs';
import { take } from 'rxjs/operators';

import { EditExpressionEndEvent, EditExpressionStartEvent } from '../../classes';
import { FormEvent, FormItem } from '../../types';
import { ConfigFormComponent } from '../../modules';
import { EventsService } from '../../services';
import { GT_NODE_INTERNAL_CONFIG_LIST_MAP } from '../../injectors-internal';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'gt-panel-config',
  template: ` <config-form
    [formList]="formList"
    (formChange)="onchange($event)"
    (dataBindClick)="dataBind($event)"
    (inheritClick)="inheritClick($event)"
  ></config-form>`,
})
export class PanelConfigComponent implements OnDestroy {
  @ViewChild(ConfigFormComponent, { static: true })
  formComp: ConfigFormComponent;
  public _gtNode: GtNode;
  public formList: FormItem[];

  @Input() type: 'style' | 'property' | 'rights';

  @Input()
  set gtNode(v) {
    this._gtNode = v;
    this.formList = this.getFormList();
  }

  get gtNode(): GtNode {
    return this._gtNode;
  }

  private subscription = Subscription.EMPTY;

  constructor(
    private events: EventsService,
    private cdr: ChangeDetectorRef,
    @Inject(GT_NODE_INTERNAL_CONFIG_LIST_MAP)
    private configList: Map<string, Map<string, FormItem[]>>,
  ) {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getFormList(): FormItem[] {
    return this.configList
      .get(this.gtNode.type)!
      .get(this.type)!
      .map(formItem => ({
        ...formItem,
        value: this.gtNode[this.type][formItem.name],
        inherit: this.gtNode.template
          ? !Object.prototype.hasOwnProperty.call(this.gtNode[this.type], formItem.name)
          : undefined,
        // validator: formItem && formItem.validator && formItem.validator(this.gt)
      }));
  }

  inheritClick({ formItem, formControl }: FormEvent) {
    if (formItem.inherit === false) {
      const previousValue = this.gtNode[this.type][formItem.name];
      Reflect.deleteProperty(this.gtNode[this.type], formItem.name);
      formControl.reset(this.gtNode[this.type][formItem.name], {
        emitEvent: false,
      });
      // @ts-ignore
      this.events['CHANGE_' + this.type.toUpperCase()].next({
        name: formItem.name,
        value: undefined,
        previousValue,
        gtNode: this.gtNode,
      });
      formItem.inherit = true;
      this.cdr.markForCheck();
      // this.formList = this.getFormList();
    }
  }

  onchange({ formItem, formControl }: FormEvent) {
    const { name, value } = formItem;
    const previousValue = this.gtNode[this.type][name];
    this.gtNode[this.type][name] = value;
    // @ts-ignore
    this.events['CHANGE_' + this.type.toUpperCase()].next({
      name,
      value,
      previousValue,
      gtNode: this.gtNode,
    });
    if (this.gtNode.template) {
      formItem.inherit = false;
    }
    if (formItem.inherit !== undefined) {
      formItem.inherit = !this.gtNode[this.type].hasOwnProperty(name);
    }

    formControl.setValue(formItem.value, { emitEvent: false, onlySelf: true });
    // this.formList = this.getFormList();
    this.cdr.markForCheck();
  }

  dataBind({ formItem, formControl }: FormEvent) {
    this.events.target.dispatchEvent(
      new EditExpressionStartEvent(
        formControl.value instanceof DataBinding ? formControl.value.data : formControl.value,
      ),
    );
    this.subscription.unsubscribe();
    this.subscription = fromEvent<EditExpressionEndEvent>(this.events.target, 'editexpressionend')
      .pipe(take(1))
      .subscribe(event => {
        this.onchange({
          formItem: { ...formItem, value: new DataBinding(event.expression) },
          formControl,
        });
      });
  }
}
