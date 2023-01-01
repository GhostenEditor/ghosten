import { Component } from '@angular/core';
import { RenderAbstractComponent } from '@ghosten/renderer';

@Component({
  selector: 'div[gt-division]',
  template: '<ng-template gtTemplate></ng-template>',
})
export class DivisionComponent extends RenderAbstractComponent {}
