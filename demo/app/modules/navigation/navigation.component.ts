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
  items: MenuItem[] = [
    {
      id: 1,
      label: '首页',
      path: 'home',
      icon: 'save',
      directory: false,
      children: [],
      url: 'home',
    },
    {
      id: 2,
      label: '表单',
      path: 'form',
      icon: 'form',
      directory: true,
      children: [
        {
          id: 3,
          label: '表单控件',
          path: 'control',
          icon: 'input',
          directory: false,
          children: [],
          url: 'form/control',
        },
        {
          id: 8,
          label: 'Checks & Radios',
          path: 'checks-radios',
          icon: 'radio',
          directory: false,
          children: [],
          url: 'form/checks-radios',
        },
      ],
      url: 'form',
    },
    {
      id: 4,
      label: '组件',
      path: 'components',
      icon: 'toys',
      directory: true,
      children: [
        {
          id: 5,
          label: '仪表盘',
          path: 'gauge',
          icon: 'gauge',
          directory: false,
          children: [],
          url: 'components/gauge',
        },
        {
          id: 6,
          label: '水位球',
          path: 'water',
          icon: 'water',
          directory: false,
          children: [],
          url: 'components/water',
        },
        {
          id: 7,
          label: '电池',
          path: 'battery',
          icon: 'battery',
          directory: false,
          children: [],
          url: 'components/battery',
        },
        {
          id: 9,
          label: '卡片',
          path: 'card',
          icon: 'panel',
          directory: false,
          children: [],
          url: 'components/card',
        },
        {
          id: 10,
          label: 'Navs & Tabs',
          path: 'navs-tabs',
          icon: 'tab',
          directory: false,
          children: [],
          url: 'components/navs-tabs',
        },
        {
          id: 11,
          label: 'List Group',
          path: 'list-group',
          icon: 'list',
          directory: false,
          children: [],
          url: 'components/list-group',
        },
      ],
      url: 'components',
    },
  ];

  constructor(private http: HttpClient) {
    // this.http.get<MenuItem[]>('getNavigations').subscribe(data => (this.items = data));
  }
}
