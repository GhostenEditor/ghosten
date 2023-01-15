import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormItem } from '@ghosten/editor';

@Component({
  selector: 'properties-object',
  template: ` <table class="table table-bordered table-condensed table-sm">
    <thead>
      <tr>
        <th>Key</th>
        <th>Value</th>
        <th style="width: 20px;"></th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let row of formItem.value | keyvalue">
        <td class="text-truncate" [title]="row.key">{{ row.key }}</td>
        <td class="text-truncate" [title]="row.value">{{ row.value }}</td>
        <td style="padding: 4px;">
          <a><i class="gt-icon" (click)="deleteRow(row)">minus</i></a>
        </td>
      </tr>
      <tr>
        <td>
          <input class="form-control input-xs" type="text" title="" [(ngModel)]="key" />
        </td>
        <td>
          <input class="form-control input-xs" type="text" title="" [(ngModel)]="value" />
        </td>
        <td>
          <a><i class="gt-icon" (click)="add()">plus</i></a>
        </td>
      </tr>
    </tbody>
  </table>`,
})
export class ObjectComponent {
  @Input() formItem: FormItem;
  @Input() relateList: any[];
  @Output() onchange: EventEmitter<FormItem> = new EventEmitter<FormItem>();

  key: string;
  value: string;

  add() {
    this.formItem.value[this.key] = (this.value && this.value.trim()) || '';
    this.onchange.emit(this.formItem);
    this.key = this.value = '';
  }

  deleteRow({ key }: any) {
    delete this.formItem.value[key];
    this.onchange.emit(this.formItem);
  }
}
