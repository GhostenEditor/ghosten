import { MenuItem, MessageEvent } from './types';
import { resolveTransaction } from './resolve';

export function getNavigations(db: IDBDatabase): Promise<MessageEvent> {
  const transaction = db.transaction('CONFIG', 'readonly');
  const objectStore = transaction.objectStore('CONFIG');
  const request = objectStore.getAll();
  return resolveTransaction(transaction).then(() => {
    const data = request.result;
    const menuMap = new Map();
    const items: (MenuItem & {
      parentId?: number;
      parent?: MenuItem;
    })[] = data.map(menu => {
      const item: MenuItem & {
        parentId?: number;
        parent?: MenuItem;
      } = {
        id: menu.id,
        label: menu.title,
        path: menu.url,
        icon: menu.icon,
        directory: menu.type === 'Directory',
        parentId: menu.parentId === 'null' ? undefined : +menu.parentId,
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
      let loopItem: typeof item | undefined = item;
      while (loopItem) {
        paths.unshift(loopItem.path);
        loopItem = loopItem.parent;
      }
      item.url = paths.join('/');
    });
    // mainService.menus = items.filter(v => !v.parentId);
    items.forEach(item => {
      delete item.parent;
    });
    return {
      type: 'log',
      subType: 'getNavigations',
      message: '数据查询成功',
      data: items.filter(v => !v.parentId),
    };
  });
}
