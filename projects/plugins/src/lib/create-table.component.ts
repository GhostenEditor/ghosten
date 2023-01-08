import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'gt-create-table',
  template: ` <div class="p-2 bg-body rounded border shadow">
    <div class="d-flex" *ngFor="let row of rows; let i = index">
      <div
        class="table-cell border"
        *ngFor="let column of rows; let j = index"
        [class.bg-body-tertiary]="i <= current[0] && j <= current[1]"
        (mouseenter)="current = [i, j]"
      ></div>
    </div>
  </div>`,
  styles: [
    `
      .table-cell {
        width: 1.25rem;
        height: 1.25rem;
        margin: 0.15rem;
      }
    `,
  ],
})
export class CreateTableComponent {
  rows = Array(10).fill(0);
  current: [number, number] = [0, 0];
  @Output() modalClose = new EventEmitter<[number, number]>();

  @HostListener('click') onclick() {
    this.modalClose.emit(this.current);
  }
}
