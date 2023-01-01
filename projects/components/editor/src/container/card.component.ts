import { Component } from '@angular/core';
import { EditAbstractComponent } from '@ghosten/editor';

@Component({
  selector: 'gt-card',
  template: ` <div class="card">
    <div class="card-header" *ngIf="gtNode.property.showTitle">
      {{ gtNode.property.title }}
    </div>
    <div class="card-body" [attr.data-droppable]="droppable">
      <ng-template gtTemplate></ng-template>
    </div>
    <div class="card-footer"></div>
  </div>`,
})
export class CardComponent extends EditAbstractComponent {}
