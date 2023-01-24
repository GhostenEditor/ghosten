import { Component } from '@angular/core';
import { EditAbstractComponent } from '@ghosten/editor';

@Component({
  selector: 'h3[gt-text]',
  template: `{{ property.text || 'h3.Heading' | dataBinding }}`,
})
export class H3Component extends EditAbstractComponent {}
