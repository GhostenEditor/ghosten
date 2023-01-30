import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { GtNode } from '@ghosten/common';

import { Subscription, combineLatest, merge, of } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { AccordionItemComponent } from '../../modules';
import { EventsService } from '../../services';
import { GtEdit } from '../../classes';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'gt-accordion-config',
  template: `
    <div
      *ngIf="!gtNode"
      class="bg-secondary-subtle p-2 text-center border-bottom"
      i18n="Description: Please Select a Component"
    >
      请选中一个组件！
    </div>
    <gt-accordion *ngIf="gtNode" [multi]="true">
      <gt-accordion-item
        *ngIf="gtNode.variable"
        i18n-cardTitle="Config Card Title: Variable"
        cardTitle="变量"
        [expanded]="gt.settings.configAccordionExpanded.variable"
        (opened)="opened('variable')"
        (closed)="closed('variable')"
      >
        <gt-panel-variable [gtNode]="gtNode"></gt-panel-variable>
      </gt-accordion-item>
      <gt-accordion-item
        *ngIf="gtNode.property"
        i18n-cardTitle="Config Card Title: Property"
        cardTitle="属性"
        [expanded]="gt.settings.configAccordionExpanded.property"
        (opened)="opened('property')"
        (closed)="closed('property')"
      >
        <gt-panel-config [type]="'property'" [gtNode]="gtNode"></gt-panel-config>
      </gt-accordion-item>
      <gt-accordion-item
        *ngIf="gtNode.style"
        i18n-cardTitle="Config Card Title: Style"
        cardTitle="样式"
        [expanded]="gt.settings.configAccordionExpanded.style"
        (opened)="opened('style')"
        (closed)="closed('style')"
      >
        <gt-panel-config [type]="'style'" [gtNode]="gtNode"></gt-panel-config>
      </gt-accordion-item>
      <gt-accordion-item
        *ngIf="gtNode.style"
        i18n-cardTitle="Config Card Title: Class"
        cardTitle="Class"
        [expanded]="gt.settings.configAccordionExpanded.class"
        (opened)="opened('class')"
        (closed)="closed('class')"
      >
        <gt-panel-class [gtNode]="gtNode"></gt-panel-class>
      </gt-accordion-item>
      <gt-accordion-item
        *ngIf="gtNode.rights"
        i18n-cardTitle="Config Card Title: Authorization"
        cardTitle="权限"
        [expanded]="gt.settings.configAccordionExpanded.rights"
        (opened)="opened('rights')"
        (closed)="closed('rights')"
      >
        <gt-panel-config [type]="'rights'" [gtNode]="gtNode"></gt-panel-config>
      </gt-accordion-item>
      <gt-accordion-item
        *ngIf="gtNode.directive"
        i18n-cardTitle="Config Card Title: Directive"
        cardTitle="指令"
        [expanded]="gt.settings.configAccordionExpanded.directive"
        (opened)="opened('directive')"
        (closed)="closed('directive')"
      >
        <gt-panel-directive [gtNode]="gtNode"></gt-panel-directive>
      </gt-accordion-item>
      <gt-accordion-item
        *ngIf="gtNode.validator"
        i18n-cardTitle="Config Card Title: Validator"
        cardTitle="校验"
        [expanded]="gt.settings.configAccordionExpanded.validator"
        (opened)="opened('validator')"
        (closed)="closed('validator')"
      >
        <gt-panel-validator [gtNode]="gtNode"></gt-panel-validator>
      </gt-accordion-item>
      <gt-accordion-item
        *ngIf="gtNode.validator"
        i18n-cardTitle="Config Card Title: Action"
        cardTitle="事件"
        [expanded]="gt.settings.configAccordionExpanded.action"
        (opened)="opened('action')"
        (closed)="closed('action')"
      >
        <gt-panel-action [gtNode]="gtNode"></gt-panel-action>
      </gt-accordion-item>
    </gt-accordion>
  `,
})
export class SidebarConfigComponent implements OnDestroy {
  public gtNode: GtNode | null;
  private readonly subscription = Subscription.EMPTY;
  @ViewChildren(AccordionItemComponent)
  accordionList: QueryList<AccordionItemComponent>;

  constructor(public gt: GtEdit, cdr: ChangeDetectorRef, events: EventsService) {
    this.subscription = combineLatest([
      merge(of(gt.selected), events.CHANGE_SELECT),
      merge(of(null), events.REDO, events.UNDO, events.PASTE_STYLE),
    ])
      .pipe(debounceTime(10))
      .subscribe(([selected]) => {
        if (selected.length === 1) {
          // todo 待修复无法触发set方法的bug
          this.gtNode = selected[0];
        } else {
          this.gtNode = null;
        }
        cdr.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  opened(type: string) {
    this.gt.settings.changeConfigAccordionExpanded(type, true);
  }

  closed(type: string) {
    this.gt.settings.changeConfigAccordionExpanded(type, false);
  }
}
