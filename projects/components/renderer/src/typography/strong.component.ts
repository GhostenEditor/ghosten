import { Component } from '@angular/core';
import { RenderAbstractComponent } from '@ghosten/renderer';

@Component({
  selector: 'strong[gt-strong]',
  template: `{{ property.text | dataBinding }}`,
})
export class StrongComponent extends RenderAbstractComponent {}
