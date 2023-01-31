import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { Overlay } from '@angular/cdk/overlay';

import { Subscription, merge, switchMap, take, tap } from 'rxjs';
import { LogEvent } from '@ghosten/common';

import { GtRender } from './classes/gt.class';
import { GtRendererModalComponent } from './gt-renderer-modal.component';
import { TemplateDirective } from './directives/template.directive';

@Component({
  selector: 'gt-renderer',
  template: '<ng-template gtTemplate></ng-template>',
  providers: [GtRender],
})
export class GtRendererComponent implements OnInit, OnDestroy {
  @ViewChild(TemplateDirective, { static: true }) template: TemplateDirective;

  @Input() set data(data: any) {
    if (data) {
      this.gt.init(data.config, data.components);
    } else {
      this.gt.init();
    }
  }

  @Output() log = new EventEmitter<LogEvent>();
  private subscription = Subscription.EMPTY;

  constructor(private gt: GtRender, overlay: Overlay, vcr: ViewContainerRef) {
    this.subscription = this.gt.log.subscribe(data => this.log.emit(data));
    this.gt.showModal.subscribe(modalId => {
      const board = this.gt.boards.find(({ name }) => modalId === name);
      if (board) {
        console.info(board);
        const overlayRef = overlay.create({
          disposeOnNavigation: true,
          hasBackdrop: true,
        });
        const componentRef = overlayRef.attach(new ComponentPortal(GtRendererModalComponent, vcr));
        componentRef.instance.board = board;
        merge(componentRef.instance.modalConfirm, componentRef.instance.modalClose)
          .pipe(
            tap(() => overlayRef.detachBackdrop()),
            switchMap(() => componentRef.instance.animationDone),
            take(1),
          )
          .subscribe(() => overlayRef.dispose());
      } else {
        this.gt.log.next({
          type: 'error',
          message: `Name 为 ${modalId} 的弹窗不存在`,
        });
      }
    });
  }

  ngOnInit() {
    this.template.insert(this.gt.currentBoard!.gt);
  }

  ngOnDestroy() {
    this.gt.log.next({
      type: 'info',
      message: 'Application Destroy',
    });
    this.subscription.unsubscribe();
  }
}
