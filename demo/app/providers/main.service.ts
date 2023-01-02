import { Injectable, Type } from '@angular/core';
import { ResolveData, Route } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class MainService {
  rawMenus: any[] = [];

  generateRoutes(component: Type<any>, resolve: ResolveData): Route[] {
    const menuMap = new Map();
    const items: (Route & { id: number; parentId: number | null })[] =
      this.rawMenus.map(menu => {
        const item: Route & { id: number; parentId: number | null } = {
          id: menu.id,
          path: menu.pageUrl,
          parentId:
            typeof menu.pageParentID === 'undefined' ||
            menu.pageParentID === null
              ? null
              : +menu.pageParentID,
          component,
          data: {
            id: menu.id,
          },
          children: [],
          resolve: { data: resolve },
        };
        menuMap.set(item.id, item);
        return item;
      });
    items.forEach(menu => {
      if (menu.parentId) {
        const parentMenu = menuMap.get(menu.parentId);
        if (parentMenu) {
          parentMenu.children.push(menu);
        }
      }
    });
    items.forEach(menu => {
      if (menu.children!.length) {
        delete menu.component;
        delete menu.resolve;
      }
    });
    return items.filter(v => !v.parentId);
  }
}
