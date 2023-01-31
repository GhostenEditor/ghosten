import { Component } from '@angular/core';
import { EditAbstractComponent } from '@ghosten/editor';

@Component({
  selector: 'strong[gt-strong]',
  template: `{{ property.text || 'Strong Text Placeholder' | dataBinding }}`,
})
export class StrongComponent extends EditAbstractComponent {}
