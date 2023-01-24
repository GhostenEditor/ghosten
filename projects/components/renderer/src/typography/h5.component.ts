import { Component } from '@angular/core';
import { RenderAbstractComponent } from '@ghosten/renderer';

@Component({
  selector: 'h5[gt-text]',
  template: '{{ property.text | dataBinding}}',
})
export class H5Component extends RenderAbstractComponent {}
