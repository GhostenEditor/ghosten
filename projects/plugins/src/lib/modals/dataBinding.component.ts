import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GtNode } from '@ghosten/common';

@Component({
  selector: 'gt-data-binding-modal',
  template: ` <gt-modal
    i18n-modalTitle="Modal Title: Data Source Binding"
    modalTitle="数据绑定"
    size="sm"
    (confirm)="_confirm()"
    (cancel)="cancel.emit()"
  >
    <div class="mb-3">
      <label class="form-label">数据源ID</label>
      <select class="form-select" [(ngModel)]="sourceID">
        <optgroup label="Local">
          <option
            *ngFor="let option of gtNode.dataSource.data"
            [value]="option.id"
          >
            {{ option.id }}
          </option>
        </optgroup>
      </select>
    </div>
  </gt-modal>`,
})
export class DataBindingComponent {
  @Input() gtNode: GtNode;
  @Output() confirm: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();
  public sourceID: string | null = null;

  _confirm() {
    this.confirm.emit(this.sourceID);
  }
}
