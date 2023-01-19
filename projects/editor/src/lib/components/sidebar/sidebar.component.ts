import { Component, ElementRef, Inject, Input, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { fromEvent, tap } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { GT_AUTH_CONFIG } from '../../injectors';
import { GtAuth } from '../../types';
import { GtEdit } from '../../classes';

import { SidebarService } from './sidebar.service';
import { Tab } from './types';

@Component({
  selector: 'gt-sidebar',
  host: {
    class: 'gt-sidebar flex-shrink-0',
    '[class.d-none]': 'shouldHide()',
  },
  template: `
    <div class="card border-0 h-100">
      <div class="card-header bg-body">
        <nav class="nav nav-pills nav-justified card-header-pills">
          <ng-container *ngFor="let tab of sidebar.tabs">
            <button
              class="nav-link"
              type="button"
              draggable="true"
              *ngIf="tab.position === type"
              [class.active]="tab.active"
              [style.cursor]="activeTab === tab ? 'default' : 'pointer'"
              (click)="sidebar.activeTab(tab)"
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
          *ngIf="sidebar.tabs[0].position === type"
          [style.display]="sidebar.tabs[0].active ? '' : 'none'"
        ></gt-accordion-element>
        <gt-accordion-config
          class="tab-panel"
          *ngIf="sidebar.tabs[1].position === type"
          [style.display]="sidebar.tabs[1].active ? '' : 'none'"
        ></gt-accordion-config>
        <gt-accordion-elTree
          class="tab-panel"
          *ngIf="sidebar.tabs[2].position === type"
          [style.display]="sidebar.tabs[2].active ? '' : 'none'"
        ></gt-accordion-elTree>
        <gt-accordion-page
          class="tab-panel"
          *ngIf="sidebar.tabs[3].position === type"
          [style.display]="sidebar.tabs[3].active ? '' : 'none'"
        ></gt-accordion-page>
      </div>
    </div>
  `,
})
export class SidebarComponent {
  @Input() type: 'left' | 'right' = 'right';
  @ViewChild('tabsEle', { static: true }) tabsEle: ElementRef;
  activeTab: Tab;

  constructor(
    public gt: GtEdit,
    public sidebar: SidebarService,
    @Inject(GT_AUTH_CONFIG) public gtAuth: GtAuth,
    @Inject(DOCUMENT) private _document: Document,
  ) {}

  dragStart(tab: Tab, event: DragEvent) {
    event.dataTransfer!.dropEffect = 'move';
    fromEvent(this._document, 'dragover')
      .pipe(
        takeUntil(
          fromEvent<DragEvent>(this._document, 'drop').pipe(
            tap(event => {
              event.preventDefault();
              this.sidebar.createWindow(tab, event.clientX, event.clientY);
            }),
          ),
        ),
        tap(event => event.preventDefault()),
      )
      .subscribe();
  }

  shouldHide() {
    return !this.sidebar.tabs.find(tab => tab.position === this.type);
  }
}
