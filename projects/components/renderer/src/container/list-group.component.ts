import { Component } from '@angular/core';
import { ListGroup } from '@ghosten/components';
import { RenderAbstractComponent } from '@ghosten/renderer';

@Component({
  selector: 'ul[gt-list-group]',
  host: {
    class: 'list-group',
    '[class.list-group-horizontal]': 'property.horizontal',
    '[class.list-group-flush]': 'property.flush',
    '[class.list-group-numbered]': 'property.numbered',
  },
  template: ` <ng-template gtTemplate></ng-template>`,
})
export class ListGroupComponent extends RenderAbstractComponent<ListGroup> {}
