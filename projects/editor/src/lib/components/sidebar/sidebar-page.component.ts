import { Component } from '@angular/core';

import { Board } from '@ghosten/common';

import { GtEdit } from '../../classes';

@Component({
  selector: 'gt-accordion-page',
  template: `
    <gt-accordion [multi]="false">
      <gt-accordion-item
        *ngFor="let board of gt.boards"
        [cardTitle]="board.name || 'Main'"
        (opened)="switchBoard(board)"
      >
        <i
          class="gt-icon me-2 accordion-header-buttons"
          *ngIf="board.type !== 'main'"
          style="cursor:pointer;"
          (click)="remove(board, $event); $event.stopPropagation()"
          >trash</i
        >
        <gt-board-edit [board]="board"></gt-board-edit>
      </gt-accordion-item>
    </gt-accordion>
    <div class="d-grid gap-2 p-3">
      <button class="btn btn-light" (click)="gt.addBoard()" i18n="Button: Add">
        添加
      </button>
    </div>
  `,
})
export class SidebarPageComponent {
  constructor(public gt: GtEdit) {}

  remove(board: Board, $event: MouseEvent) {
    $event.stopPropagation();
    this.gt.removeBoard(board);
  }

  switchBoard(board: Board) {
    if (this.gt.currentBoard !== board) {
      this.gt.setCurrentBoard(board);
    }
  }
}
