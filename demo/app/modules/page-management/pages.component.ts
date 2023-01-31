import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { HttpClient } from '@angular/common/http';
import { Overlay } from '@angular/cdk/overlay';
import { Router } from '@angular/router';

import { GtModalComponent } from '@ghosten/utils';

import { merge } from 'rxjs';
import { tap } from 'rxjs/operators';

import { PageConfig } from './types';
import { PageEditComponent } from './page-edit.component';
import { confirm } from '../../../utils';

@Component({
  selector: 'app-modal-pages',
  template: ` <gt-modal
    i18n-modalTitle="Modal Title: Page List"
    modalTitle="页面列表"
    modalSize="xl"
    (cancel)="modalClose.emit()"
    (animationDone)="animationDone.emit()"
  >
    <div class="overflow-auto">
      <table class="table table-bordered table-hover table-striped">
        <thead class="position-sticky bg-body" style="top: -1rem">
          <tr>
            <th class="text-truncate" i18n="Table Column Header: Icon">图标</th>
            <th class="text-truncate" i18n="Table Column Header: Title">标题</th>
            <th class="text-truncate" i18n="Table Column Header: Description">描述</th>
            <th class="text-truncate" i18n="Table Column Header: Type">类型</th>
            <th class="text-truncate" i18n="Table Column Header: Url">路径</th>
            <th class="text-truncate" i18n="Table Column Header: Parent Menu">上级菜单</th>
            <th class="text-truncate" i18n="Table Column Header: Operation">操作</th>
            <th></th>
          </tr>
        </thead>
        <tbody cdkDropList>
          <tr *ngFor="let page of pageList" cdkDrag>
            <td>
              <i class="gt-icon">{{ page.icon }}</i>
            </td>
            <td>{{ page.title }}</td>
            <td>{{ page.description }}</td>
            <td>{{ page.type }}</td>
            <td>{{ page.url }}</td>
            <td>{{ page.parentId }}</td>
            <td class="text-nowrap">
              <button class="btn btn-light btn-sm me-2" i18n="Button: Modify" (click)="editPage(page)">修改</button>
              <button class="btn btn-light btn-sm me-2" i18n="Button: Remove" (click)="deletePage(page.id)">
                删除
              </button>
              <button
                class="btn btn-light btn-sm"
                i18n="Button: Edit"
                *ngIf="page.type === 'Function'"
                (click)="activatePage(page.id)"
              >
                编辑
              </button>
            </td>
            <td cdkDragHandle><i class="gt-icon">list</i></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="d-grid gap-2">
      <button class="btn btn-light" i18n="Button: Add" (click)="addPage()">添加</button>
    </div>
  </gt-modal>`,
})
export class PagesComponent implements OnInit {
  @Output() modalClose = new EventEmitter();
  @Output() animationDone: EventEmitter<any> = new EventEmitter();
  @ViewChild(GtModalComponent, { static: true }) modal: GtModalComponent;
  mode: 'add' | 'view' | 'edit' = 'view';
  pageList: PageConfig[];

  constructor(private http: HttpClient, private overlay: Overlay, private router: Router) {}

  ngOnInit() {
    this.loadPageList();
  }

  loadPageList() {
    this.http.get<any[]>('getPageList').subscribe(data => (this.pageList = data));
  }

  addPage() {
    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      disposeOnNavigation: true,
    });
    const componentRef = overlayRef.attach(new ComponentPortal(PageEditComponent));
    merge(
      componentRef.instance.modalConfirm.pipe(tap(() => this.loadPageList())),
      componentRef.instance.modalClose,
    ).subscribe(() => overlayRef.dispose());
  }

  editPage(page: PageConfig) {
    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      disposeOnNavigation: true,
    });
    const componentRef = overlayRef.attach(new ComponentPortal(PageEditComponent));
    const component = componentRef.instance;
    component.mode = 'modify';
    component.pageID.setValue(page.id);
    component.pageTitle.setValue(page.title);
    component.pageIcon.setValue(page.icon);
    component.pageDescription.setValue(page.description);
    component.pageUrl.setValue(page.url);
    component.pageType.setValue(page.type);
    component.pageType.disable({ emitEvent: true });
    component.pageParentID.setValue(page.parentId);
    merge(component.modalConfirm.pipe(tap(() => this.loadPageList())), component.modalClose).subscribe(() =>
      overlayRef.dispose(),
    );
  }

  async deletePage(id: number) {
    if (await confirm('是否要删除该数据？')) {
      this.http.post('deletePage', { id }).subscribe(() => this.loadPageList());
    }
  }

  activatePage(id: number) {
    this.router.navigate(['edit', id]).catch();
    this.modal.onCancel();
  }
}
