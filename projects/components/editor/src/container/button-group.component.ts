import { Component } from '@angular/core';
import { EditAbstractComponent } from '@ghosten/editor';

@Component({
  selector: 'div[button-group]',
  host: {
    '[class.btn-group]': 'gtNode.property.orientation==="horizontal"',
    '[class.btn-group-vertical]': 'gtNode.property.orientation==="vertical"',
    '[class.btn-group-lg]': 'gtNode.property.size==="lg"',
    '[class.btn-group-sm]': 'gtNode.property.size==="sm"',
    '[attr.data-accept]': "'buttonGroup,button'",
  },
  template: ` <ng-template gtTemplate></ng-template>`,
})
export class ButtonGroupComponent extends EditAbstractComponent {}
