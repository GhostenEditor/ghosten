import { Component } from '@angular/core';
import { EditAbstractComponent } from '@ghosten/editor';
import { ListGroupItem } from '@ghosten/components';

@Component({
  selector: 'li[gt-list-group-item]',
  host: {
    class: 'list-group-item',
    '[class.active]': 'property.active',
    '[class.disabled]': 'property.disabled',
    '[class.list-group-item-action]': 'property.active',
    '[class]': 'property.style',
  },
  template: ` <ng-template gtTemplate></ng-template>`,
})
export class ListGroupItemComponent extends EditAbstractComponent<ListGroupItem> {}
