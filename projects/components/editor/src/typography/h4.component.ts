import { Component } from '@angular/core';
import { EditAbstractComponent } from '@ghosten/editor';

@Component({
  selector: 'h4[gt-text]',
  template: `{{ property.text || 'h4.Heading' | dataBinding }}`,
})
export class H4Component extends EditAbstractComponent {}
