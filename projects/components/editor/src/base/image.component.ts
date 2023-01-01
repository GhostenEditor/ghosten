import { Component } from '@angular/core';
import { EditAbstractComponent } from '@ghosten/editor';

@Component({
  selector: 'img[ghost-image]',
  host: {
    '[src]': 'gtNode.property.src',
    '[alt]': 'gtNode.property.alt',
    '[title]': 'gtNode.property.title',
  },
  template: '',
})
export class ImageComponent extends EditAbstractComponent {}
