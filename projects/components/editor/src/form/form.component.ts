import { Component } from '@angular/core';
import { EditAbstractComponent } from '@ghosten/editor';

@Component({
  selector: 'config-form[gt-config-form]',
  template: ` <ng-template gtTemplate></ng-template> `,
})
export class FormComponent extends EditAbstractComponent {}
