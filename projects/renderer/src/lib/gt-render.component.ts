import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { GtData, LogEvent } from '@ghosten/common';
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
  @Input() data: string | null | GtData;
  @Output() log = new EventEmitter<LogEvent>();
  private subscription = Subscription.EMPTY;

  constructor(private gt: GtRender) {}

  ngOnInit() {
    // (this.data as Blob).arrayBuffer().then(console.log);
    this.subscription = this.gt.log.subscribe(data => this.log.emit(data));
    this.gt.init(this.data);
    // this.log.emit({
    //   type: 'info',
    //   message: 'Application Initialization',
    //   data: this.gt,
    // });
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
