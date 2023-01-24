import { Component } from '@angular/core';
import { RenderAbstractComponent } from '@ghosten/renderer';

@Component({
  selector: 'h3[gt-text]',
  template: '{{ property.text | dataBinding}}',
})
export class H3Component extends RenderAbstractComponent {}
