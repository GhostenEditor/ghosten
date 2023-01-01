import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, interval, take } from 'rxjs';
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
    // console.info('[HTTP REQUEST]:%O', req);
    const workerRequest = this.resolveWorkerRequest(req);
    if (workerRequest) {
      return workerRequest.pipe(
        // tap(data => console.info('[HTTP RESPONSE]:%O', data)),
        map(body => new HttpResponse({ body })),
        take(1),
      );
    }
    return interval(1000).pipe(
      map(
        () =>
          new HttpResponse({
            body: +(Math.random() * 100).toFixed(0),
          }),
      ),
    );
  }

  resolveWorkerRequest(req: HttpRequest<any>): Observable<any> | null {
    switch (req.url) {
      case 'getLatestConfigByID':
        return this.worker
          .request(
            req.url,
            req.params.keys().reduce<Record<string, any>>((acc, cur) => {
              acc[cur] = req.params.get(cur);
              return acc;
            }, {}),
          )
          .pipe(
            map(data => {
              if (typeof data.config === 'object') {
                data.config = JSON.stringify(data.config);
              }
              return data;
            }),
          );
      case 'getPageList':
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
        return null;
    }
  }
}
