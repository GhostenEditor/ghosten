import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ServerModule } from '@angular/platform-server';

import { AppShellComponent } from './app-shell/app-shell.component';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {}

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    ServerModule,
    RouterModule.forRoot([{ path: 'shell', component: AppShellComponent }]),
  ],
  bootstrap: [AppComponent],
  declarations: [AppShellComponent, AppComponent],
  exports: [AppShellComponent],
})
export class AppServerModule {}
