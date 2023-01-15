import { Component } from '@angular/core';
import { EditAbstractComponent } from './abstract.component';

@Component({
  selector: 'div[gt-division]',
  template: '<ng-template gtTemplate></ng-template>',
})
export class DivisionComponent extends EditAbstractComponent {}
