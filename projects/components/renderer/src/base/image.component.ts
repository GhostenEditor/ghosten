import { Component, HostListener } from '@angular/core';
import { RenderAbstractComponent } from '@ghosten/renderer';

@Component({
  selector: 'img[ghost-image]',
  host: {
    '[src]': 'gtNode.property.src',
    '[alt]': 'gtNode.property.alt',
    '[title]': 'gtNode.property.title',
  },
  template: '',
})
export class ImageComponent extends RenderAbstractComponent {
  @HostListener('error') loadError() {
    this.property.src = 'assets/icons/128.png';
  }
}
