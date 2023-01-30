import { Component } from '@angular/core';
import { RenderAbstractComponent } from '@ghosten/renderer';

@Component({
  selector: 'code[gt-code]',
  template: `{{ property.text || 'Code Placeholder' | dataBinding }}`,
})
export class CodeComponent extends RenderAbstractComponent {}
