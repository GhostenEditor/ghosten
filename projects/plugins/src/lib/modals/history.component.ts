import { Component, EventEmitter, Optional, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GtEdit } from '@ghosten/editor';

import { EMPTY } from 'rxjs';

@Component({
  selector: 'history-component',
  template: ` <gt-modal i18n-modalTitle="Modal Title: History" modalTitle="历史" (cancel)="cancel.emit()">
    <table class="table table-striped table-bordered table-hover">
      <thead class="position-sticky bg-body" style="top: -1rem">
        <tr>
          <th>Type</th>
          <th>timestamp</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let item of data | async">
          <td>{{ item.type }}</td>
          <td>{{ item.timestamp | date : 'medium' }}</td>
          <td>
            <button type="button" class="btn btn-light" (click)="confirm.emit(item)">
              <i class="gt-icon">rotate_ccw</i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </gt-modal>`,
})
export class HistoryComponent {
  @Output() confirm: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();
  data = this.http
    ? this.http.get<any[]>('getHistoryByID', {
        params: { id: this.gt.metadata.id || 0 },
      })
    : EMPTY;

  constructor(@Optional() private http: HttpClient, private gt: GtEdit) {
    console.info(gt);
  }
}
