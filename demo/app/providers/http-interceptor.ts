import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { GtDatabase } from '@ghosten/database';

import { EMPTY, Observable, catchError, from, take } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { WorkerConnector } from '../worker';

@Injectable()
export class HttpInterceptorAdapter implements HttpInterceptor {
  private worker = new WorkerConnector();
  private gtDatabase = new GtDatabase();

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    console.info('[HTTP REQUEST]:%O', req);
    return this.resolveWorkerRequest(req).pipe(
      map(({ data }) => new HttpResponse({ url: req.url, body: data })),
      tap(data => console.info('[HTTP RESPONSE]:%O', data)),
      take(1),
      catchError(error => {
        console.error(error.message);
        throw error;
      }),
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
