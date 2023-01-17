import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable()
export class EditResolve implements Resolve<any> {
  constructor(private http: HttpClient, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.http
      .get<any>('getLatestConfigByID', {
        params: { id: route.params.id },
      })
      // .pipe(
      //   tap(data => {
      //     if (!data) this.router.navigate(['404']).catch();
      //   }),
      // );
  }
}
