import { APP_INITIALIZER, ErrorHandler, Provider } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { HttpInterceptorAdapter } from './http-interceptor';
import { MainService } from './main.service';
import { appInitializer } from './app-initializer';
import { log } from '../../utils';
import { ToastService } from '../modules/toast/toast.service';

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
        this.toast.show({
          type: 'danger',
          message: error,
          duration: false,
        });
        log('error', error);
      }
    },
    deps: [ToastService],
  },
];
