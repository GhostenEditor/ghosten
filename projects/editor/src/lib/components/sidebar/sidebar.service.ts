import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { coerceCssPixelValue } from '@angular/cdk/coercion';

import { takeUntil, tap } from 'rxjs/operators';

import { FloatBarComponent } from './float-bar.component';
import { GtEdit } from '../../classes';
import { ISidebarPosition } from '../../classes/gt-settings';
import { SidebarConfigComponent } from './sidebar-config.component';
import { SidebarElementComponent } from './sidebar-element.component';
import { SidebarPageComponent } from './sidebar-page.component';
import { SidebarTreeComponent } from './sidebar-tree.component';
import { Tab } from './types';

@Injectable()
export class SidebarService {
  tabs: Tab[] = [
    {
      type: 'element',
      icon: 'add',
      component: SidebarElementComponent,
      position: 'right',
      active: true,
    },
    {
      type: 'config',
      icon: 'edit',
      component: SidebarConfigComponent,
      position: 'right',
    },
    {
      type: 'tree',
      icon: 'file',
      component: SidebarTreeComponent,
      position: 'right',
    },
    {
      type: 'page',
      icon: 'pages',
      component: SidebarPageComponent,
      position: 'right',
    },
  ];

  constructor(private overlay: Overlay, private gt: GtEdit) {}

  initSettings() {
    if (this.gt.settings.sidebarPosition) {
      this.tabs.forEach(tab => {
        // tab.position = this.gt.settings.sidebarPosition[tab.type].position;
        tab.active = this.gt.settings.sidebarPosition[tab.type].active;
      });
    }
  }

  activeTab(tab: Tab) {
    this.tabs.find(item => {
      if (item.position === tab.position) {
        item.active = false;
      }
    });
    tab.active = true;
    this.updateSettings();
  }

  updateSettings() {
    this.gt.settings.sidebarPosition = this.tabs.reduce((acc, { type, position, active }) => {
      acc[type] = { type, position, active };
      return acc;
    }, {} as Record<ISidebarPosition['type'], ISidebarPosition>);
  }

  createWindow(tab: Tab, x: number, y: number) {
    const lastPosition = tab.position;
    if (tab.position === 'right' && x <= 10) {
      tab.position = 'left';
      if (tab.active) {
        const rightTab = this.tabs.find(item => item.position === lastPosition);
        if (rightTab) rightTab.active = true;
      }
      this.tabs.forEach(item => {
        if (item.position === 'left') {
          item.active = false;
        }
      });
      tab.active = true;
      this.updateSettings();
      return;
    }
    if (tab.position === 'left' && x >= window.innerWidth - 10) {
      tab.position = 'right';
      if (tab.active) {
        const rightTab = this.tabs.find(item => item.position === lastPosition);
        if (rightTab) rightTab.active = true;
      }
      this.tabs.forEach(item => {
        if (item.position === 'right') {
          item.active = false;
        }
      });
      tab.active = true;
      this.updateSettings();
      return;
    }
    tab.position = 'float';
    if (tab.active) {
      const rightTab = this.tabs.find(item => item.position === lastPosition);
      if (rightTab) rightTab.active = true;
    }
    const overlayRef = this.overlay.create({
      disposeOnNavigation: true,
      positionStrategy: this.overlay.position().global().top(coerceCssPixelValue(y)).left(coerceCssPixelValue(x)),
    });
    const componentRef = overlayRef.attach(new ComponentPortal(FloatBarComponent));
    componentRef.instance.componentPortal = new ComponentPortal(tab.component);
    componentRef.instance.icon = tab.icon;
    componentRef.instance.dragEnded
      .pipe(
        takeUntil(
          componentRef.instance.windowClose.pipe(
            tap(() => {
              if (tab.position === 'float') {
                tab.position = lastPosition;
                delete tab.rect;
              }
              this.tabs.forEach(item => {
                if (item.position === tab.position) {
                  item.active = false;
                }
              });
              tab.active = true;
              overlayRef.dispose();
              this.updateSettings();
            }),
          ),
        ),
      )
      .subscribe(event => {
        const rect = event.source.getRootElement().getBoundingClientRect();
        if (rect.x <= 10) {
          tab.position = 'left';
          componentRef.instance.windowClose.emit();
        }
        if (rect.x >= window.innerWidth - rect.width - 10) {
          tab.position = 'right';
          componentRef.instance.windowClose.emit();
        }
      });
  }
}
