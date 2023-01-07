import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { GtData } from '@ghosten/common';
import { GtRender } from './classes/gt.class';
import { TemplateDirective } from './directives/template.directive';

@Component({
  selector: 'gt-render',
  template: '<ng-template gtTemplate></ng-template>',
  providers: [GtRender],
})
export class GtRenderComponent implements OnInit, OnDestroy {
  @ViewChild(TemplateDirective, { static: true }) template: TemplateDirective;
  @Input() data: string | null | GtData;
  @Output() log = this.gt.log;

  constructor(private gt: GtRender) {}

  ngOnInit() {
    // (this.data as Blob).arrayBuffer().then(console.log);
    this.gt.init(this.data);
    this.gt.log.next({
      type: 'init',
      message: 'Application Initialization',
      data: this.gt,
    });
    this.template.insert(this.gt.currentBoard!.gt);
  }

  ngOnDestroy() {
    this.gt.log.next({
      type: 'destroy',
      message: 'Application Destroy',
      data: this.gt,
    });
  }
}
