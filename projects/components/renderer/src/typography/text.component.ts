import { Component } from '@angular/core';
import { RenderAbstractComponent } from '@ghosten/renderer';

@Component({
  selector: 'span[gt-text]',
  template: '{{ gtNode.property.text | dataBinding }}',
})
export class TextComponent extends RenderAbstractComponent {}
