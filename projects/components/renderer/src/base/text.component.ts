import { Component } from '@angular/core';
import { RenderAbstractComponent } from '@ghosten/renderer';

@Component({
  selector: 'gt-text',
  template: '{{ gtNode.property.text | dataBinding }}',
})
export class TextComponent extends RenderAbstractComponent {}
