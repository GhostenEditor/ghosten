import { Component } from '@angular/core';
import { EditAbstractComponent } from '@ghosten/editor';
import { ImageProperty } from '@ghosten/components';

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
export class ImageComponent extends EditAbstractComponent<ImageProperty> {}
