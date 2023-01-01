import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'gt-data-binding-modal',
  template: ` <gt-modal
    i18n-modalTitle="Modal Title: Data Source Binding"
    modalTitle="数据绑定"
    size="sm"
    (confirm)="_confirm()"
    (cancel)="cancel.emit()"
  >
    <input type="text" [(ngModel)]="data" class="form-control" />
  </gt-modal>`,
})
export class DataBindingTemporaryComponent {
  @Input() data: any;
  @Output() confirm: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();
  public sourceID: string | null = null;

  _confirm() {
    this.confirm.emit(this.data);
  }
}
