import { Component } from '@angular/core';
import { EditAbstractComponent } from '@ghosten/editor';

@Component({
  selector: 'code[gt-code]',
  template: `{{ property.text || 'Code Placeholder' | dataBinding }}`,
})
export class CodeComponent extends EditAbstractComponent {}
