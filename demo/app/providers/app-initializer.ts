import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs';

import { MainService } from './main.service';

export function appInitializer(http: HttpClient, mainService: MainService) {
  return () => http.get<any[]>('getRoutes').pipe(tap(data => (mainService.rawMenus = data)));
}
