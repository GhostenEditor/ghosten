import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MenuItem } from '@ghosten/database';

@Component({
  selector: 'app-navigation',
  template: `
    <div *ngIf="items && !items.length" class="vh-100 font-monospace text-center p-3 oblique-stripes rounded border">
      There is no menu now! Try to do something.
    </div>
    <app-navigation-item
      [class.show]="showSideMenu"
      [items]="items"
      style="overflow: auto!important;"
    ></app-navigation-item>
  `,
})
export class NavigationComponent {
  @Input() showSideMenu = false;
  items: MenuItem[];

  constructor(private http: HttpClient) {
    this.http.get<MenuItem[]>('getNavigations').subscribe(data => (this.items = data));
  }
}
