import { Component, Inject, Optional } from '@angular/core';
import { GtNode, IGtNode } from '@ghosten/common';
import { GtRender } from '../classes/gt.class';
import { HttpClient } from '@angular/common/http';

// import { DirectiveContext } from './directive.context';

@Component({
  selector: 'for-component',
  template: ` <ng-container *ngFor="let item of forVar | dataBinding; let i = index">
    <ng-template gtTemplate [directiveContext]="{ item: item, index: i }"></ng-template>
  </ng-container>`,
})
export class ForComponent {
  forVar: any;

  constructor(
    public gt: GtRender,
    public gtNode: GtNode,
    @Optional() public http: HttpClient,
    // @Optional() private directiveContext: DirectiveContext,
    @Optional() @Inject('originalGtNode') originalGtNode: GtNode,
    @Optional() @Inject('gtDirective') gtDirective: IGtNode.Directive,
  ) {
    if (gtDirective && gtDirective.value && gtDirective.value.input) {
      this.forVar = gtDirective.value.input.default;
      this.gtNode.dynamicChildren = () => [
        this.gt.createGtNode(
          {
            ...getNodeDataDeeply(originalGtNode),
            directive: [],
            id: undefined,
          },
          gtNode,
          undefined,
          undefined,
          this.gtNode.boardId,
        )!,
      ];
    }
  }

  insert() {}
}

function getNodeDataDeeply(gtNode: GtNode): IGtNode.Config {
  const config = gtNode.export();
  delete config.id;
  config.children = gtNode.children.map(node => getNodeDataDeeply(node));
  return config;
}
