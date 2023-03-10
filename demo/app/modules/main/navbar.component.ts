import { Component, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ComponentPortal } from '@angular/cdk/portal';
import { HttpClient } from '@angular/common/http';
import { Overlay } from '@angular/cdk/overlay';
import { Router } from '@angular/router';

import { merge, switchMap, tap } from 'rxjs';
import { take } from 'rxjs/operators';

import {
  DELETE_DB_MESSAGE,
  IMPORT_DB_MESSAGE,
  REFRESH_AFTER_5_SECONDS,
  RESET_CONFIRM_MESSAGE,
  TOAST_INFO_TITLE,
} from '../../message';
import { PageEditComponent } from '../page-management/page-edit.component';
import { PagesComponent } from '../page-management/pages.component';
import { SettingsComponent } from './settings.component';
import { ToastService } from '../toast/toast.service';
import { confirm } from '../../../utils';

@Component({
  selector: 'app-navbar',
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
  template: ` <nav
    class="navbar navbar-expand-lg bg-primary"
    data-bs-theme="dark"
    style="position: sticky;top: 0;z-index: 1000; --bs-emphasis-color-rgb: 248,249,250;"
  >
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
          src="assets/icons/192.png"
          alt="Ghosten Logo"
          width="32"
          height="32"
          class="rounded"
          style="width: 2rem; height: 2rem;"
        />
        <span class="fw-bold mx-1">GHOSTEN</span>
      </a>
      <app-offcanvas offCanvasTitle="GHOSTEN" position="end" theme="primary" [(show)]="showRightSidebar">
        <ul class="navbar-nav flex-row flex-wrap">
          <li class="nav-item col-6 col-lg-auto">
            <button
              type="button"
              class="btn btn-link nav-link"
              i18n-title="Button: Backward"
              title="??????"
              (click)="location.back()"
            >
              <i class="gt-icon">chevron_left</i>
              <small class="d-lg-none ms-2" i18n="Button: Backward">??????</small>
            </button>
          </li>
          <li class="nav-item col-6 col-lg-auto">
            <button
              type="button"
              class="btn btn-link nav-link"
              i18n-title="Button: Forward"
              title="??????"
              (click)="location.forward()"
            >
              <i class="gt-icon">chevron_right</i>
              <small class="d-lg-none ms-2" i18n="Button: Foreward">??????</small>
            </button>
          </li>
          <li class="nav-item col-6 col-lg-auto">
            <button
              type="button"
              class="btn btn-link nav-link"
              i18n-title="Button: Refresh"
              title="??????"
              (click)="reload()"
            >
              <i class="gt-icon">refresh_ccw</i>
              <small class="d-lg-none ms-2" i18n="Button: Refresh">??????</small>
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
              i18n-title="Button: Add Page"
              title="????????????"
              (click)="addPage()"
            >
              <i class="gt-icon">add</i>
              <small class="d-lg-none ms-2" i18n="Button: Add Page">????????????</small>
            </button>
          </li>
          <li class="nav-item col-6 col-lg-auto">
            <button
              type="button"
              class="btn btn-link nav-link"
              i18n-title="Button: Page List"
              title="????????????"
              (click)="pageList()"
            >
              <i class="gt-icon">list</i>
              <small class="d-lg-none ms-2" i18n="Button: Page List">????????????</small>
            </button>
          </li>
          <li class="nav-item col-6 col-lg-auto">
            <button
              type="button"
              class="btn btn-link nav-link position-relative overflow-hidden"
              i18n-title="Button: Import"
              title="??????"
            >
              <label
                ><input
                  #file
                  type="file"
                  class="position-absolute w-100 h-100 opacity-0"
                  style="left: 0;top: 0"
                  accept=".gt"
                  (change)="import(file)"
              /></label>
              <i class="gt-icon">upload</i>
              <small class="d-lg-none ms-2" i18n="Button: Import">??????</small>
            </button>
          </li>
          <li class="nav-item col-6 col-lg-auto">
            <button
              type="button"
              class="btn btn-link nav-link"
              i18n-title="Button: Export"
              title="??????"
              (click)="export()"
            >
              <i class="gt-icon">download</i>
              <small class="d-lg-none ms-2" i18n="Button: Export">??????</small>
            </button>
          </li>
          <li class="nav-item col-6 col-lg-auto">
            <button
              type="button"
              class="btn btn-link nav-link"
              i18n-title="Button: Reset"
              title="??????"
              (click)="reset()"
            >
              <i class="gt-icon">refresh_ccw</i>
              <small class="d-lg-none ms-2" i18n="Button: Reset">??????</small>
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
              i18n-title="Button: Settings"
              title="??????"
              (click)="settings()"
            >
              <i class="gt-icon">tools</i>
              <small class="d-lg-none ms-2" i18n="Button: Settings">??????</small>
            </button>
          </li>
        </ul>
      </app-offcanvas>
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
    public location: Location,
    private renderer: Renderer2,
  ) {}

  async reset() {
    if (await confirm(RESET_CONFIRM_MESSAGE)) {
      this.http.post('deleteDB', null).subscribe(() => {
        this.toast.show({
          type: 'primary',
          title: TOAST_INFO_TITLE,
          message: DELETE_DB_MESSAGE,
          detail: REFRESH_AFTER_5_SECONDS,
        });
        setTimeout(() => this.reload(), 5000);
      });
    }
  }

  import(target: HTMLInputElement) {
    if (target.files && target.files[0]) {
      this.http.post('importDB', target.files[0]).subscribe(() => {
        this.toast.show({
          type: 'primary',
          title: TOAST_INFO_TITLE,
          message: IMPORT_DB_MESSAGE,
          detail: REFRESH_AFTER_5_SECONDS,
        });
        setTimeout(() => this.reload(), 5000);
      });
    }
  }

  export() {
    this.http.get<File>('exportDB').subscribe(data => {
      const a = this.renderer.createElement('a');
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
      .pipe(
        tap(() => overlayRef.detachBackdrop()),
        switchMap(() => componentRef.instance.animationDone),
        take(1),
      )
      .subscribe(() => overlayRef.dispose());
  }

  addPage() {
    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      disposeOnNavigation: true,
    });
    const componentRef = overlayRef.attach(new ComponentPortal(PageEditComponent));
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
      .pipe(
        tap(() => overlayRef.detachBackdrop()),
        switchMap(() => componentRef.instance.animationDone),
        take(1),
      )
      .subscribe(() => overlayRef.dispose());
  }

  reload() {
    location.reload();
  }

  settings() {
    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      disposeOnNavigation: true,
    });
    const componentRef = overlayRef.attach(new ComponentPortal(SettingsComponent));
    merge(componentRef.instance.modalConfirm, componentRef.instance.modalCancel)
      .pipe(
        tap(() => overlayRef.detachBackdrop()),
        switchMap(() => componentRef.instance.animationDone),
        take(1),
      )
      .subscribe(() => overlayRef.dispose());
  }
}
