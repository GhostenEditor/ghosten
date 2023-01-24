import { Component } from '@angular/core';
import { RenderAbstractComponent } from '@ghosten/renderer';

@Component({
  selector: 'h6[gt-text]',
  template: '{{ property.text | dataBinding}}',
})
export class H6Component extends RenderAbstractComponent {}
