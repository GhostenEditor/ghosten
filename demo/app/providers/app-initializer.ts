import { HttpClient } from '@angular/common/http';

import { of, tap } from 'rxjs';

import { MainService } from './main.service';

export function appInitializer(http: HttpClient, mainService: MainService) {
  return () =>
    // http.get<any[]>('getRoutes')
    of([
      {
        title: '首页',
        description: 'Home',
        url: 'home',
        type: 'Function',
        icon: 'save',
        parentId: 'null',
        id: 1,
      },
      {
        title: '表单',
        description: '表单',
        url: 'form',
        type: 'Directory',
        icon: 'form',
        parentId: 'null',
        id: 2,
      },
      {
        id: 3,
        title: '表单控件',
        description: '无',
        url: 'control',
        icon: 'input',
        parentId: 2,
        type: 'Function',
      },
      {
        title: '组件',
        description: '组件',
        url: 'components',
        type: 'Directory',
        icon: 'toys',
        parentId: 'null',
        id: 4,
      },
      {
        title: '仪表盘',
        description: '仪表盘',
        url: 'gauge',
        type: 'Function',
        icon: 'gauge',
        parentId: 4,
        id: 5,
      },
      {
        title: '水位球',
        description: '水位球',
        url: 'water',
        type: 'Function',
        icon: 'water',
        parentId: 4,
        id: 6,
      },
      {
        title: '电池',
        description: '电池',
        url: 'battery',
        type: 'Function',
        icon: 'battery',
        parentId: 4,
        id: 7,
      },
      {
        title: 'Checks & Radios',
        description: 'Checks & Radios',
        url: 'checks-radios',
        type: 'Function',
        icon: 'radio',
        parentId: 2,
        id: 8,
      },
      {
        title: '卡片',
        description: '卡片',
        url: 'card',
        type: 'Function',
        icon: 'panel',
        parentId: 4,
        id: 9,
      },
      {
        id: 10,
        title: 'Navs & Tabs',
        description: 'Navs & Tabs',
        url: 'navs-tabs',
        icon: 'tab',
        parentId: 4,
        type: 'Function',
      },
      {
        title: 'List Group',
        description: 'List Group',
        url: 'list-group',
        type: 'Function',
        icon: 'list',
        parentId: 4,
        id: 11,
      },
    ]).pipe(tap(data => (mainService.rawMenus = data)));
}
