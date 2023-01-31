import { APP_INITIALIZER, ErrorHandler, Provider } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { HttpInterceptorAdapter } from './http-interceptor';
import { MainService } from './main.service';
import { ToastService } from '../modules/toast/toast.service';
import { appInitializer } from './app-initializer';

export const providers: Provider[] = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorAdapter,
    multi: true,
  },
  MainService,
  {
    provide: APP_INITIALIZER,
    useFactory: appInitializer,
    multi: true,
    deps: [HttpClient, MainService],
  },
  {
    provide: ErrorHandler,
    useClass: class implements ErrorHandler {
      constructor(private toast: ToastService) {}

      handleError(error: any) {
        console.error(error);
        this.toast.show({
          type: 'danger',
          message: error,
          duration: false,
        });
      }
    },
    deps: [ToastService],
  },
];
