import { GT_CONTEXTMENU, GtContextMenuType, GtEdit } from '@ghosten/editor';
import { Overlay } from '@angular/cdk/overlay';
import { Provider } from '@angular/core';

import { ContextMenu } from '../contextmenu/contextMenu';
import { getContextMenus } from '../getContextMenus';

export const gtContextmenu: Provider = {
  provide: GT_CONTEXTMENU,
  useFactory:
    (contextMenu: ContextMenu, overlay: Overlay) =>
    (gt: GtEdit, type: GtContextMenuType, target: any, event: MouseEvent) => {
      switch (type) {
        case 'gtNode':
          const menus = getContextMenus(gt, target, overlay);
          contextMenu.create(event, menus);
          break;
        case 'customElement':
          contextMenu.create(event, [
            {
              label: $localize`:Context Menu\: Modify:修改`,
            },
            {
              label: $localize`:Context Menu\: Remove:删除`,
              onclick() {
                gt.customComponent.splice(
                  gt.customComponent.indexOf(target),
                  1,
                );
              },
            },
          ]);
      }
    },
  deps: [ContextMenu, Overlay],
};
