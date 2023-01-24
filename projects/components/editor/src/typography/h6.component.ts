import { Component } from '@angular/core';
import { EditAbstractComponent } from '@ghosten/editor';

@Component({
  selector: 'h6[gt-text]',
  template: `{{ property.text || 'h6.Heading' | dataBinding }}`,
})
export class H6Component extends EditAbstractComponent {}
