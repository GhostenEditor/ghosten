import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { HttpClient } from '@angular/common/http';
import { Overlay } from '@angular/cdk/overlay';

import { GtEvent } from '@ghosten/editor';
import { LogEvent } from '@ghosten/common';

import { tap } from 'rxjs';

import { RenderComponent } from './render.component';
import { ToastService } from '../toast/toast.service';

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
          message: type === 'auto' ? '自动保存' : type === 'manual' ? '保存成功' : 'Rollback 成功',
          duration: 10000,
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
            componentRef.instance.modalDismiss.subscribe(() => overlayRef.dispose());
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
            message: '组件保存成功',
            duration: 10000,
            position: 'top_center',
          }),
        );
        break;
      case 'REMOVE_COMPONENT':
        this.http.post<any>('removeComponent', event.data).subscribe(() =>
          this.toast.show({
            type: 'primary',
            message: '组件删除成功',
            duration: 10000,
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
    console.info('[GHOSTEN EVENT]: ' + event.type + ' %O', event.data);
  }

  log({ type, message, data }: LogEvent) {
    switch (type) {
      case 'info':
        data.metadata.id = this.route.snapshot.data.data.id;
        console.info('[GHOSTEN  INFO]: ' + message + ' %O', data);
        break;
      case 'error':
        console.error('[GHOSTEN ERROR]: ' + message, data);
        break;
      case 'warning':
        console.warn('[GHOSTEN WARNING]: ' + message, data);
        break;
    }
  }
}