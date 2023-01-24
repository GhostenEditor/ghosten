import { Component } from '@angular/core';
import { EditAbstractComponent } from '@ghosten/editor';

@Component({
  selector: 'h5[gt-text]',
  template: `{{ property.text || 'h5.Heading' | dataBinding }}`,
})
export class H5Component extends EditAbstractComponent {}
