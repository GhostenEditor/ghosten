import { Component } from '@angular/core';
import { EditAbstractComponent } from '@ghosten/editor';

@Component({
  selector: 'h2[gt-text]',
  template: `{{ property.text || 'h2.Heading' | dataBinding }}`,
})
export class H2Component extends EditAbstractComponent {}
