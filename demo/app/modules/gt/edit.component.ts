import { Component, OnDestroy, ViewChild } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { HttpClient } from '@angular/common/http';
import { Overlay } from '@angular/cdk/overlay';

import { GtEditComponent } from '@ghosten/editor';
import { LogEvent } from '@ghosten/common';

import { map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { RenderComponent } from './render.component';

@Component({
  selector: 'app-gt-edit',
  template: '<gt-edit (log)="log($event)" [data]="data"></gt-edit>',
})
export class EditComponent implements OnDestroy {
  @ViewChild(GtEditComponent, { static: true }) gt: GtEditComponent;
  currentID: null | string = localStorage.getItem('currentID');
  data: any;

  constructor(private overlay: Overlay, private http: HttpClient) {
    this.getActivatedPage();
    window.addEventListener('beforeunload', () => this.ngOnDestroy());
  }

  ngOnDestroy() {
    if (this.currentID) {
      localStorage.setItem('currentID', this.currentID);
    } else {
      localStorage.removeItem('currentID');
    }
  }

  getActivatedPage() {
    (this.currentID
      ? this.http
          .get<any>('getLatestConfigByID', { params: { id: this.currentID } })
          .pipe(
            map(data => {
              if (data) {
                const { config, pageDescription, pageTitle } = data;
                return config;
              } else {
                this.currentID = null;
                return null;
              }
            }),
          )
      : of(null)
    ).subscribe(data => (this.data = data));
  }

  log({ type, message, data, subType, callback }: LogEvent) {
    switch (type) {
      case 'preview':
        const overlayRef = this.overlay.create({
          hasBackdrop: true,
          width: '90%',
          maxHeight: '90%',
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
        return this.http
          .post<any>('save', { data, id: this.currentID })
          .pipe(tap(({ id }) => (this.currentID = id)))
          .subscribe(callback);
      case 'Manipulate Page':
        switch (subType) {
          case 'getPageList':
            return this.http.get('getPageList').subscribe(callback);
          case 'addPage':
            return this.http.post('addPage', data).subscribe(callback);
          case 'editPage':
            return this.http.post('editPage', data).subscribe(callback);
          case 'deletePage':
            return this.http.post('deletePage', data).subscribe(callback);
          case 'activatePage':
            return (this.currentID = data.id) && this.getActivatedPage();
        }
        break;
      case 'init':
        const selectedNode = localStorage.getItem('selectedNode');
        if (selectedNode) {
          selectedNode.split(',').map(id => {
            const gtNode = this.gt.gt.getNodeById(id);
            if (gtNode) this.gt.gt.changeSelect(gtNode, true);
          });
        }
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
        console.info('[Gt Message]: ' + message + ' %O', data);
    }
    return null;
  }
}
