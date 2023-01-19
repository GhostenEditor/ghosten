import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { LogEvent } from '@ghosten/common';
import { Subscription } from 'rxjs';

import { GtRender } from './classes/gt.class';
import { TemplateDirective } from './directives/template.directive';

@Component({
  selector: 'gt-renderer',
  template: '<ng-template gtTemplate></ng-template>',
  providers: [GtRender],
})
export class GtRenderComponent implements OnInit, OnDestroy {
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

  constructor(private gt: GtRender) {
    this.subscription = this.gt.log.subscribe(data => this.log.emit(data));
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
