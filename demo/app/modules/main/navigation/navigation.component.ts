import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Overlay } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

import { MenuItem } from '@ghosten/database';

import { merge } from 'rxjs';
import { take } from 'rxjs/operators';

import { ToastService } from '../../toast/toast.service';

@Component({
  selector: 'app-navigation',
  template: ` <div
      class="offcanvas-lg offcanvas-start p-3 h-100 d-flex flex-column bg-body"
      [class.show]="showSideMenu"
      style="width: 20rem;"
    >
      <div class="navbar">
        <a href="/" class="navbar-brand me-0 d-flex">
          <img
            src="assets/icons/128.png"
            alt="Ghost Logo"
            class="rounded"
            style="width: 2rem;"
          />
          <span class="fw-bold mx-3">GHOSTEN</span>
        </a>
        <button
          #dropdownButton
          type="button"
          class="btn btn-sm btn-light rounded-circle"
          (click)="showDropdown(templateRef)"
        >
          <i class="gt-icon">dotted_line</i>
        </button>
      </div>
      <hr />
      <app-navigation-item
        [items]="items | async"
        class="d-block flex-grow-1"
        style="overflow: auto!important;"
      ></app-navigation-item>
      <hr />
      <ul class="list-unstyled m-0">
        <li class="mb-1">
          <a
            routerLink="edit"
            routerLinkActive="active"
            class="btn btn-text d-flex"
            ><i class="gt-icon me-2">edit</i>
            <ng-container i18n="Button: Modify">编辑</ng-container>
          </a>
        </li>
      </ul>
    </div>
    <ng-template #templateRef>
      <ul class="dropdown-menu position-static d-block shadow">
        <li class="position-relative">
          <button class="dropdown-item" type="button">
            <input
              #file
              type="file"
              class="position-absolute w-100 h-100 opacity-0"
              style="left: 0"
              accept=".ghost"
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
      </ul>
    </ng-template>`,
})
export class NavigationComponent {
  @Input() showSideMenu = false;
  @ViewChild('dropdownButton') dropdownButton: ElementRef;
  items = this.http.get<MenuItem[]>('getNavigations');
  dropdownClick = new EventEmitter();

  constructor(
    private overlay: Overlay,
    private viewContainerRef: ViewContainerRef,
    private http: HttpClient,
    private toast: ToastService,
  ) {}

  showDropdown(templateRef: TemplateRef<any>) {
    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      backdropClass: '',
      positionStrategy: this.overlay
        .position()
        .flexibleConnectedTo(this.dropdownButton)
        .withPositions([
          {
            originX: 'end',
            originY: 'bottom',
            overlayX: 'end',
            overlayY: 'top',
            offsetY: 8,
          },
        ]),
    });
    overlayRef.attach(new TemplatePortal(templateRef, this.viewContainerRef));
    merge(overlayRef.backdropClick(), this.dropdownClick)
      .pipe(take(1))
      .subscribe(() => overlayRef.dispose());
  }

  reset() {
    this.http.post('deleteDB', null).subscribe(() => {
      this.toast.show({
        type: '信息',
        message: '所有数据已清空',
        detail: '5秒后页面将自动刷新',
      });
      setTimeout(() => location.reload(), 5000);
    });
    this.dropdownClick.emit();
  }

  async import(target: HTMLInputElement) {
    if (target.files && target.files[0]) {
      this.http
        .post('importDB', target.files[0], { reportProgress: true })
        .subscribe(() => {
          this.toast.show({
            type: '信息',
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
}
