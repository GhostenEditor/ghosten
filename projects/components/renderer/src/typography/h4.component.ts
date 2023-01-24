import { Component } from '@angular/core';
import { RenderAbstractComponent } from '@ghosten/renderer';

@Component({
  selector: 'h4[gt-text]',
  template: '{{ property.text | dataBinding}}',
})
export class H4Component extends RenderAbstractComponent {}
