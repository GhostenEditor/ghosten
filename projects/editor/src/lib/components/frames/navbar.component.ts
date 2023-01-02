import { Component, Inject, Optional } from '@angular/core';

import { Board } from '@ghosten/common';

import { EditorBrand, TopBarButton } from '../../types';
import { GT_EDITOR_BRAND, TOP_BAR_BUTTONS } from '../../injectors';
import { GtEdit } from '../../classes';

@Component({
  preserveWhitespaces: false,
  selector: 'gt-navbar',
  host: {
    class: 'navbar border-bottom',
  },
  template: ` <div class="container-fluid">
    <a [href]="editorBrand.href" class="navbar-brand me-0 d-flex">
      <img
        [src]="editorBrand.src"
        [alt]="editorBrand.alt"
        class="rounded"
        style="width: 2rem;"
      />
      <span class="fw-bold mx-3">{{ editorBrand.title }}</span>
    </a>
    <span
      class="border-start border-secondary me-3"
      style="height: 2rem;"
    ></span>
    <nav class="nav nav-pills">
      <button
        *ngFor="let board of gt.boards"
        class="nav-link"
        type="button"
        [class.active]="gt.currentBoard === board"
        [style.cursor]="gt.currentBoard === board ? 'default' : 'pointer'"
        (click)="switchBoard(board)"
      >
        {{ board.name || board.type }}
      </button>
      <button
        *ngFor="let board of gt.customComponent"
        type="button"
        class="nav-link"
        [class.active]="gt.currentBoard === board"
        [style.cursor]="gt.currentBoard === board ? 'default' : 'pointer'"
        (click)="switchBoard(board)"
      >
        {{ board.name || board.type }}
      </button>
    </nav>
    <div class="fw-bold fs-5 ms-auto me-auto">{{ gt.metadata.name }}</div>
    <div>
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
          <button
            type="button"
            class="btn btn-link dropdown-toggle"
            [title]="item.title"
          >
            <i class="gt-icon">{{ item.icon }}</i>
          </button>
        </div>
      </ng-container>
    </div>
  </div>`,
})
export class NavbarComponent {
  constructor(
    public gt: GtEdit,
    @Optional() @Inject(GT_EDITOR_BRAND) public editorBrand: EditorBrand,
    @Optional() @Inject(TOP_BAR_BUTTONS) public topBarButtons: TopBarButton[],
  ) {}

  switchBoard(board: Board) {
    if (this.gt.currentBoard !== board) {
      this.gt.setCurrentBoard(board);
    }
  }
}
