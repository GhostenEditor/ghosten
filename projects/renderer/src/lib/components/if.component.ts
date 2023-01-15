import { Component, Inject, Optional } from '@angular/core';
import { GtNode, IGtNode } from '@ghosten/common';
import { GtRender } from '../classes/gt.class';

// import { DirectiveContext } from './directive.context';

@Component({
  selector: 'if-component',
  template: ` <ng-container *ngIf="ifVar | dataBinding">
    <ng-template gtTemplate></ng-template>
  </ng-container>`,
})
export class IfComponent {
  ifVar: any;

  constructor(
    public gt: GtRender,
    public gtNode: GtNode,
    // @Optional() private directiveContext: DirectiveContext,
    @Optional() @Inject('originalGtNode') originalGtNode: GtNode,
    @Optional() @Inject('gtDirective') gtDirective: IGtNode.Directive,
  ) {
    if (gtDirective && gtDirective.value && gtDirective.value.input) {
      this.ifVar = gtDirective.value.input.default;
      gtNode.children.push(originalGtNode);
    }
  }
}
