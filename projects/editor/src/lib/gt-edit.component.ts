import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  Optional,
  Output,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { SPACE } from '@angular/cdk/keycodes';

import { GtNode, LogEvent } from '@ghosten/common';

import { Subscription, fromEvent, merge } from 'rxjs';
import { filter, switchMap, take, tap } from 'rxjs/operators';
import Mousetrap from 'mousetrap';

import { GT_CONTEXTMENU, GT_EVENTS_LISTENER } from './injectors';
import { GtContextMenu, GtEvent } from './types';
import { BlackboardComponent } from './components/blackboard/blackboard.component';
import { ContextMenu } from './modules';
import { EventsService } from './services';
import { GtEdit } from './classes';
import { isPlatformBrowser } from '@angular/common';

@Component({
  preserveWhitespaces: false,
  selector: 'gt-editor',
  template: `
    <div
      class="d-flex vh-100 flex-column"
      style="padding: env(safe-area-inset-right) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)"
    >
      <gt-navbar></gt-navbar>
      <div class="d-flex flex-grow-1 flex-md-row flex-column overflow-hidden">
        <div class="d-inline-flex flex-md-column flex-row p-1" (mousedown)="$event.stopPropagation()">
          <button
            class="btn btn-text mb-md-1 me-1 me-md-0"
            tooltip
            tooltipTitle="光标"
            i18n-tooltipTitle="Button: Cursor"
            [class.active]="gt.mode === 'edit'"
            (click)="gt.mode = 'edit'"
          >
            <i class="gt-icon">mouse_pointer</i>
          </button>
          <button
            class="btn btn-text mb-md-1 me-1 me-md-0"
            tooltip
            tooltipTitle="平移"
            i18n-tooltipTitle="Button: Pan"
            [class.active]="gt.mode === 'move'"
            (click)="gt.mode = 'move'; gt.selected = []"
          >
            <i class="gt-icon">move</i>
          </button>
          <button
            class="btn btn-text"
            tooltip
            tooltipTitle="重置"
            i18n-tooltipTitle="Button: Reset"
            (click)="resetPosition()"
          >
            <i class="gt-icon">refresh_ccw</i>
          </button>
        </div>
        <div class="vr d-none d-md-flex h-100 text-body-secondary"></div>
        <hr class="d-lg-none text-body-secondary m-0" />
        <div class="d-flex flex-column flex-grow-1 overflow-hidden">
          <gt-blackboard #blackboard class="flex-grow-1" (gtNodeHover)="hoveredGtNode = $event"></gt-blackboard>
          <div class="d-flex justify-content-between align-items-center border-top px-2">
            <ol class="breadcrumb mb-0 flex-shrink-0">
              <li
                class="breadcrumb-item"
                *ngFor="let node of (gt.selected[0] || gt.gt)?.path; let i = index"
                [class.active]="node === (gt.selected[0] || gt.gt)"
              >
                <a
                  href="javascript:void(0)"
                  *ngIf="node !== (gt.selected[0] || gt.gt)"
                  (click)="gt.changeSelect(node)"
                  (contextmenu)="onContextmenu(node, $event)"
                >
                  {{ node.type }}
                </a>
                <ng-container *ngIf="node === (gt.selected[0] || gt.gt)">{{ node.type }}</ng-container>
              </li>
            </ol>
            <span class="badge text-bg-primary">{{ hoveredGtNode?.type | uppercase }}</span>
          </div>
        </div>
        <div class="vr d-none d-md-flex h-100 text-body-secondary"></div>
        <hr class="d-lg-none text-body-secondary m-0" />
        <gt-sidebar gtResize style="width: 20rem" [maxWidth]="400" [minWidth]="230" [resizes]="['l', 't']"></gt-sidebar>
      </div>
    </div>
  `,
})
export class GtEditComponent implements OnDestroy {
  @ViewChild(BlackboardComponent, { static: true })
  blackboard: BlackboardComponent;
  private readonly isBrowser: boolean;

  @Input() set data(data: any) {
    if (data) {
      this.gt.init(data.config, data.components);
      this.gt.initSettings({
        name: data.title,
        description: data.description,
        ...data.settings,
      });
    } else {
      this.gt.init();
    }
  }

  @Output() event = new EventEmitter<GtEvent.Events>();
  @Output() log = new EventEmitter<LogEvent>();
  @Output() init: EventEmitter<GtEdit> = new EventEmitter<GtEdit>();
  private eventSubscription: Subscription = Subscription.EMPTY;
  hoveredGtNode: GtNode | null = null;

  constructor(
    public gt: GtEdit,
    events: EventsService,
    private contextmenu: ContextMenu,
    @Optional() @Inject(GT_CONTEXTMENU) private gtContextMenu: GtContextMenu,
    @Optional() @Inject(GT_EVENTS_LISTENER) gtEventsListener: any,
    @Inject(PLATFORM_ID) platformId: Object,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    if (!this.isBrowser) {
      return;
    }
    if (typeof gtEventsListener === 'function') {
      gtEventsListener(events.target);
    }
    this.eventSubscription = merge(
      gt.log.pipe(tap(event => this.log.emit(event))),
      events.CHANGE_SELECT.pipe(tap(data => this.event.emit({ type: 'CHANGE_SELECT', data }))),
      events.CHANGE_STYLE.pipe(tap(data => this.event.emit({ type: 'CHANGE_STYLE', data }))),
      events.CHANGE_PROPERTY.pipe(tap(data => this.event.emit({ type: 'CHANGE_PROPERTY', data }))),
      events.CHANGE_ACTION.pipe(tap(data => this.event.emit({ type: 'CHANGE_ACTION', data }))),
      events.CHANGE_BOARD.pipe(tap(data => this.event.emit({ type: 'CHANGE_BOARD', data }))),
      events.COPY_STYLE.pipe(tap(data => this.event.emit({ type: 'COPY_STYLE', data }))),
      events.PASTE_STYLE.pipe(tap(data => this.event.emit({ type: 'PASTE_STYLE', data }))),
      events.TOP_BUTTON_CLICK.pipe(tap(data => this.event.emit({ type: 'TOP_BUTTON_CLICK', data }))),
      events.SAVE.pipe(tap(data => this.event.emit({ type: 'SAVE', data }))),
      events.AUTO_SAVE.pipe(tap(data => this.event.emit({ type: 'AUTO_SAVE', data }))),
      events.INSERT_NODE.pipe(tap(data => this.event.emit({ type: 'INSERT_NODE', data }))),
      events.REMOVE_NODE.pipe(tap(data => this.event.emit({ type: 'REMOVE_NODE', data }))),
      events.MOVE_NODE.pipe(tap(data => this.event.emit({ type: 'MOVE_NODE', data }))),
      events.UNDO.pipe(tap(data => this.event.emit({ type: 'UNDO', data }))),
      events.REDO.pipe(tap(data => this.event.emit({ type: 'REDO', data }))),
      events.CUSTOM.pipe(tap(data => this.event.emit({ type: 'CUSTOM', data }))),
      events.SAVE_COMPONENT.pipe(tap(data => this.event.emit({ type: 'SAVE_COMPONENT', data }))),
      events.REMOVE_COMPONENT.pipe(tap(data => this.event.emit({ type: 'REMOVE_COMPONENT', data }))),
    ).subscribe();

    Mousetrap.bind(['ctrl+c', 'meta+c'], event => {
      event.preventDefault();
      gt.copyNode();
    });
    Mousetrap.bind(['ctrl+v', 'meta+v'], event => {
      event.preventDefault();
      gt.pasteNode(gt.selected[0]);
    });
    Mousetrap.bind(['ctrl+shift+c', 'meta+shift+c'], event => {
      event.preventDefault();
      gt.copyStyle();
    });
    Mousetrap.bind(['ctrl+shift+v', 'meta+shift+v'], event => {
      event.preventDefault();
      gt.pasteStyle();
    });
    Mousetrap.bind(['ctrl+z', 'meta+z'], event => {
      event.preventDefault();
      gt.undo();
    });
    Mousetrap.bind(['ctrl+shift+z', 'meta+shift+z'], event => {
      event.preventDefault();
      gt.redo();
    });
    Mousetrap.bind('alt+1', event => {
      event.preventDefault();
      gt.settings.activateRightTab(0);
    });
    Mousetrap.bind('alt+2', event => {
      event.preventDefault();
      gt.settings.activateRightTab(1);
    });
    Mousetrap.bind('alt+3', event => {
      event.preventDefault();
      gt.settings.activateRightTab(2);
    });
    Mousetrap.bind('alt+4', event => {
      event.preventDefault();
      gt.settings.activateRightTab(3);
    });
    Mousetrap.bind('del', event => {
      event.preventDefault();
      gt.removeNode();
    });
    Mousetrap.bind('m', event => {
      event.preventDefault();
      gt.mode = 'move';
    });
    Mousetrap.bind('v', event => {
      event.preventDefault();
      gt.mode = 'edit';
    });
    fromEvent<KeyboardEvent>(document, 'keypress')
      .pipe(
        filter(() => document.activeElement === document.body),
        filter(event => event.keyCode === SPACE),
        tap(event => {
          event.preventDefault();
          gt.mode = 'move';
        }),
        switchMap(() =>
          fromEvent<KeyboardEvent>(document, 'keyup').pipe(
            filter(event => event.keyCode === SPACE),
            tap(() => (gt.mode = 'edit')),
            take(1),
          ),
        ),
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.eventSubscription.unsubscribe();
    this.gt.destroy();
  }

  resetPosition() {
    this.blackboard.resetPosition();
  }

  onContextmenu(targetNode: GtNode, event: MouseEvent) {
    if (this.gtContextMenu) {
      event.preventDefault();
      const menus = this.gtContextMenu(this.gt, targetNode);
      this.contextmenu.create(event, menus);
    }
  }
}
