import { Component, HostListener } from '@angular/core';
import { ImageProperty } from '@ghosten/components';
import { RenderAbstractComponent } from '@ghosten/renderer';

@Component({
  selector: 'img[gt-image]',
  host: {
    '[src]': 'property.src',
    '[alt]': 'property.alt',
    '[title]': 'property.title',
    '[class.img-fluid]': 'property.responsive',
    '[class.img-thumbnail]': 'property.thumbnails',
  },
  template: '',
})
export class ImageComponent extends RenderAbstractComponent<ImageProperty> {
  @HostListener('error') loadError() {
    this.property.src = 'assets/icons/128.png';
  }
}
