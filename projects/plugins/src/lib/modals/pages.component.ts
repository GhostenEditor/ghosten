import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GtEdit } from '@ghosten/editor';

interface PageConfig {
  id: number;
  pageTitle: string;
  pageDescription: string;
  pageUrl: string;
  pageParentID: number | null;
}

@Component({
  selector: 'gt-modal-pages',
  template: ` <gt-modal
    i18n-modalTitle="Modal Title: Page List"
    modalTitle="页面列表"
    size="xl"
    (confirm)="modalClose.emit()"
    (cancel)="modalClose.emit()"
  >
    <table class="table table-bordered table-hover table-striped">
      <thead>
        <tr>
          <th i18n="Table Column Header: Title" style="width: 12rem">标题</th>
          <th i18n="Table Column Header: Description">描述</th>
          <th i18n="Table Column Header: Url" style="width: 12rem">路径</th>
          <th i18n="Table Column Header: Parent Menu" style="width: 12rem">
            上级菜单
          </th>
          <th
            i18n="Table Column Header: Operation"
            style="width: 11rem;min-width: 11rem;"
          >
            操作
          </th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let page of pageList">
          <ng-container *ngIf="page.mode !== 'edit'">
            <td>{{ page.pageTitle }}</td>
            <td>{{ page.pageDescription }}</td>
            <td>{{ page.pageUrl }}</td>
            <td>{{ page.pageParentID }}</td>
            <td>
              <button
                class="btn btn-light btn-sm me-2"
                [disabled]="mode !== 'view'"
                (click)="activatePage(page.id)"
              >
                编辑
              </button>
              <button
                class="btn btn-light btn-sm me-2"
                [disabled]="mode !== 'view'"
                (click)="startEditPage(page)"
              >
                修改
              </button>
              <button
                class="btn btn-light btn-sm"
                [disabled]="mode !== 'view'"
                (click)="deletePage(page.id)"
              >
                删除
              </button>
            </td>
          </ng-container>
          <ng-container *ngIf="page.mode === 'edit'" [formGroup]="form">
            <td>
              <input
                type="text"
                class="form-control"
                [class.is-invalid]="pageTitle.touched && pageTitle.invalid"
                formControlName="pageTitle"
              />
              <div class="invalid-feedback" *ngIf="pageTitle.touched">
                {{ pageTitle.errors | json }}
              </div>
            </td>
            <td>
              <input
                type="text"
                class="form-control"
                [class.is-invalid]="
                  pageDescription.touched && pageDescription.invalid
                "
                formControlName="pageDescription"
              />
              <div class="invalid-feedback" *ngIf="pageDescription.touched">
                {{ pageDescription.errors | json }}
              </div>
            </td>
            <td>
              <input
                type="text"
                class="form-control"
                [class.is-invalid]="pageUrl.touched && pageUrl.invalid"
                formControlName="pageUrl"
              />
              <div class="invalid-feedback" *ngIf="pageUrl.touched">
                {{ pageUrl.errors | json }}
              </div>
            </td>
            <td>
              <select
                name=""
                id=""
                class="form-select"
                formControlName="pageParentID"
              >
                <option [value]="null"></option>
                <option *ngFor="let option of pageList" [value]="option.id">
                  {{ option.pageTitle }}
                </option>
              </select>
            </td>
            <td>
              <button
                class="btn btn-light btn-sm me-2"
                (click)="editPage(page)"
              >
                完成
              </button>
              <button class="btn btn-light btn-sm" (click)="resetStatus()">
                取消
              </button>
            </td>
          </ng-container>
        </tr>
        <tr *ngIf="mode === 'add'" [formGroup]="form">
          <td>
            <input
              type="text"
              class="form-control"
              [class.is-invalid]="pageTitle.touched && pageTitle.invalid"
              formControlName="pageTitle"
            />
            <div class="invalid-feedback" *ngIf="pageTitle.touched">
              {{ pageTitle.errors | json }}
            </div>
          </td>
          <td>
            <input
              type="text"
              class="form-control"
              [class.is-invalid]="
                pageDescription.touched && pageDescription.invalid
              "
              formControlName="pageDescription"
            />
            <div class="invalid-feedback" *ngIf="pageDescription.touched">
              {{ pageDescription.errors | json }}
            </div>
          </td>
          <td>
            <input
              type="text"
              class="form-control"
              [class.is-invalid]="pageUrl.touched && pageUrl.invalid"
              formControlName="pageUrl"
            />
            <div class="invalid-feedback" *ngIf="pageUrl.touched">
              {{ pageUrl.errors | json }}
            </div>
          </td>
          <td>
            <select
              name=""
              id=""
              class="form-select"
              formControlName="pageParentID"
            >
              <option [value]="null"></option>
              <option *ngFor="let option of pageList" [value]="option.id">
                {{ option.pageTitle }}
              </option>
            </select>
          </td>
          <td>
            <button class="btn btn-light btn-sm me-2" (click)="addPage()">
              完成
            </button>
            <button class="btn btn-light btn-sm" (click)="resetStatus()">
              取消
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="d-grid gap-2 mt-2">
      <button
        class="btn btn-light"
        i18n="Button: Add"
        [disabled]="mode !== 'view'"
        (click)="startAddPage()"
      >
        添加
      </button>
    </div>
  </gt-modal>`,
})
export class PagesComponent implements OnInit {
  @Output() modalClose = new EventEmitter();
  mode: 'add' | 'view' | 'edit' = 'view';
  pageList: (PageConfig & { mode: 'view' | 'edit' })[];
  form = new FormGroup({
    pageTitle: new FormControl(null, Validators.required),
    pageDescription: new FormControl(null, Validators.required),
    pageUrl: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[\w\-]+$/),
    ]),
    pageParentID: new FormControl(),
  });
  pageTitle = this.form.get<string>('pageTitle')!;
  pageDescription = this.form.get<string>('pageDescription')!;
  pageUrl = this.form.get<string>('pageUrl')!;
  pageParentID = this.form.get<string>('pageParentID')!;

  constructor(private gt: GtEdit) {}

  ngOnInit() {
    this.loadPageList();
  }

  loadPageList() {
    this.gt.log.next({
      type: 'Manipulate Page',
      subType: 'getPageList',
      message: null,
      data: null,
      callback: data => {
        this.pageList = data;
      },
    });
  }

  startAddPage() {
    this.mode = 'add';
  }

  addPage() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.gt.log.next({
      type: 'Manipulate Page',
      subType: 'addPage',
      message: null,
      data: this.form.value,
      callback: () => {
        this.loadPageList();
        this.resetStatus();
      },
    });
  }

  startEditPage(page: PageConfig & { mode: 'view' | 'edit' }) {
    this.mode = page.mode = 'edit';
    this.pageTitle.setValue(page.pageTitle);
    this.pageDescription.setValue(page.pageDescription);
    this.pageUrl.setValue(page.pageUrl);
    this.pageParentID.setValue(page.pageParentID);
  }

  editPage(page: PageConfig & { mode: 'view' | 'edit' }) {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.gt.log.next({
      type: 'Manipulate Page',
      subType: 'editPage',
      message: null,
      data: {
        id: page.id,
        ...this.form.value,
      },
      callback: () => {
        this.loadPageList();
        this.resetStatus();
      },
    });
  }

  deletePage(id: number) {
    this.gt.log.next({
      type: 'Manipulate Page',
      subType: 'deletePage',
      message: null,
      data: { id },
      callback: () => this.loadPageList(),
    });
  }

  activatePage(id: number) {
    this.gt.log.next({
      type: 'Manipulate Page',
      subType: 'activatePage',
      message: null,
      data: { id },
    });
    this.modalClose.emit();
  }

  resetStatus() {
    this.mode = 'view';
    this.form.reset();
  }
}
