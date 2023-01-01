import { Component, HostBinding } from '@angular/core';
import { EditAbstractComponent } from '@ghosten/editor';

@Component({
  preserveWhitespaces: false,
  selector: 'button[gt-button][type="button"]',
  template: `{{ gtNode.property.text | dataBinding }}`,
})
export class ButtonComponent extends EditAbstractComponent {
  @HostBinding('class') get className() {
    return [
      'btn',
      'gt-node',
      this.gtNode.property.buttonSize,
      this.gtNode.property.buttonColor,
      this.gtNode.property.buttonType,
    ].join(' ');
  }
}
