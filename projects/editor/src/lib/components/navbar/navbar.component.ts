import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from '@angular/core';

import { Board } from '@ghosten/common';

import { Subscription } from 'rxjs';

import { EditorBrand, TopBarButton } from '../../types';
import { GT_EDITOR_BRAND, TOP_BAR_BUTTONS } from '../../injectors';
import { DropdownItem } from '../../modules';
import { EventsService } from '../../services';
import { GtEdit } from '../../classes';

@Component({
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'gt-navbar',
  host: {
    class: 'navbar navbar-expand-md border-bottom',
  },
  template: ` <div class="container-fluid flex-nowrap">
    <button
      class="navbar-toggler me-auto"
      type="button"
      data-bs-toggle="collapse"
      aria-expanded="false"
      aria-label="Toggle navigation"
      gt-dropdown
      [items]="getLeftDropdown()"
      (itemClick)="switchBoard($event.data)"
    >
      <i class="gt-icon">list</i>
    </button>
    <span
      style="cursor: pointer"
      (click)="editorBrand.click && editorBrand.click()"
      class="navbar-brand d-flex align-items-center"
    >
      <img
        [src]="editorBrand.src"
        [alt]="editorBrand.alt"
        class="rounded"
        width="32"
        height="32"
        style="width: 2rem; height: 2rem;"
      />
      <span class="fw-bold ms-2 d-md-inline d-none">{{ editorBrand.title }}</span>
    </span>
    <div class="vr my-2 text-body"></div>
    <nav class="nav nav-pills me-auto ms-3 d-none d-md-flex">
      <button
        *ngFor="let board of gt.pages"
        class="nav-link"
        type="button"
        [class.active]="gt.currentBoard === board"
        [style.cursor]="gt.currentBoard === board ? 'default' : 'pointer'"
        (click)="switchBoard(board)"
      >
        {{ board.name || board.type }}
      </button>
    </nav>
    <div class="ms-3 me-auto text-nowrap">
      <span class="fw-bold fs-5">{{ gt.settings.name }}</span>
      &nbsp;<small class="d-none d-sm-inline">{{ gt.settings.description }}</small>
    </div>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      aria-expanded="false"
      aria-label="Toggle navigation"
      gt-dropdown
      [items]="getRightDropdown()"
      (itemClick)="$event.data.onclick!(gt)"
    >
      <i class="gt-icon">dotted_line</i>
    </button>
    <div class="text-nowrap ms-3 d-none d-md-block">
      <ng-container *ngFor="let item of topBarButtons">
        <button
          type="button"
          class="btn btn-light"
          tooltip
          tooltipPosition="bottom"
          [class.active]="item.active"
          [tooltipTitle]="item.title!"
          *ngIf="!item.children"
          [disabled]="item.disabled"
          (click)="item.onclick!(gt)"
        >
          <i class="gt-icon">{{ item.icon }}</i></button
        >&nbsp;
        <div class="btn-group" role="group" *ngIf="item.children">
          <button type="button" class="btn btn-link dropdown-toggle" [title]="item.title">
            <i class="gt-icon">{{ item.icon }}</i>
          </button>
        </div>
      </ng-container>
    </div>
  </div>`,
})
export class NavbarComponent implements OnInit, OnDestroy {
  private subscription = Subscription.EMPTY;

  constructor(
    public gt: GtEdit,
    private events: EventsService,
    private cdr: ChangeDetectorRef,
    @Inject(GT_EDITOR_BRAND) public editorBrand: EditorBrand,
    @Inject(TOP_BAR_BUTTONS) public topBarButtons: TopBarButton[],
  ) {}

  ngOnInit() {
    this.subscription = this.events.onEvent.subscribe(() => this.cdr.detectChanges());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getLeftDropdown(): DropdownItem[] {
    return this.gt.boards.concat(this.gt.customComponent).map(data => ({
      text: data.type,
      active: this.gt.currentBoard === data,
      data,
    }));
  }

  getRightDropdown(): DropdownItem[] {
    return this.topBarButtons.map(data => ({
      text: data.title!,
      active: data.active,
      icon: data.icon,
      data,
    }));
  }

  switchBoard(board: Board) {
    if (this.gt.currentBoard !== board) {
      this.gt.setCurrentBoard(board);
    }
  }
}
