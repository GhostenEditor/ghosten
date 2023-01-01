import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnDestroy,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { GtNode } from '@ghosten/common';

import { Subscription, combineLatest, merge, of } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { EditorSettingService, EventsService } from '../../services';
import { AccordionItemComponent } from '../../modules/accordion';
import { PROPERTY_EDIT_EVENT } from '../../injectors';

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
        [expanded]="editorSetting.configAccordionExpanded.variable"
        (opened)="opened('variable')"
        (closed)="closed('variable')"
      >
        <gt-panel-variable
          [gtNode]="gtNode"
          (openDialog)="onOpenDialog($event)"
        ></gt-panel-variable>
      </gt-accordion-item>
      <gt-accordion-item
        *ngIf="gtNode.property"
        i18n-cardTitle="Config Card Title: Property"
        cardTitle="属性"
        [expanded]="editorSetting.configAccordionExpanded.property"
        (opened)="opened('property')"
        (closed)="closed('property')"
      >
        <gt-panel-config
          [type]="'property'"
          [gtNode]="gtNode"
          (openDialog)="onOpenDialog($event)"
        ></gt-panel-config>
      </gt-accordion-item>
      <gt-accordion-item
        *ngIf="gtNode.style"
        i18n-cardTitle="Config Card Title: Style"
        cardTitle="样式"
        [expanded]="editorSetting.configAccordionExpanded.style"
        (opened)="opened('style')"
        (closed)="closed('style')"
      >
        <gt-panel-config
          [type]="'style'"
          [gtNode]="gtNode"
          (openDialog)="onOpenDialog($event)"
        ></gt-panel-config>
      </gt-accordion-item>
      <gt-accordion-item
        *ngIf="gtNode.rights"
        i18n-cardTitle="Config Card Title: Authorization"
        cardTitle="权限"
        [expanded]="editorSetting.configAccordionExpanded.rights"
        (opened)="opened('rights')"
        (closed)="closed('rights')"
      >
        <gt-panel-config
          [type]="'rights'"
          [gtNode]="gtNode"
          (openDialog)="onOpenDialog($event)"
        ></gt-panel-config>
      </gt-accordion-item>
      <!--      <gt-accordion-item
              *ngIf="gtNode.dataSource"
              i18n-cardTitle="Config Card Title: Data Source"
              cardTitle="数据源"
              [expanded]="editorSetting.configAccordionExpanded.dataSource"
              (opened)="opened('dataSource')"
              (closed)="closed('dataSource')"
            >
              &lt;!&ndash;       <gt-panel-table
                       [columns]="panel.columns"
                       [data]="panel.rows()"
                       (tableAdd)="panel.tableAdd()"
                       (tableEdit)="panel.tableEdit($event)"
                       (tableRemove)="panel.tableRemove($event)"
                     ></gt-panel-table>&ndash;&gt;
            </gt-accordion-item>-->
      <gt-accordion-item
        *ngIf="gtNode.directive"
        i18n-cardTitle="Config Card Title: Directive"
        cardTitle="指令"
        [expanded]="editorSetting.configAccordionExpanded.directive"
        (opened)="opened('directive')"
        (closed)="closed('directive')"
      >
        <gt-panel-directive
          [gtNode]="gtNode"
          (openDialog)="onOpenDialog($event)"
        ></gt-panel-directive>
      </gt-accordion-item>
      <gt-accordion-item
        *ngIf="gtNode.validator"
        i18n-cardTitle="Config Card Title: Validator"
        cardTitle="校验"
        [expanded]="editorSetting.configAccordionExpanded.validator"
        (opened)="opened('validator')"
        (closed)="closed('validator')"
      >
        <gt-panel-validator [gtNode]="gtNode"></gt-panel-validator>
      </gt-accordion-item>
      <gt-accordion-item
        *ngIf="gtNode.validator"
        i18n-cardTitle="Config Card Title: Action"
        cardTitle="事件"
        [expanded]="editorSetting.configAccordionExpanded.action"
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

  constructor(
    @Inject(PROPERTY_EDIT_EVENT) public editEvent: any,
    cdr: ChangeDetectorRef,
    events: EventsService,
    public editorSetting: EditorSettingService,
  ) {
    this.subscription = combineLatest([
      events.CHANGE_SELECT,
      merge(of(null), events.REDO, events.UNDO, events.PASTE_STYLE),
    ])
      .pipe(debounceTime(10))
      .subscribe(([selected]) => {
        if (selected.length === 1) {
          // todo 待修复无法触发set方法的bug
          this.gtNode = selected[0];
          // this.gtNode = { ...selected[0] } as any;
          // setTimeout(() => {
          //   this.accordionList.get(0)!.accordion.open();
          // }, 100);
        } else {
          this.gtNode = null;
        }
        cdr.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onOpenDialog(event: any) {
    this.editEvent.forEach((func: any) => func(event));
  }

  opened(type: string) {
    this.editorSetting.changeConfigAccordionExpanded(type, true);
  }

  closed(type: string) {
    this.editorSetting.changeConfigAccordionExpanded(type, false);
  }
}
