import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EditResovle implements Resolve<any> {
  constructor(private http: HttpClient) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.http.get<any>('getLatestConfigByID', {
      params: { id: route.params.id },
    });
  }
}
