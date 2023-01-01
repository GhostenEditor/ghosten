import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class TemplateResolve implements Resolve<any> {
  constructor(private http: HttpClient) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.http
      .get<any>('getLatestConfigByID', { params: { id: route.data.id } })
      .pipe(map(data => (data ? data.config : null)));
  }
}
