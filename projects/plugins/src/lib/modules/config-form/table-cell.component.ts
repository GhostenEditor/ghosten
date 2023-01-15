import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'properties-table-cell',
  template: `
    <ng-container *ngIf="mode === 'view'">{{ value }}</ng-container>
    <ng-container *ngIf="mode === 'edit'">
      <ng-container [ngSwitch]="type">
        <input
          *ngSwitchCase="'text'"
          class="form-control"
          style="min-width: 10rem"
          type="text"
          [(ngModel)]="value"
          [ngModelOptions]="{ updateOn: 'blur' }"
          autofocus
          (blur)="cellBlur.emit()"
          (ngModelChange)="valueChange.emit(value)"
        />
        <input
          *ngSwitchCase="'number'"
          class="form-control"
          style="min-width: 10rem"
          type="number"
          [(ngModel)]="value"
          [ngModelOptions]="{ updateOn: 'blur' }"
          autofocus
          (blur)="cellBlur.emit()"
          (ngModelChange)="valueChange.emit(value)"
        />
        <div class="form-check form-switch" *ngSwitchCase="'switch'">
          <input
            class="form-check-input"
            type="checkbox"
            [(ngModel)]="value"
            (ngModelChange)="valueChange.emit(value)"
            (blur)="cellBlur.emit()"
          />
        </div>
        <input
          *ngSwitchDefault
          class="form-control"
          type="text"
          [(ngModel)]="value"
          autofocus
          (ngModelChange)="valueChange.emit(value)"
          (blur)="cellBlur.emit()"
        />
      </ng-container>
    </ng-container>
  `,
})
export class TableCellComponent {
  @Input() mode: 'view' | 'edit' = 'view';
  @Input() type: string | undefined;
  @Input() value: any;
  @Output() cellBlur = new EventEmitter();
  @Output() valueChange = new EventEmitter();
}
