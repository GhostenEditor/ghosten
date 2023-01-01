import { Component } from '@angular/core';

import { CardProperty } from '@ghosten/components';
import { RenderAbstractComponent } from '@ghosten/renderer';

@Component({
  selector: 'gt-card',
  template: ` <div class="card">
    <div class="card-header" *ngIf="gtNode.property.showTitle">
      {{ gtNode.property.title }}
    </div>
    <div class="card-body">
      <ng-template gtTemplate></ng-template>
    </div>
    <div class="card-footer"></div>
  </div>`,
})
export class CardComponent extends RenderAbstractComponent<CardProperty> {}
