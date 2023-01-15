import { CdkDrag, CdkDragEnd } from '@angular/cdk/drag-drop';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { Overlay } from '@angular/cdk/overlay';
import { coerceCssPixelValue } from '@angular/cdk/coercion';

import { fromEvent, tap } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

import { GT_AUTH_CONFIG } from '../../injectors';
import { GtAuth } from '../../types';
import { GtEdit } from '../../classes';

import { FloatBarComponent } from './float-bar.component';
import { SidebarConfigComponent } from './sidebar-config.component';
import { SidebarElementComponent } from './sidebar-element.component';
import { SidebarPageComponent } from './sidebar-page.component';
import { SidebarTreeComponent } from './sidebar-tree.component';

interface Tab {
  id: number;
  icon: string;
  component: any;
  hide?: boolean;
}

@Component({
  selector: 'gt-sidebar',
  host: {
    class: 'gt-sidebar flex-shrink-0',
  },
  template: `
    <div class="card border-0 h-100">
      <div class="card-header bg-body">
        <nav class="nav nav-pills nav-justified card-header-pills">
          <ng-container *ngFor="let tab of tabs">
            <button
              class="nav-link"
              type="button"
              draggable="true"
              *ngIf="!tab.hide"
              [attr.data-id]="tab.id"
              [class.active]="gt.settings.rightTabIndex === tab.id"
              [style.cursor]="gt.settings.rightTabIndex === tab.id ? 'default' : 'pointer'"
              (click)="gt.settings.activateRightTab(tab.id)"
              (dragstart)="dragStart(tab, $event)"
            >
              <i class="gt-icon">{{ tab.icon }}</i>
            </button>
          </ng-container>
        </nav>
      </div>
      <div class="card-body p-0" style="overflow-y: scroll">
        <gt-accordion-element
          class="tab-panel"
          *ngIf="!tabs[0].hide"
          [style.display]="gt.settings.rightTabIndex === 0 ? '' : 'none'"
        ></gt-accordion-element>
        <gt-accordion-config
          class="tab-panel"
          *ngIf="!tabs[1].hide"
          [style.display]="gt.settings.rightTabIndex === 1 ? '' : 'none'"
        ></gt-accordion-config>
        <gt-accordion-elTree
          class="tab-panel"
          *ngIf="!tabs[2].hide"
          [style.display]="gt.settings.rightTabIndex === 2 ? '' : 'none'"
        ></gt-accordion-elTree>
        <gt-accordion-page
          class="tab-panel"
          *ngIf="gtAuth.modal && !tabs[3].hide"
          [style.display]="gt.settings.rightTabIndex === 3 ? '' : 'none'"
        ></gt-accordion-page>
      </div>
    </div>
    <!--    <div class="position-fixed w-100 h-100 start-0 top-0" drop></div>-->
  `,
})
export class SidebarComponent {
  @ViewChild('tabsEle', { static: true }) tabsEle: ElementRef;
  tabs: Tab[] = [
    {
      id: 0,
      icon: 'add',
      component: SidebarElementComponent,
    },
    {
      id: 1,
      icon: 'edit',
      component: SidebarConfigComponent,
    },
    {
      id: 2,
      icon: 'file',
      component: SidebarTreeComponent,
    },
    {
      id: 3,
      icon: 'pages',
      hide: !this.gtAuth.modal,
      component: SidebarPageComponent,
    },
  ];

  constructor(
    public gt: GtEdit,
    private _overlay: Overlay,
    @Inject(GT_AUTH_CONFIG) public gtAuth: GtAuth,
    @Inject(DOCUMENT) private _document: Document,
  ) {}

  dragEnd(event: CdkDragEnd, cdkDrag: CdkDrag, tab: Tab) {
    this.createWindow(tab, event.dropPoint.x, event.dropPoint.y);
    cdkDrag.reset();
  }

  createWindow(tab: Tab, x: number, y: number) {
    tab.hide = true;

    for (const tab of this.tabs) {
      if (!tab.hide) {
        this.gt.settings.activateRightTab(tab.id);
        break;
      }
    }
    const overlayRef = this._overlay.create({
      disposeOnNavigation: true,
      positionStrategy: this._overlay.position().global().top(coerceCssPixelValue(y)).left(coerceCssPixelValue(x)),
    });
    const componentRef = overlayRef.attach(new ComponentPortal(FloatBarComponent));
    componentRef.instance.componentPortal = new ComponentPortal(tab.component);
    componentRef.instance.icon = tab.icon;
    componentRef.instance.windowClose.pipe(take(1)).subscribe(() => {
      tab.hide = false;
      overlayRef.dispose();
    });
  }

  dragStart(tab: Tab, event: DragEvent) {
    // event.preventDefault();
    event.dataTransfer!.dropEffect = 'move';
    // event.dataTransfer!.setData('id', tab.id);
    fromEvent(this._document, 'dragover')
      .pipe(
        takeUntil(
          fromEvent<DragEvent>(this._document, 'drop').pipe(
            tap(event => {
              event.preventDefault();
              this.createWindow(tab, event.clientX, event.clientY);
            }),
          ),
        ),
        tap(event => event.preventDefault()),
      )
      .subscribe();
  }
}
