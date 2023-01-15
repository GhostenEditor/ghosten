import { ComponentPortal } from '@angular/cdk/portal';
import { Overlay } from '@angular/cdk/overlay';
import { Provider } from '@angular/core';

import { ChangeActionEndEvent, EditExpressionEndEvent, GT_EVENTS_LISTENER, GtEventTarget } from '@ghosten/editor';

import { take, tap } from 'rxjs/operators';
import { merge } from 'rxjs';

import { ModalActionComponent } from '../modals';

export const eventsListener: Provider = {
  provide: GT_EVENTS_LISTENER,
  useFactory: (overlay: Overlay) => (target: GtEventTarget) => {
    target.addEventListener('changeactionstart', event => {
      event.preventDefault();
      const overlayRef = overlay.create({
        hasBackdrop: true,
        disposeOnNavigation: true,
      });
      const componentRef = overlayRef.attach(new ComponentPortal(ModalActionComponent));
      componentRef.instance.script = event.action.script;
      merge(
        componentRef.instance.confirm.pipe(
          tap(script => {
            target.dispatchEvent(new ChangeActionEndEvent(event.action, script));
          }),
        ),
        componentRef.instance.cancel,
      )
        .pipe(take(1))
        .subscribe(() => overlayRef.dispose());
    });
    target.addEventListener('editexpressionstart', event => {
      event.preventDefault();
      const overlayRef = overlay.create({
        hasBackdrop: true,
        disposeOnNavigation: true,
      });
      const componentRef = overlayRef.attach(new ComponentPortal(ModalActionComponent));
      componentRef.instance.script = event.expression;
      merge(
        componentRef.instance.confirm.pipe(tap(script => target.dispatchEvent(new EditExpressionEndEvent(script)))),
        componentRef.instance.cancel,
      )
        .pipe(take(1))
        .subscribe(() => overlayRef.dispose());
    });
  },
  deps: [Overlay],
};
