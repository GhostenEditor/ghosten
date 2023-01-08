import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';
import { SPACE } from '@angular/cdk/keycodes';

import { GtNode, LogEvent } from '@ghosten/common';

import { Subject, Subscription, fromEvent } from 'rxjs';
import { filter, switchMap, take, tap } from 'rxjs/operators';
import Mousetrap from 'mousetrap';

import { BlackboardComponent } from './components/frames/blackboard.component';
import { EventsService } from './services';
import { GtEdit } from './classes';

@Component({
  preserveWhitespaces: false,
  selector: 'gt-edit',
  template: `
    <div
      class="d-flex vh-100 flex-column"
      style="padding: env(safe-area-inset-right) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)"
    >
      <gt-navbar></gt-navbar>
      <div class="d-flex flex-grow-1 flex-md-row flex-column overflow-hidden">
        <div
          class="d-inline-flex flex-md-column flex-row p-1"
          (mousedown)="$event.stopPropagation()"
        >
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
          <gt-blackboard
            #blackboard
            class="flex-grow-1"
            (gtNodeHover)="hoveredGtNode = $event"
          ></gt-blackboard>
          <div
            class="d-flex justify-content-between align-items-center border-top px-2"
          >
            <ol class="breadcrumb mb-0 flex-shrink-0">
              <li
                class="breadcrumb-item"
                *ngFor="
                  let node of (gt.selected[0] || gt.gt).path;
                  let i = index
                "
                [class.active]="node === (gt.selected[0] || gt.gt)"
              >
                <a
                  href="javascript:void(0)"
                  *ngIf="node !== (gt.selected[0] || gt.gt)"
                  (click)="gt.changeSelect(node)"
                >
                  {{ node.type }}
                </a>
                <ng-container *ngIf="node === (gt.selected[0] || gt.gt)">{{
                  node.type
                }}</ng-container>
              </li>
            </ol>
            <span class="badge text-bg-primary">{{
              hoveredGtNode?.type | uppercase
            }}</span>
          </div>
        </div>
        <div class="vr d-none d-md-flex h-100 text-body-secondary"></div>
        <hr class="d-lg-none text-body-secondary m-0" />
        <gt-sidebar
          gtResize
          style="width: 20rem"
          [maxWidth]="400"
          [minWidth]="230"
          [resizes]="['l', 't']"
        ></gt-sidebar>
      </div>
    </div>
  `,
})
export class GtEditComponent implements OnDestroy {
  @ViewChild(BlackboardComponent, { static: true })
  blackboard: BlackboardComponent;

  @Input() set data(data: any) {
    this.gt.init(data.config);
    this.gt.initSettings({
      name: data.title,
      description: data.description,
      ...data.settings,
    });
    this.gt.log.next({
      type: 'init',
      message: 'Application Initialization',
      data: this.gt,
    });
  }

  @Output() log: Subject<LogEvent> = this.gt.log;
  @Output() gtInit: EventEmitter<GtEdit> = new EventEmitter<GtEdit>();
  private eventSubscription: Subscription = Subscription.EMPTY;
  hoveredGtNode: GtNode | null = null;

  constructor(public gt: GtEdit, private events: EventsService) {
    this.eventSubscription = this.events.onEvent.subscribe(data => {
      this.log.next({
        type: 'log',
        message: data.type,
        data: data.data,
      });
    });
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
}
