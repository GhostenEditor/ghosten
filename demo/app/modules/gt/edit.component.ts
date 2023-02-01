import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { HttpClient } from '@angular/common/http';
import { Overlay } from '@angular/cdk/overlay';

import { GtEvent } from '@ghosten/editor';
import { LogEvent } from '@ghosten/common';

import { switchMap, tap } from 'rxjs';
import { take } from 'rxjs/operators';

import { AUTO_SAVE, MANUAL_SAVE, REMOVE_COMPONENT, ROLLBACK, SAVE_COMPONENT } from '../../message';
import { RenderComponent } from './render.component';
import { ToastService } from '../toast/toast.service';
import { log } from '../../../utils';

@Component({
  selector: 'app-gt-edit',
  template: '<gt-editor (event)="onEvent($event)"  (log)="log($event)" [data]="route.snapshot.data.data"></gt-editor>',
})
export class EditComponent {
  constructor(
    private overlay: Overlay,
    private http: HttpClient,
    public route: ActivatedRoute,
    private toast: ToastService,
  ) {}

  save(data: any, type: 'manual' | 'auto' | string) {
    return this.http
      .post<any>('save', {
        config: data.config,
        settings: data.settings,
        id: this.route.snapshot.params.id,
        type,
      })
      .subscribe(() =>
        this.toast.show({
          type: 'primary',
          message: type === 'auto' ? AUTO_SAVE : type === 'manual' ? MANUAL_SAVE : ROLLBACK,
          position: 'top_center',
        }),
      );
  }

  onEvent(event: GtEvent.Events) {
    switch (event.type) {
      case 'TOP_BUTTON_CLICK':
        switch (event.data.button.name) {
          case 'preview':
            const overlayRef = this.overlay.create({
              hasBackdrop: true,
              width: '90%',
              maxHeight: '90%',
              disposeOnNavigation: true,
              panelClass: '',
              positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
            });
            const componentRef = overlayRef.attach(new ComponentPortal(RenderComponent));
            componentRef.instance.data = event.data.data;
            componentRef.instance.modalDismiss
              .pipe(
                tap(() => overlayRef.detachBackdrop()),
                switchMap(() => componentRef.instance.animationDone),
                take(1),
              )
              .subscribe(() => overlayRef.dispose());
            break;
        }
        break;
      case 'SAVE':
        this.save(event.data, 'manual');
        break;
      case 'AUTO_SAVE':
        this.save(event.data, 'auto');
        break;
      case 'SAVE_COMPONENT':
        this.http.post<any>('saveComponent', event.data).subscribe(() =>
          this.toast.show({
            type: 'primary',
            message: SAVE_COMPONENT,
            position: 'top_center',
          }),
        );
        break;
      case 'REMOVE_COMPONENT':
        this.http.post<any>('removeComponent', event.data).subscribe(() =>
          this.toast.show({
            type: 'primary',
            message: REMOVE_COMPONENT,
            position: 'top_center',
          }),
        );
        break;
      case 'CUSTOM':
        switch (event.data.type) {
          case 'rollback':
            this.http
              .get<any>('getLatestConfigByID', {
                params: {
                  id: this.route.snapshot.params.id,
                  timestamp: event.data.timestamp,
                },
              })
              .pipe(tap(data => this.save(data, 'rollback ' + data.timestamp)))
              .subscribe(data => event.data.callback!(data));
            break;
        }
    }
    log('info', '[GHOSTEN EVENT]', event.type, event.data);
  }

  log({ type, message, data }: LogEvent) {
    switch (type) {
      case 'info':
        data.metadata.id = this.route.snapshot.data.data.id;
        log('info', '[GHOSTEN  INFO]', message, data);
        break;
      case 'error':
        log('error', '[GHOSTEN ERROR]', message, data);
        break;
      case 'warning':
        log('warn', '[GHOSTEN WARNING]', message, data);
        break;
    }
  }
}
