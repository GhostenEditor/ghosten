import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs';

import { MainService } from './main.service';
import { MenuItem } from '../modules/main/navigation/types';

export function getRouterAndMenu(http: HttpClient, mainService: MainService) {
  return () =>
    http.get<any[]>('getPageList').pipe(
      tap(data => {
        const menuMap = new Map();
        const items: MenuItem[] = data.map(menu => {
          const item: MenuItem = {
            id: menu.id,
            label: menu.pageTitle,
            path: menu.pageUrl,
            parentId:
              typeof menu.pageParentID === 'undefined'
                ? undefined
                : +menu.pageParentID,
            children: [],
          };
          menuMap.set(item.id, item);
          return item;
        });
        items.forEach(menu => {
          if (menu.parentId) {
            const parentMenu = menuMap.get(menu.parentId);
            if (parentMenu) {
              parentMenu.children.push(menu);
              menu.parent = parentMenu;
            }
          }
        });
        items.forEach(item => {
          const paths = [];
          let loopItem: MenuItem | undefined = item;
          while (loopItem) {
            paths.unshift(loopItem.path);
            loopItem = loopItem.parent;
          }
          item.url = paths.join('/');
        });
        mainService.rawMenus = data;
        mainService.menus = items.filter(v => !v.parentId);
      }),
    );
}
