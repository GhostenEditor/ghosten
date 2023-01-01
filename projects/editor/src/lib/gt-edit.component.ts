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
import { filter, map, switchMap, take, tap } from 'rxjs/operators';
import Mousetrap from 'mousetrap';

import { EditorSettingService, EventsService } from './services';
import { BlackboardComponent } from './components/frames/blackboard.component';
import { GtEdit } from './classes';

@Component({
  preserveWhitespaces: false,
  selector: 'gt-edit',
  template: `
    <div class="gt-wrapper d-flex h-100 flex-column" style="min-width: 50rem;">
      <gt-navbar></gt-navbar>
      <div class="d-flex flex-grow-1 overflow-hidden">
        <div class="h-100 border-end">
          <div
            class="toolbox btn-group-vertical"
            (mousedown)="$event.stopPropagation()"
          >
            <button
              class="btn btn-text rounded-0 border-0"
              style="border-top-left-radius: 0"
              tooltip
              tooltipTitle="光标"
              i18n-tooltipTitle="Button: Cursor"
              [class.active]="gt.mode === 'edit'"
              (click)="gt.mode = 'edit'"
            >
              <i class="gt-icon">mouse_pointer</i>
            </button>
            <button
              class="btn btn-text rounded-0 border-0"
              tooltip
              tooltipTitle="平移"
              i18n-tooltipTitle="Button: Pan"
              [class.active]="gt.mode === 'move'"
              (click)="gt.mode = 'move'; gt.selected = []"
            >
              <i class="gt-icon">move</i>
            </button>
            <button
              class="btn btn-text rounded-0 border-0"
              tooltip
              tooltipTitle="重置"
              i18n-tooltipTitle="Button: Reset"
              style="border-bottom-left-radius: 0"
              (click)="resetPosition()"
            >
              <i class="gt-icon">refresh_ccw</i>
            </button>
          </div>
        </div>
        <div class="d-flex flex-column flex-grow-1 overflow-hidden">
          <gt-blackboard
            #blackboard
            class="flex-grow-1"
            (gtNodeHover)="hoveredGtNode = $event"
          ></gt-blackboard>
          <div class="d-flex justify-content-between border-top px-3">
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
        <gt-sidebar
          class="border-start"
          gtResize
          style="width: 20rem"
          [maxWidth]="400"
          [minWidth]="230"
          [resizes]="['l']"
        ></gt-sidebar>
      </div>
    </div>
  `,
})
export class GtEditComponent implements OnDestroy {
  @ViewChild(BlackboardComponent, { static: true })
  blackboard: BlackboardComponent;

  @Input() set data(data: any) {
    this.gt.init(data);
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

  constructor(
    public gt: GtEdit,
    private events: EventsService,
    editorSetting: EditorSettingService,
  ) {
    this.eventSubscription = this.events.onEvent.subscribe(data => {
      this.log.next({
        type: 'log',
        message: data.type,
        data: data.data,
      });
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
      editorSetting.activateRightTab(0);
    });
    Mousetrap.bind('alt+2', event => {
      event.preventDefault();
      editorSetting.activateRightTab(1);
    });
    Mousetrap.bind('alt+3', event => {
      event.preventDefault();
      editorSetting.activateRightTab(2);
    });
    Mousetrap.bind('alt+4', event => {
      event.preventDefault();
      editorSetting.activateRightTab(3);
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
        filter(event => event.keyCode === SPACE),
        map(() => gt.mode),
        tap(() => (gt.mode = 'move')),
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
