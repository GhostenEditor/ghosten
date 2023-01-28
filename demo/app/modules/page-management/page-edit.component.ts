import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { PageConfig } from './types';

@Component({
  selector: 'app-modal-page-edit',
  template: ` <app-modal
    [modalTitle]="modalTitle"
    [modalPending]="modalPending"
    [modalFooter]="true"
    [formGroup]="form"
    (confirm)="confirm()"
    (cancel)="modalClose.emit()"
    (animationDone)="animationDone.emit()"
  >
    <div class="alert alert-primary" role="alert">
      <i class="gt-icon">bell</i>
      <ng-container i18n="Tip: You'll see the change after refreshing browser!"
        >系统刷新后才能看到菜单栏的更新
      </ng-container>
    </div>
    <div class="mb-3">
      <label class="form-label" i18n="Table Column Header: Title">标题</label>
      <input
        id="title"
        type="text"
        class="form-control"
        [class.is-invalid]="pageTitle.touched && pageTitle.invalid"
        formControlName="title"
      />
      <div class="invalid-feedback" *ngIf="pageTitle.touched">此项为必填项</div>
    </div>
    <div class="row">
      <div class="col-md-6 mb-3">
        <label class="form-label" i18n="Table Column Header: Icon">菜单图标</label>
        <div class="input-group">
          <select class="form-select" formControlName="icon">
            <option [ngValue]="null"></option>
            <option *ngFor="let option of gtIcons" [ngValue]="option.value">
              {{ option.label || option.value }}
            </option>
          </select>
          <span class="input-group-text"
            ><i class="gt-icon">{{ pageIcon.value }}</i></span
          >
        </div>
      </div>
      <div class="col-md-6 mb-3">
        <label class="form-label" i18n="Table Column Header: Url">路径</label>
        <input
          type="text"
          class="form-control"
          [class.is-invalid]="pageUrl.touched && pageUrl.invalid"
          formControlName="url"
        />
        <div class="invalid-feedback" *ngIf="pageUrl.touched">
          {{ pageUrl.errors | json }}
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 mb-3">
        <label class="form-label" i18n="Table Column Header: Menu Category">菜单类型</label>
        <select class="form-select" formControlName="type">
          <option value="Function" i18n="Menu Category: Function">功能</option>
          <option value="Directory" i18n="Menu Category: Directory">目录</option>
        </select>
      </div>
      <div class="col-md-6 mb-3">
        <label class="form-label" i18n="Table Column Header: Parent Menu">上级菜单</label>
        <select
          class="form-select"
          formControlName="parentId"
          [class.is-invalid]="pageParentID.touched && pageParentID.invalid"
        >
          <option [ngValue]="null"></option>
          <option *ngFor="let option of parentList | async" [ngValue]="option.id">
            {{ option.title }}
          </option>
        </select>
        <div class="invalid-feedback" *ngIf="pageParentID.touched">
          {{ pageParentID.errors | json }}
        </div>
      </div>
    </div>
    <div class="mb-3">
      <label class="form-label" i18n="Table Column Header: Description">描述</label>
      <textarea
        rows="5"
        class="form-control"
        [class.is-invalid]="pageDescription.touched && pageDescription.invalid"
        formControlName="description"
      ></textarea>
      <div class="invalid-feedback" *ngIf="pageDescription.touched">此项为必填项</div>
    </div>
  </app-modal>`,
})
export class PageEditComponent implements OnInit {
  @Input() mode: 'add' | 'modify' = 'add';
  @Output() modalConfirm = new EventEmitter();
  @Output() modalClose = new EventEmitter();
  @Output() animationDone: EventEmitter<any> = new EventEmitter();

  form = new FormGroup({
    id: new FormControl(null),
    title: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    url: new FormControl(null, [Validators.required, Validators.pattern(/^[\w\-]+$/)]),
    type: new FormControl('Function', Validators.required),
    icon: new FormControl(null),
    parentId: new FormControl(),
  });
  pageID = this.form.get<string>('id')!;
  pageTitle = this.form.get<string>('title')!;
  pageDescription = this.form.get<string>('description')!;
  pageUrl = this.form.get<string>('url')!;
  pageType = this.form.get<string>('type')!;
  pageIcon = this.form.get<string>('icon')!;
  pageParentID = this.form.get<string>('parentId')!;
  modalPending = false;
  modalTitle: string;
  parentList = this.http.get<PageConfig[]>('getPageList', {
    params: { type: 'Directory' },
  });
  gtIcons: { label?: string; value: string }[] = [
    { label: '', value: 'add' },
    { label: '', value: 'mouse_pointer' },
    { label: '', value: 'division' },
    { label: '', value: 'checkbox' },
    { label: '', value: 'toys' },
    { label: '', value: 'trash' },
    { label: '', value: 'edit' },
    { label: '', value: 'file' },
    { label: '', value: 'pages' },
    { label: '', value: 'chevron_left' },
    { label: '', value: 'chevron_right' },
    { label: '', value: 'chevron_up' },
    { label: '', value: 'chevron_down' },
    { label: '', value: 'chevrons_left' },
    { label: '', value: 'chevrons_right' },
    { label: '', value: 'chevrons_up' },
    { label: '', value: 'chevrons_down' },
    { label: '', value: 'move' },
    { label: '', value: 'refresh' },
    { label: '', value: 'rotate_ccw' },
    { label: '', value: 'rotate_cw' },
    { label: '', value: 'arrow_left' },
    { label: '', value: 'arrow_right' },
    { label: '', value: 'dashed_rect' },
    { label: '', value: 'bind' },
    { label: '', value: 'preview' },
    { label: '', value: 'save' },
    { label: '', value: 'list' },
    { label: '', value: 'maximize' },
    { label: '', value: 'minimize' },
    { label: '', value: 'plus' },
    { label: '', value: 'minus' },
    { label: '', value: 'column' },
    { label: '', value: 'row' },
    { label: '', value: 'panel' },
    { label: '', value: 'form' },
    { label: '', value: 'gauge' },
    { label: '', value: 'dotted_line' },
    { label: '', value: 'bell' },
    { label: '', value: 'radio' },
    { label: '', value: 'button' },
    { label: '', value: 'button_group' },
    { label: '', value: 'unbind' },
    { label: '', value: 'custom' },
    { label: '', value: 'picture' },
    { label: '', value: 'battery' },
    { label: '', value: 'slot' },
    { label: '', value: 'water' },
    { label: '', value: 'textarea' },
    { label: '', value: 'toggle' },
    { label: '', value: 'input' },
    { label: '', value: 'close' },
    { label: '', value: 'calendar' },
    { label: '', value: 'check' },
    { label: '', value: 'dashed_line' },
    { label: '', value: 'solid_line' },
    { label: '', value: 'setting' },
    { label: '', value: 'logout' },
    { label: '', value: 'bar_chart' },
    { label: '', value: 'line_chart' },
    { label: '', value: 'history' },
    { label: '', value: 'icon' },
    { label: '', value: 'lamp' },
    { label: '', value: 'table' },
    { label: '', value: 'switch' },
    { label: '', value: 'slider' },
    { label: '', value: 'tools' },
    { label: '', value: 'pen' },
    { label: '', value: 'tab' },
  ];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    if (this.mode === 'add') {
      this.modalTitle = $localize`:Modal Title\: Add Page:页面创建`;
    } else {
      this.modalTitle = $localize`:Modal Title\: Modify Page:页面修改`;
    }
  }

  confirm() {
    if (this.form.valid) {
      this.modalPending = true;
      const body = { ...this.form.value };
      if (this.mode === 'add') delete body.id;
      this.http.post(this.mode === 'add' ? 'addPage' : 'editPage', body).subscribe({
        next: res => {
          this.modalPending = false;
          this.modalConfirm.emit(res);
        },
        error: error => {
          this.modalPending = false;
          const control = this.form.get(error.name);
          if (control) {
            control.setErrors({ text: error.message });
            control.markAsTouched();
          }
        },
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
