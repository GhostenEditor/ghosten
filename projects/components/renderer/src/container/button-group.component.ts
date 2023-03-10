import { Component } from '@angular/core';
import { RenderAbstractComponent } from '@ghosten/renderer';

@Component({
  selector: 'div[button-group]',
  host: {
    '[class.btn-group]': 'gtNode.property.orientation==="horizontal"',
    '[class.btn-group-vertical]': 'gtNode.property.orientation==="vertical"',
    '[class.btn-group-lg]': 'gtNode.property.size==="lg"',
    '[class.btn-group-sm]': 'gtNode.property.size==="sm"',
  },
  template: ` <ng-template gtTemplate></ng-template>`,
})
export class ButtonGroupComponent extends RenderAbstractComponent {}
