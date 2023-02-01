import { Component } from '@angular/core';

import { AProperty } from '@ghosten/components';
import { EditAbstractComponent } from '@ghosten/editor';

@Component({
  selector: 'gt-link',
  template:
    '<a><ng-container *ngIf="!gtNode.children.length">Link Placeholder</ng-container><ng-template gtTemplate></ng-template></a>',
})
export class AComponent extends EditAbstractComponent<AProperty> {}
