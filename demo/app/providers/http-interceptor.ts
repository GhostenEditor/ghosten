import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

import { GtDatabase } from '@ghosten/database';

import { EMPTY, Observable, catchError, from, take } from "rxjs";
import { map, tap } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';

import { WorkerConnector } from '../worker';

@Injectable()
export class HttpInterceptorAdapter implements HttpInterceptor {
  private readonly isBrowser: boolean;
  private worker = new WorkerConnector();
  private gtDatabase = new GtDatabase();

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.isBrowser) {
      console.info('[HTTP  REQUEST]:%O', req);
      return this.resolveWorkerRequest(req).pipe(
        map(({ data }) => new HttpResponse({ url: req.url, body: data })),
        tap(data => console.info('[HTTP RESPONSE]:%O', data)),
        take(1),
        catchError(error => {
          console.error(error.message);
          throw error;
        }),
      );
    } else {
      return next.handle(req);
      // return of(new HttpResponse({ url: req.url, body: null }));
    }
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
      case 'getHistoryByID':
      case 'saveComponent':
      case 'removeComponent':
        const paramsOrBody =
          req.method.toLocaleLowerCase() === 'get'
            ? Object.fromEntries(new URLSearchParams(req.params.toString()))
            : req.body;
        return this.worker.request(req.url, paramsOrBody);
        // return from(this.gtDatabase.message(req.url, paramsOrBody));
      default:
        return EMPTY;
    }
  }
}
