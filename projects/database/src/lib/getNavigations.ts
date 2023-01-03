import { MenuItem, MessageEvent } from './types';
import { resolveRequest } from './resolve';

export function getNavigations(db: IDBDatabase): Promise<MessageEvent> {
  const transaction = db.transaction('CONFIG', 'readonly');
  const objectStore = transaction.objectStore('CONFIG');
  return resolveRequest<any[]>(objectStore.getAll()).then(request => {
    const data = request.result;
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
    // mainService.menus = items.filter(v => !v.parentId);

    return {
      type: 'log',
      subType: 'getNavigations',
      message: '数据查询成功',
      data: items.filter(v => !v.parentId),
    };
  });
}
