import { Component, EventEmitter, Output } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { HttpClient } from '@angular/common/http';
import { Overlay } from '@angular/cdk/overlay';
import { Router } from '@angular/router';

import { merge, tap } from 'rxjs';
import { take } from 'rxjs/operators';

import { PageEditComponent } from './page-edit.component';
import { PagesComponent } from './pages.component';
import { ToastService } from '../toast/toast.service';

@Component({
  selector: 'page-management-dropdown',
  template: ` <ul class="dropdown-menu position-static d-block shadow">
    <li>
      <button class="dropdown-item" type="button" (click)="addPage()">
        创建页面
      </button>
    </li>
    <li>
      <button class="dropdown-item" type="button" (click)="pageList()">
        页面列表
      </button>
    </li>
    <li>
      <hr class="dropdown-divider" />
    </li>
    <li class="position-relative">
      <button class="dropdown-item" type="button">
        <input
          #file
          type="file"
          class="position-absolute w-100 h-100 opacity-0"
          style="left: 0"
          accept=".gt"
          (change)="import(file)"
        />
        <ng-container i18n="Button: Import">导入</ng-container>
      </button>
    </li>
    <li>
      <button
        class="dropdown-item"
        type="button"
        i18n="Button: Export"
        (click)="export()"
      >
        导出
      </button>
    </li>
    <li>
      <hr class="dropdown-divider" />
    </li>
    <li>
      <button
        class="dropdown-item"
        type="button"
        i18n="Button: Reset"
        (click)="reset()"
      >
        重置
      </button>
    </li>
  </ul>`,
})
export class DropdownComponent {
  @Output() dropdownClick = new EventEmitter();

  constructor(
    private http: HttpClient,
    private toast: ToastService,
    private overlay: Overlay,
    private router: Router,
  ) {}

  reset() {
    this.http.post('deleteDB', null).subscribe(() => {
      this.toast.show({
        type: 'info',
        title: '信息',
        message: '所有数据已清空',
        detail: '5秒后页面将自动刷新',
      });
      setTimeout(() => location.reload(), 5000);
    });
    this.dropdownClick.emit();
  }

  import(target: HTMLInputElement) {
    if (target.files && target.files[0]) {
      this.http.post('importDB', target.files[0]).subscribe(() => {
        this.toast.show({
          type: 'info',
          title: '信息',
          message: '数据导入成功',
          detail: '5秒后页面将自动刷新',
        });
        setTimeout(() => location.reload(), 5000);
      });
    }
    this.dropdownClick.emit();
  }

  export() {
    this.http.get<File>('exportDB').subscribe(data => {
      const a = document.createElement('a');
      a.download = data.name;
      a.href = URL.createObjectURL(data);
      a.click();
    });
    this.dropdownClick.emit();
  }

  pageList() {
    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      disposeOnNavigation: true,
    });
    const componentRef = overlayRef.attach(new ComponentPortal(PagesComponent));
    componentRef.instance.modalClose
      .pipe(take(1))
      .subscribe(() => overlayRef.dispose());
    this.dropdownClick.emit();
  }

  addPage() {
    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      disposeOnNavigation: true,
    });
    const componentRef = overlayRef.attach(
      new ComponentPortal(PageEditComponent),
    );
    merge(
      componentRef.instance.modalConfirm.pipe(
        tap(config => {
          if (config.type === 'Function') {
            this.router.navigate(['edit', config.id]).catch();
          }
        }),
      ),
      componentRef.instance.modalClose,
    )
      .pipe(take(1))
      .subscribe(() => overlayRef.dispose());
    this.dropdownClick.emit();
  }
}
