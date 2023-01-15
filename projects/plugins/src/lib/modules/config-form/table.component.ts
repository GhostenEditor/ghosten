import { Component, ElementRef, EventEmitter, Inject, Injector, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ComponentPortal } from '@angular/cdk/portal';
import { Overlay } from '@angular/cdk/overlay';

import { FormItem } from '@ghosten/editor';

import { take } from 'rxjs/operators';

@Component({
  selector: 'properties-table',
  template: `
    <div
      style="overflow-x:auto;margin-bottom: 10px;"
      [class.bg-body]="isMaximize"
      [class.p-3]="isMaximize"
      [class.shadow]="isMaximize"
      [class.border]="isMaximize"
      [class.rounded]="isMaximize"
    >
      <button
        *ngIf="!isMaximize"
        type="button"
        class="btn btn-light btn-sm position-absolute top-0 end-0"
        (click)="maximize()"
      >
        <i class="gt-icon">maximize</i>
      </button>
      <table class="table table-bordered table-condensed table-sm" style="margin: 0;">
        <thead>
          <tr>
            <th *ngFor="let column of formItem.columns">{{ column.name }}</th>
            <th style="width: 1.25rem;"></th>
          </tr>
        </thead>
        <tbody>
          <ng-container *ngIf="formControl.value.length">
            <tr *ngFor="let row of formControl.value; let i = index">
              <td
                *ngFor="let column of formItem.columns"
                [title]="row[column.prop]"
                (dblclick)="editMap[column.prop + i] = true"
              >
                <properties-table-cell
                  [mode]="editMap[column.prop + i] ? 'edit' : 'view'"
                  [type]="column.type"
                  [(value)]="row[column.prop]"
                  (cellBlur)="editMap[column.prop + i] = false"
                ></properties-table-cell>
              </td>
              <!--<td *ngIf="editMap[column.prop + i]" [title]="row[column.prop]">
<properties-table-cell
[type]="column.type"
[(value)]="row[column.prop]"
(cellBlur)="editMap[column.prop + i] = false"
></properties-table-cell>
&lt;!&ndash;                 <input
title=""
class="form-control"
type="text"
[(ngModel)]="row[column.prop]"
autofocus
(blur)="editMap[column.prop + i] = false"
/>&ndash;&gt;
</td>-->
              <td style="padding: 4px;">
                <button type="button" class="btn btn-link">
                  <i class="gt-icon" (click)="delete(row)">minus</i>
                </button>
              </td>
            </tr>
          </ng-container>
          <tr *ngIf="formItem.tableAddType !== 'button'">
            <td *ngFor="let column of formItem.columns; let i = index">
              <properties-table-cell
                [mode]="'edit'"
                [type]="column.type"
                [(value)]="column.value"
                (valueChange)="_onchange($event, i)"
              ></properties-table-cell>
            </td>
            <td style="padding: 4px;">
              <button type="button" class="btn btn-link">
                <i class="gt-icon" (click)="add()">plus</i>
              </button>
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
  public isMaximize = false;

  constructor(
    @Inject('FormItem') public formItem: FormItem,
    public formControl: FormControl,
    public formGroup: FormGroup,
    private overlay: Overlay,
    private elementRef: ElementRef,
    private injector: Injector,
  ) {}

  add() {
    this.formControl.value.push(
      this.formItem.columns!.reduce<any>((acc, v) => {
        acc[v.prop] = v.value;
        v.value = null;
        return acc;
      }, {}),
    );
    // this.formItem.value = [...this.formItem.value];
    this.formControl.setValue([...this.formControl.value]);
  }

  delete(row: any) {
    this.formControl.value.splice(this.formControl.value.indexOf(row), 1);
    this.formControl.setValue([...this.formControl.value]);
  }

  _onchange(value: any, index: number) {
    this.formItem.columns![index].value = value;
    // this.formControl.setValue(this.formControl.value);
  }

  maximize() {
    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      disposeOnNavigation: true,
      backdropClass: '',
      positionStrategy: this.overlay
        .position()
        .flexibleConnectedTo(this.elementRef.nativeElement)
        .withPositions([
          {
            overlayX: 'end',
            overlayY: 'top',
            originX: 'end',
            originY: 'top',
            offsetX: 12,
            offsetY: -6,
          },
        ]),
    });
    const componentRef = overlayRef.attach(
      new ComponentPortal(
        TableComponent,
        null,
        Injector.create({
          providers: [],
          parent: this.injector,
        }),
      ),
    );
    componentRef.instance.isMaximize = true;
    overlayRef
      .backdropClick()
      .pipe(take(1))
      .subscribe(() => overlayRef.dispose());
  }
}
