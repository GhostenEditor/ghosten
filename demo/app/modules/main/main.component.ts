import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  template: ` <div class="d-flex h-100">
    <app-navigation [showSideMenu]="showSideMenu"></app-navigation>
    <div class="p-4 flex-grow-1 h-100 overflow-auto">
      <div
        class="navbar position-fixed bg-body w-100 p-4 z-1 d-lg-none"
        style="top: 0; left: 0;"
      >
        <a href="/" class="navbar-brand me-0 d-flex">
          <img
            src="assets/icons/128.png"
            alt="Ghosten Logo"
            class="rounded"
            style="width: 2rem;"
          />
          <span class="fw-bold mx-3">GHOSTEN</span>
        </a>
        <button
          type="button"
          class="btn btn-sm btn-light rounded-circle"
          (click)="showSideMenu = !showSideMenu"
        >
          <i class="gt-icon">dotted_line</i>
        </button>
      </div>
      <div class="p-5 d-lg-none"></div>
      <router-outlet></router-outlet>
    </div>
  </div>`,
})
export class MainComponent {
  showSideMenu = false;
}
