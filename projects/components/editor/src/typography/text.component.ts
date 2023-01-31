import { Component } from '@angular/core';

import { EditAbstractComponent } from '@ghosten/editor';

@Component({
  selector: 'span[gt-text]',
  template: '{{ property.text || "Some Text Placeholder"  | dataBinding}}',
})
export class TextComponent extends EditAbstractComponent {}
