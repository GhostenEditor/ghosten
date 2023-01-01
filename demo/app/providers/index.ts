import { APP_INITIALIZER, Provider } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { HttpInterceptorAdapter } from './http-interceptor';
import { MainService } from './main.service';
import { getRouterAndMenu } from './getRouterAndMenu';

export const providers: Provider[] = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorAdapter,
    multi: true,
  },
  MainService,
  {
    provide: APP_INITIALIZER,
    useFactory: getRouterAndMenu,
    multi: true,
    deps: [HttpClient, MainService],
  },
];
