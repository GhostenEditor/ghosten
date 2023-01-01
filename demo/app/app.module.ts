import { BidiModule } from '@angular/cdk/bidi';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';
import { ToastModule } from './modules/toast/toast.module';
import { environment } from '../environments/environment';
import { providers } from './providers';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    BidiModule,
    HttpClientModule,
    ToastModule,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () =>
          import('./modules/main/main.module').then(m => m.MainModule),
      },
      {
        path: 'edit',
        loadChildren: () =>
          import('./modules/gt/gt.module').then(m => m.GtModule),
      },
      { path: '**', redirectTo: '404', pathMatch: 'full' },
    ]),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:3000',
    }),
    RouterModule,
  ],
  providers,
  declarations: [AppComponent],
})
export class AppModule {}
