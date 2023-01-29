import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  template: ` <app-navbar (showLeftSidebar)="showSideMenu = true"></app-navbar>
    <div class="container pt-4">
      <div class="row">
        <app-offcanvas class="col-2" position="start" offCanvasTitle="Navigation" [(show)]="showSideMenu">
          <app-navigation class="w-100" [showSideMenu]="showSideMenu"></app-navigation>
        </app-offcanvas>
        <div class="col-lg-10 px-4 min-vh-100">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
    <app-footer></app-footer>`,
})
export class MainComponent {
  showSideMenu = false;
}
