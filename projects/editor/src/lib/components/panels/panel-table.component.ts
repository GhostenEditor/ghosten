import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PanelTableColumn } from '../../types';

@Component({
  selector: 'gt-panel-table',
  template: `
    <div class="overflow-auto">
      <table class="table table-bordered m-0">
        <thead>
          <tr>
            <th class="text-truncate" i18n="Table Column Header: Index">
              序号
            </th>
            <th
              class="text-truncate"
              *ngFor="let column of columns"
              [style.width]="column.width"
            >
              {{ column.head }}
            </th>
            <th class="text-truncate" i18n="Table Column Header: Operation">
              操作
            </th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let row of data; let i = index">
            <td>{{ i + 1 }}</td>
            <td *ngFor="let column of columns">{{ row[column.prop] }}</td>
            <td>
              <ng-container>
                <i
                  class="gt-icon"
                  style="cursor:pointer;"
                  (click)="tableEdit.emit(row)"
                  >edit</i
                >
                <i
                  class="gt-icon"
                  style="cursor:pointer;"
                  (click)="tableRemove.emit(row)"
                  >minus</i
                >
              </ng-container>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="d-grid gap-2 mt-2 p-0">
      <button
        class="btn btn-light"
        (click)="tableAdd.emit()"
        i18n="Button: Add"
      >
        添加
      </button>
    </div>
  `,
})
export class PanelTableComponent {
  @Input() columns: PanelTableColumn[];
  @Input() data: any[] | Iterable<any> = [];
  @Output() tableAdd = new EventEmitter();
  @Output() tableEdit = new EventEmitter<any>();
  @Output() tableRemove = new EventEmitter<any>();
}
