import { ComponentPortal } from '@angular/cdk/portal';
import { Overlay } from '@angular/cdk/overlay';
import { PROPERTY_EDIT_EVENT } from '@ghosten/editor';
import { Provider } from '@angular/core';

import { DataBinding, GtNode } from '@ghosten/common';

import { take, tap } from 'rxjs/operators';
import { merge } from 'rxjs';

import {
  AccordionItemsComponent,
  DataBindingTemporaryComponent,
  DataSourceComponent,
} from '../modals';
import { ModalActionComponent } from '../modal-action/action-edit.component';

export const propertyEditEvent: Provider = {
  provide: PROPERTY_EDIT_EVENT,
  useFactory:
    (overlay: Overlay) =>
    (event: {
      type: string;
      gtNode: GtNode;
      args: any[];
      cb: (...rest: any[]) => void;
    }) => {
      switch (event.type) {
        case 'expression':
        case 'action': {
          const overlayRef = overlay.create({
            hasBackdrop: true,
            disposeOnNavigation: true,
          });
          const componentRef = overlayRef.attach(
            new ComponentPortal(ModalActionComponent),
          );
          componentRef.instance.script = event.args[0];
          merge(
            componentRef.instance.confirm.pipe(tap(script => event.cb(script))),
            componentRef.instance.cancel,
          )
            .pipe(take(1))
            .subscribe(() => overlayRef.dispose());
          break;
        }
        case 'dataSource': {
          const overlayRef = overlay.create({
            hasBackdrop: true,
            disposeOnNavigation: true,
          });
          const componentRef = overlayRef.attach(
            new ComponentPortal(DataSourceComponent),
          );
          merge(
            componentRef.instance.confirm.pipe(
              tap(result => {
                event.gtNode.dataSource.add(result);
                event.cb();
              }),
            ),
            componentRef.instance.cancel,
          )
            .pipe(take(1))
            .subscribe(() => overlayRef.dispose());
          break;
        }
        case 'property': {
          switch (event.args[0]) {
            case 'bindData':
              {
                const overlayRef = overlay.create({
                  hasBackdrop: true,
                  disposeOnNavigation: true,
                });
                const componentRef = overlayRef.attach(
                  new ComponentPortal(DataBindingTemporaryComponent),
                );
                // componentRef.instance.originalSource =
                //   event.args[2] instanceof DataBinding ? JSON.parse(event.args[2].data) : null;
                componentRef.instance.data =
                  event.args[2] &&
                  (event.args[2] instanceof DataBinding
                    ? event.args[2].data
                    : event.args[2].data);
                merge(
                  componentRef.instance.confirm.pipe(
                    tap(result => {
                      event.cb(new DataBinding(result));
                    }),
                  ),
                  componentRef.instance.cancel,
                )
                  .pipe(take(1))
                  .subscribe(() => overlayRef.dispose());
              }
              break;
            case 'accordionItems':
              const overlayRef = overlay.create({ hasBackdrop: true });
              const componentRef = overlayRef.attach(
                new ComponentPortal(AccordionItemsComponent),
              );
              componentRef.instance.initialValue = event.args[1];
              merge(
                componentRef.instance.confirm.pipe(
                  tap(result => {
                    event.cb(result);
                  }),
                ),
                componentRef.instance.cancel,
              )
                .pipe(take(1))
                .subscribe(() => overlayRef.dispose());
          }
        }
      }
    },
  deps: [Overlay],
  multi: true,
};
