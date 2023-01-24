import { Component } from '@angular/core';
import { EditAbstractComponent } from '@ghosten/editor';

@Component({
  selector: 'h1[gt-text]',
  template: `{{ property.text || 'h1.Heading' | dataBinding }}`,
})
export class H1Component extends EditAbstractComponent {}
