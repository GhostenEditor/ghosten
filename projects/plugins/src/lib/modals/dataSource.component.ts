import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'gt-data-source-modal',
  template: ` <gt-modal
    i18n-modalTitle="Modal Title: Data Source Binding"
    modalTitle="数据绑定"
    size="lg"
    (confirm)="_confirm()"
    (cancel)="cancel.emit()"
  >
    <div class="mb-3">
      <label class="form-label">ID</label>
      <input type="text" class="form-control" [(ngModel)]="id" />
    </div>
    <div class="mb-3">
      <label class="form-label" i18n="Form Label: Type">类型</label>
      <select class="form-select" [(ngModel)]="type">
        <option value="http">HTTP</option>
        <option value="interval">Interval</option>
      </select>
    </div>
    <div class="row g-3">
      <div class="col-md-6">
        <label class="form-label" i18n="Form Label: Method">方法</label>
        <select class="form-select" [(ngModel)]="method">
          <option value="post">POST</option>
          <option value="get">GET</option>
        </select>
      </div>
      <div class="col-md-6">
        <label class="form-label" i18n="Form Label: Url">路径</label>
        <input type="text" class="form-control" [(ngModel)]="url" />
      </div>
      <div class="col-12">
        <label for="inputAddress" class="form-label" i18n="Form Label: Params"
          >参数</label
        >
        <table class="table table-bordered">
          <thead>
            <tr>
              <th i18n="Table Column Header: Param Name">参数名</th>
              <th i18n="Table Column Header: Param Value">参数值</th>
              <th style="width: 2rem;"></th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let param of params">
              <td>{{ param.key }}</td>
              <td>{{ param.value }}</td>
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
                <input
                  class="form-control"
                  type="text"
                  [(ngModel)]="paramKey"
                />
              </td>
              <td>
                <input
                  class="form-control"
                  type="text"
                  [(ngModel)]="paramValue"
                />
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
      </div>
    </div>
  </gt-modal>`,
})
export class DataSourceComponent {
  @Output() confirm: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();
  public id: string;
  public type: string;
  public method: string;
  public url: string;
  public paramKey: string | null;
  public paramValue: string | null;
  public params = new Set<{ key: string; value: string }>();

  addParam() {
    this.params.add({ key: this.paramKey!, value: this.paramValue! });
    this.paramKey = null;
    this.paramValue = null;
  }

  removeParam(param: { key: string; value: string }) {
    this.params.delete(param);
  }

  _confirm() {
    this.confirm.emit({
      id: this.id,
      type: this.type,
      args: [
        this.method,
        this.url,
        Array.from(this.params).reduce(
          (acc, { key, value }) => ({
            ...acc,
            [key]: value,
          }),
          {},
        ),
      ],
    });
  }
}
