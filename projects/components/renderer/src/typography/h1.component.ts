import { Component } from '@angular/core';
import { RenderAbstractComponent } from '@ghosten/renderer';

@Component({
  selector: 'h1[gt-text]',
  template: '{{ property.text | dataBinding}}',
})
export class H1Component extends RenderAbstractComponent {}
