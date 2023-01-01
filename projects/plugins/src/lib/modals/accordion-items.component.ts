import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GtNode } from '@ghosten/common';

@Component({
  selector: 'gt-accordion-items',
  template: ` <gt-modal
    modalTitle="Accordion Item 编辑"
    size="lg"
    (confirm)="_confirm()"
    (cancel)="cancel.emit()"
  >
    <table class="table table-bordered">
      <thead>
        <tr>
          <th i18n="Table Column Header: Param Name">Header</th>
          <th i18n="Table Column Header: Param Value">ID</th>
          <th style="width: 2rem;"></th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let param of params">
          <td>{{ param.title }}</td>
          <td>{{ param.id }}</td>
          <td>
            <button
              type="button"
              class="btn btn-link"
              (click)="removeParam(param)"
            >
              <i class="gt-icon">minus</i>
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <input class="form-control" type="text" [(ngModel)]="paramKey" />
          </td>
          <td>
            <input class="form-control" type="text" [(ngModel)]="paramValue" />
          </td>
          <td>
            <button
              type="button"
              class="btn btn-link"
              [disabled]="!paramKey || !paramValue"
            >
              <i class="gt-icon" (click)="addParam()">plus</i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </gt-modal>`,
})
export class AccordionItemsComponent implements OnInit {
  @Input() gtNode: GtNode;
  @Output() confirm: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();
  public initialValue: any;
  public paramKey: string | null;
  public paramValue: string | null;
  public params: Set<{ title: string; id: string }>;

  constructor() {}

  ngOnInit() {
    this.params = Array.isArray(this.initialValue)
      ? new Set<{ title: string; id: string }>(this.initialValue)
      : new Set<{ title: string; id: string }>();
  }

  _confirm() {
    this.confirm.emit(Array.from(this.params));
  }

  addParam() {
    this.params.add({ title: this.paramKey!, id: this.paramValue! });
    this.paramKey = null;
    this.paramValue = null;
  }

  removeParam(param: { title: string; id: string }) {
    this.params.delete(param);
  }
}
