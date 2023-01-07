import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { HttpClient } from '@angular/common/http';
import { Overlay } from '@angular/cdk/overlay';
import { Router } from '@angular/router';

import { merge, tap } from 'rxjs';
import { take } from 'rxjs/operators';

import { PageEditComponent } from '../page-management/page-edit.component';
import { PagesComponent } from '../page-management/pages.component';
import { ToastService } from '../toast/toast.service';

@Component({
  selector: 'app-navbar',
  template: ` <nav class="navbar navbar-expand-lg bg-primary sticky-top">
    <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
        (click)="showLeftSidebar.emit()"
      >
        <i class="gt-icon">list</i>
      </button>
      <a routerLink="/" class="navbar-brand me-0 d-flex align-items-center">
        <img
          src="assets/icons/128.png"
          alt="Ghosten Logo"
          class="rounded"
          style="width: 2rem;"
        />
        <span class="fw-bold mx-1">GHOSTEN</span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
        (click)="showRightSidebar = true"
      >
        <i class="gt-icon">dotted_line</i>
      </button>
      <app-offcanvas
        offCanvasTitle="GHOSTEN"
        position="end"
        theme="primary"
        [show]="showRightSidebar"
        (offCanvasClose)="showRightSidebar = false"
      >
        <ul class="navbar-nav flex-row flex-wrap">
          <li class="nav-item col-6 col-lg-auto">
            <button
              type="button"
              class="btn btn-link nav-link"
              title="创建页面"
              (click)="addPage()"
            >
              <i class="gt-icon">add</i>
              <small class="d-lg-none ms-2">创建页面</small>
            </button>
          </li>
          <li class="nav-item col-6 col-lg-auto">
            <button
              type="button"
              class="btn btn-link nav-link"
              title="页面列表"
              (click)="pageList()"
            >
              <i class="gt-icon">list</i>
              <small class="d-lg-none ms-2">页面列表</small>
            </button>
          </li>
          <!--          <li class="nav-item py-2 col-12 col-lg-auto">
                                                                                                <div class="vr d-none d-lg-flex h-100 mx-lg-2 text-white"></div>
                                                                                              </li>-->
          <li class="nav-item col-6 col-lg-auto">
            <button
              type="button"
              class="btn btn-link nav-link position-relative overflow-hidden"
              title="导入"
            >
              <input
                #file
                type="file"
                class="position-absolute w-100 h-100 opacity-0"
                style="left: 0;top: 0"
                accept=".gt"
                (change)="import(file)"
              />
              <i class="gt-icon">input</i>
              <small class="d-lg-none ms-2">导入</small>
            </button>
          </li>
          <li class="nav-item col-6 col-lg-auto">
            <button
              type="button"
              class="btn btn-link nav-link"
              title="导出"
              (click)="export()"
            >
              <i class="gt-icon">logout</i>
              <small class="d-lg-none ms-2">导出</small>
            </button>
          </li>
          <li class="nav-item py-2 col-12 col-lg-auto">
            <div class="vr d-none d-lg-flex h-100 mx-lg-2 text-white"></div>
            <hr class="d-lg-none text-white-50" />
          </li>
          <li class="nav-item col-6 col-lg-auto">
            <button
              type="button"
              class="btn btn-link nav-link"
              title="重置"
              (click)="reset()"
            >
              <i class="gt-icon">refresh_ccw</i>
              <small class="d-lg-none ms-2">重置</small>
            </button>
          </li>
        </ul>
      </app-offcanvas>
      <div
        *ngIf="showRightSidebar"
        class="offcanvas-backdrop fade show"
        (click)="showRightSidebar = false"
      ></div>
    </div>
  </nav>`,
})
export class NavbarComponent {
  @Input() showSideMenu = false;
  @Output() showLeftSidebar = new EventEmitter();
  showRightSidebar = false;

  constructor(
    private http: HttpClient,
    private toast: ToastService,
    private overlay: Overlay,
    private router: Router,
  ) {}

  reset() {
    if (confirm('是否要清空所有数据？')) {
      this.http.post('deleteDB', null).subscribe(() => {
        this.toast.show({
          type: 'info',
          title: '信息',
          message: '所有数据已清空',
          detail: '5秒后页面将自动刷新',
        });
        setTimeout(() => location.reload(), 5000);
      });
    }
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
  }

  export() {
    let blobSliceStart = 0;
    this.http.get<File>('exportDB').subscribe(data => {
      // console.log(data);
      // data.arrayBuffer().then(res => {
      //   console.log(res);
      //   console.log(JSON.parse(pako.inflate(res, { to: 'string' })));
      // });
      // data
      //   .slice(0, (blobSliceStart += 6))
      //   .text()
      //   .then(text => parseInt(text, 16))
      //   .then(length =>
      //     data.slice(blobSliceStart, (blobSliceStart += length)).arrayBuffer(),
      //   )
      //   .then(data => pako.inflate(data, { to: 'string' }))
      //   .then(data => JSON.parse(data))
      //   .then(({ history }) => {
      //     history.forEach(({ size }: any) => {
      //       data
      //         .slice(blobSliceStart, (blobSliceStart += size))
      //         .arrayBuffer()
      //         // .then(console.log)
      //         .then(data => pako.inflate(data, { to: 'string' }))
      //         // .then(data => JSON.parse(data))
      //         .then(console.log)
      //         .catch(error => {
      //           console.log(error);
      //         });
      //     });
      //   });
      const a = document.createElement('a');
      a.download = data.name;
      a.href = URL.createObjectURL(data);
      a.click();
    });
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
  }
}