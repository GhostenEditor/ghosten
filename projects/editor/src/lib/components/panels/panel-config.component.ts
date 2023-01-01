import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Inject,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

import { GtNode } from '@ghosten/common';

import { FormEvent, FormItem } from '../properties-form/types';
import { EventsService } from '../../services';
import { GT_NODE_INTERNAL_CONFIG_LIST_MAP } from '../../injectors-internal';
import { OpenDialogEvent } from './types';
import { PropertiesFormComponent } from '../properties-form/properties-form.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'gt-panel-config',
  template: ` <properties-form
    [formList]="formList"
    (formChange)="onchange($event)"
    (formClick)="onclick($event)"
    (dataBindClick)="dataBind($event)"
    (inheritClick)="inheritClick($event)"
  ></properties-form>`,
})
export class PanelConfigComponent {
  @ViewChild(PropertiesFormComponent, { static: true })
  formComp: PropertiesFormComponent;
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

  @Output() openDialog = new EventEmitter<OpenDialogEvent>();

  constructor(
    private events: EventsService,
    private cdr: ChangeDetectorRef,
    @Inject(GT_NODE_INTERNAL_CONFIG_LIST_MAP)
    private configList: Map<string, Map<string, FormItem[]>>,
  ) {}

  getFormList(): FormItem[] {
    return this.configList
      .get(this.gtNode.type)!
      .get(this.type)!
      .map(formItem => ({
        ...formItem,
        value: this.gtNode[this.type][formItem.name],
        inherit: this.gtNode.template
          ? !Object.prototype.hasOwnProperty.call(
              this.gtNode[this.type],
              formItem.name,
            )
          : undefined,
        // validator: formItem && formItem.validator && formItem.validator(this.gt)
      }));
  }

  onclick({ formItem, formControl }: FormEvent) {
    this.openDialog.emit({
      type: this.type,
      gtNode: this.gtNode,
      args: [formItem.name, formControl.value],
      cb: (value: any) =>
        this.onchange({ formItem: { ...formItem, value }, formControl }),
    });
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
    this.openDialog.emit({
      type: this.type,
      gtNode: this.gtNode,
      args: ['bindData', formItem.name, formControl.value],
      cb: value =>
        this.onchange({ formItem: { ...formItem, value }, formControl }),
    });
  }
}
