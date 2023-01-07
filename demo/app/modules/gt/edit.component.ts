import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { HttpClient } from '@angular/common/http';
import { Overlay } from '@angular/cdk/overlay';

import { LogEvent } from '@ghosten/common';

import { RenderComponent } from './render.component';
import { ToastService } from '../toast/toast.service';

@Component({
  selector: 'app-gt-edit',
  template:
    '<gt-edit (log)="log($event)" [data]="route.snapshot.data.data"></gt-edit>',
})
export class EditComponent {
  constructor(
    private overlay: Overlay,
    private http: HttpClient,
    public route: ActivatedRoute,
    private toast: ToastService,
  ) {}

  log({ type, message, data, subType, callback }: LogEvent) {
    switch (type) {
      case 'preview':
        const overlayRef = this.overlay.create({
          hasBackdrop: true,
          width: '90%',
          maxHeight: '90%',
          disposeOnNavigation: true,
          panelClass: '',
          positionStrategy: this.overlay
            .position()
            .global()
            .centerHorizontally()
            .centerVertically(),
        });
        const componentRef = overlayRef.attach(
          new ComponentPortal(RenderComponent),
        );
        componentRef.instance.data = data;
        componentRef.instance.modalDismiss.subscribe(() =>
          overlayRef.dispose(),
        );
        console.info('Gt Message: ' + message, data);
        break;
      case 'save':
        this.save(data, 'manual');
        break;
      case 'init':
        console.info('[Gt Message]: ' + message + ' %O', data);
        break;
      case 'error':
        console.error('[Gt Message]: ' + message, data);
        break;
      case 'warn':
        console.warn('[Gt Message]: ' + message, data);
        break;
      default:
        if (message === 'CHANGE_SELECT' && data.length) {
          localStorage.setItem(
            'selectedNode',
            data.map((gtNode: any) => gtNode.id).join(','),
          );
        }
        if (message === 'AUTO_SAVE') {
          this.save(data, 'auto');
        }
        console.info('[Gt Message]: ' + message + ' %O', data);
    }
    return null;
  }

  save(data: any, type: 'manual' | 'auto') {
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
          message: type === 'auto' ? '自动保存' : '保存成功',
          duration: 10000,
          position: 'top_center',
        }),
      );
  }
}
