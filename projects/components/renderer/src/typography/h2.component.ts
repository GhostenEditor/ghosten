import { Component } from '@angular/core';
import { RenderAbstractComponent } from '@ghosten/renderer';

@Component({
  selector: 'h2[gt-text]',
  template: '{{ property.text | dataBinding}}',
})
export class H2Component extends RenderAbstractComponent {}
