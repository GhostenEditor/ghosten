import { Component } from '@angular/core';

import { EditAbstractComponent } from '@ghosten/editor';

@Component({
  selector: 'gt-text',
  template: '{{ property.text | dataBinding}}',
})
export class TextComponent extends EditAbstractComponent {}
