import { Component } from '@angular/core';

import { AProperty } from '@ghosten/components';
import { RenderAbstractComponent } from '@ghosten/renderer';

@Component({
  selector: 'gt-link',
  template: `<a [routerLink]="property.link"><ng-template gtTemplate></ng-template></a>`,
})
export class AComponent extends RenderAbstractComponent<AProperty> {}
