// import { BrowserModule } from '@angular/platform-browser';
import { NgModule, PLATFORM_ID } from '@angular/core';
// import { RouterModule } from '@angular/router';
import { ServerModule } from '@angular/platform-server';

// import { AppShellComponent } from './app-shell/app-shell.component';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

// @Component({
//   selector: 'app-root',
//   template: '<router-outlet></router-outlet>',
// })
// export class AppComponent {}

@NgModule({
  imports: [
    // BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppModule,
    ServerModule,
    // RouterModule.forRoot([{ path: 'shell', component: AppShellComponent }]),
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: PLATFORM_ID,
      useValue: 'serverApp',
    },
  ],
  // declarations: [AppShellComponent],
  // exports: [AppShellComponent],
})
export class AppServerModule {}
