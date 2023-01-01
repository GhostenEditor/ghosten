import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Inject,
  Output,
} from '@angular/core';

import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { FormItem } from '../types';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'properties-table',
  template: `
    <div style="overflow-x:auto;margin-bottom: 10px;">
      <table
        class="table table-bordered table-condensed table-sm"
        style="margin: 0;"
      >
        <thead>
          <tr>
            <th *ngFor="let column of formItem.columns">{{ column.name }}</th>
            <th style="width: 20px;"></th>
          </tr>
        </thead>
        <tbody>
          <ng-container *ngIf="formItem.value.length">
            <tr *ngFor="let row of formItem.value; let i = index">
              <ng-container *ngFor="let column of formItem.columns">
                <td
                  *ngIf="!editMap[column.prop + i]"
                  [title]="row[column.prop]"
                  (dblclick)="editMap[column.prop + i] = true"
                >
                  {{ row[column.prop] }}
                </td>
                <td *ngIf="editMap[column.prop + i]" [title]="row[column.prop]">
                  <input
                    title=""
                    class="form-control"
                    type="text"
                    [(ngModel)]="row[column.prop]"
                    autofocus
                    (blur)="editMap[column.prop + i] = false"
                  />
                </td>
              </ng-container>
              <td style="padding: 4px;">
                <a><i class="gt-icon" (click)="delete(row)">minus</i></a>
              </td>
            </tr>
          </ng-container>
          <tr *ngIf="formItem.tableAddType !== 'button'">
            <td *ngFor="let column of formItem.columns; let i = index">
              <input
                class="form-control input-xs"
                type="text"
                title=""
                [value]="column.value"
                (change)="_onchange($event, i)"
              />
            </td>
            <td style="padding: 4px;">
              <a><i class="gt-icon" (click)="add()">plus</i></a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
})
export class TableComponent {
  @Output() onclick = new EventEmitter();
  public editMap: any = {};

  constructor(
    @Inject('FormItem') public formItem: FormItem,
    public formControl: UntypedFormControl,
    public formGroup: UntypedFormGroup,
  ) {}

  add() {
    this.formItem.value.push(
      this.formItem.columns!.reduce((acc, v) => {
        acc[v.prop] = v.value;
        v.value = null;
        return acc;
      }, {}),
    );
    // this.formItem.value = [...this.formItem.value];
    this.formControl.setValue([...this.formItem.value]);
  }

  delete(row: any) {
    this.formItem.value.splice(this.formItem.value.indexOf(row), 1);
    this.formItem.value = [...this.formItem.value];
    this.formControl.setValue(this.formItem.value);
  }

  _onchange($event: any, index: number) {
    $event.preventDefault();
    $event.stopPropagation();
    this.formItem.columns![index].value = $event.target.value;
    this.formControl.setValue(this.formItem.value);
  }
}
