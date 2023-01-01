import { ComponentPortal } from '@angular/cdk/portal';
import { Overlay } from '@angular/cdk/overlay';
import { Provider } from '@angular/core';

import { GtEdit, TOP_BAR_BUTTONS } from '@ghosten/editor';

import { PagesComponent } from '../modals';

export const topBarButtons: Provider = {
  provide: TOP_BAR_BUTTONS,
  useFactory: (gt: GtEdit, overlay: Overlay) => [
    // {
    //   title: $localize`:Top Bar Button\: Template:模板`,
    //   icon: 'bi bi-file-earmark-spreadsheet',
    //   onclick: () => {
    //     // gt;
    //     // gt.destroy();
    //     // gt.init();
    //   },
    // },
    {
      title: $localize`:Top Bar Button\: Undo:撤销`,
      icon: 'rotate_ccw',
      get disabled() {
        return !gt.history.get().length;
      },
      onclick: () => {
        gt.undo();
      },
    },
    {
      title: $localize`:Top Bar Button\: Redo:重做`,
      icon: 'rotate_cw',
      get disabled() {
        return !gt.undoHistory.get().length;
      },
      onclick: () => {
        gt.redo();
      },
    },
    {
      title: $localize`:Top Bar Button\: Reference Line:参考线`,
      icon: 'dashed_rect',
      get active() {
        return gt.showReferenceLine;
      },
      onclick() {
        gt.showReferenceLine = !gt.showReferenceLine;
      },
    },
    {
      title: $localize`:Top Bar Button\: Add Data Source:添加数据源`,
      icon: 'bind',
      onclick: () => {
        /*          dialog.openFromComponent(ModalGlobalDatasourceComponent, {
                      disableClose: false,
                      position: {
                        top: '50px'
                      },
                      data: {
                        mode: 'global'
                      }
                    }).afterClosed()
                      .pipe(take(1))
                      .subscribe();*/
      },
    },
    {
      title: $localize`:Top Bar Button\: Preview:预览`,
      icon: 'preview',
      onclick: () => {
        gt.log.next({
          type: 'preview',
          message: `正在预览 data 为 %o 的页面`,
          data: gt.export(),
        });
      },
    },
    {
      title: $localize`:Top Bar Button\: Save:保存`,
      icon: 'save',
      onclick: () => {
        gt.log.next({
          type: 'save',
          message: '保存',
          data: gt.exportString(),
        });
      },
    },
    {
      title: $localize`:Top Bar Button\: List:页面列表`,
      icon: 'list',
      onclick: () => {
        const overlayRef = overlay.create({
          hasBackdrop: true,
        });
        const componentRef = overlayRef.attach(
          new ComponentPortal(PagesComponent),
        );
        componentRef.instance.modalClose.subscribe(() => overlayRef.dispose());
      },
    },
  ],
  deps: [GtEdit, Overlay],
};
