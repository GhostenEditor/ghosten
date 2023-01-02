import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { EMPTY, Observable, take } from 'rxjs';
import { map } from 'rxjs/operators';

import { ToastService } from '../modules/toast/toast.service';
import { WorkerConnector } from '../worker';

@Injectable()
export class HttpInterceptorAdapter implements HttpInterceptor {
  private worker = new WorkerConnector();

  constructor(private toast: ToastService) {
    this.worker.message.subscribe(
      ({ data: { type, subType, message, data } }) => {
        switch (type) {
          case 'log':
            // this.toast.show({ type: '信息', message, detail: subType });
            break;
          case 'error':
            console.error(data);
        }
      },
    );
    this.worker.error.subscribe(err => {
      console.error(err);
    });
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    // console.info("[HTTP REQUEST]:%O", req);
    return this.resolveWorkerRequest(req).pipe(
      // tap(data => console.info('[HTTP RESPONSE]:%O', data)),
      map(body => new HttpResponse({ body })),
      take(1),
    );
  }

  resolveWorkerRequest(req: HttpRequest<any>): Observable<any> {
    switch (req.url) {
      case 'getLatestConfigByID':
      case 'getPageList':
      case 'getNavigations':
      case 'getRoutes':
      case 'addPage':
      case 'editPage':
      case 'deletePage':
      case 'activatePage':
      case 'save':
      case 'getActivatedPageID':
      case 'deleteDB':
      case 'importDB':
      case 'exportDB':
        if (req.method.toLocaleLowerCase() === 'post') {
          return this.worker.request(req.url, req.body);
        } else {
          return this.worker.request(
            req.url,
            req.params.keys().reduce<Record<string, any>>((acc, cur) => {
              acc[cur] = req.params.get(cur);
              return acc;
            }, {}),
          );
        }
      default:
        return EMPTY;
    }
  }
}
