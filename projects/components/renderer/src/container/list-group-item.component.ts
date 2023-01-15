import { Component } from '@angular/core';
import { ListGroupItem } from '@ghosten/components';
import { RenderAbstractComponent } from '@ghosten/renderer';

@Component({
  selector: 'li[gt-list-group-item]',
  host: {
    class: 'list-group-item',
    '[class.active]': 'property.active',
    '[class.disabled]': 'property.disabled',
    '[class.list-group-item-action]': 'property.action',
    '[class]': 'property.style',
  },
  template: ` <ng-template gtTemplate></ng-template>`,
})
export class ListGroupItemComponent extends RenderAbstractComponent<ListGroupItem> {}
