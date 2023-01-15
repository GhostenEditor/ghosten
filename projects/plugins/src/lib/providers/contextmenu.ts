import { ComponentPortal } from '@angular/cdk/portal';
import { Overlay } from '@angular/cdk/overlay';
import { Provider } from '@angular/core';

import { GT_CONTEXTMENU, GtEdit } from '@ghosten/editor';
import { GtNode } from '@ghosten/common';

import { take, tap } from 'rxjs/operators';
import { merge } from 'rxjs';

import { CreateTableComponent } from '../create-table.component';

export const gtContextmenu: Provider = {
  provide: GT_CONTEXTMENU,
  useFactory: (overlay: Overlay) => (gt: GtEdit, gtNode: GtNode) =>
    [
      {
        label: $localize`:Context Menu\: Move Left:向前移动`,
        desc: '⌘←',
        disabled: !(gtNode.parent && gtNode.parent.children.indexOf(gtNode) > 0),
        onclick: () => gt.moveNode(gtNode, gtNode.parent!, gtNode.parent!.children.indexOf(gtNode) - 1),
      },
      {
        label: $localize`:Context Menu\: Move Right:向后移动`,
        desc: '⌘→',
        disabled: !(gtNode.parent && gtNode.parent.children.indexOf(gtNode) < gtNode.parent.children.length - 1),
        onclick: () => gt.moveNode(gtNode, gtNode.parent!, gtNode.parent!.children.indexOf(gtNode) + 1),
      },
      {
        label: $localize`:Context Menu\: Move Up:向上移动`,
        desc: '⌘↑️',
        disabled: !(gtNode.parent && gtNode.parent.parent),
        onclick: () =>
          gt.moveNode(gtNode, gtNode.parent!.parent!, gtNode.parent!.parent!.children.indexOf(gtNode.parent!) + 1),
      },
      {
        divider: true,
      },
      {
        label: $localize`:Context Menu\: Copy:复制`,
        desc: '⌘C',
        disabled: !gt.selected.length || !gt.selected[0].core.canCopy,
        onclick: () => gt.copyNode(),
      },
      {
        label: $localize`:Context Menu\: Paste:粘贴`,
        desc: '⌘V',
        disabled: gt.selected.length !== 1 || !gt.copiedNode.length,
        onclick: () => {
          gt.pasteNode(gtNode);
        },
      },
      {
        label: $localize`:Context Menu\: Cut:剪切`,
        desc: 'Todo',
        disabled: true,
        // disabled: !gt.selected.length || !gt.selected[0].core.canCut,
      },
      {
        label: $localize`:Context Menu\: Remove:删除`,
        desc: 'DEL',
        disabled: !gt.selected.length || !gt.selected[0].core.canDelete,
        onclick: () => gt.removeNode(),
      },
      { divider: true },
      {
        label: $localize`:Context Menu\: Copy Style:复制样式`,
        desc: '⌘⇧C',
        disabled: gt.selected.length !== 1 || !gt.selected[0].core.canCopyStyle,
        onclick: () => gt.copyStyle(),
      },
      {
        label: $localize`:Context Menu\: Paste Style:粘贴样式`,
        desc: '⌘⇧V',
        disabled: !gt.copiedStyle || !gt.selected.length,
        onclick: () => gt.pasteStyle(),
      },
      { divider: true },
      {
        label: $localize`:Context Menu\: Generate Grid:生成网格`,
        disabled: gt.selected.filter(({ core }) => core.canHasChild).length === 0,
        onclick: (_: any, event: MouseEvent) => {
          const overlayRef = overlay.create({
            hasBackdrop: true,
            backdropClass: '',
            disposeOnNavigation: true,
            positionStrategy: overlay
              .position()
              .flexibleConnectedTo({
                x: event.clientX,
                y: event.clientY,
              })
              .withPositions([
                {
                  originX: 'start',
                  originY: 'top',
                  overlayX: 'start',
                  overlayY: 'top',
                },
              ]),
          });
          const componentPortal = new ComponentPortal(CreateTableComponent);
          const component = overlayRef.attach(componentPortal);
          merge(
            overlayRef.backdropClick(),
            component.instance.modalClose.pipe(
              tap(([row, column]) => {
                gt.selected.forEach((gtNode: GtNode) => {
                  gt.addNode('division', gtNode, -1, {
                    type: 'division',
                    style: {
                      // width: '100%'
                    },
                    children: new Array(row + 1).fill({
                      type: 'division',
                      style: {
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100%',
                      },
                      children: new Array(column + 1).fill({
                        type: 'division',
                        style: {
                          // flexDirection: 'row',
                          width: 100 / column + '%',
                        },
                      }),
                    }),
                  });
                });
              }),
            ),
          )
            .pipe(
              take(1),
              tap(() => overlayRef.dispose()),
            )
            .subscribe();
        },
      },
    ],
  deps: [Overlay],
};
