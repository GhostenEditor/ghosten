import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PortalModule } from '@angular/cdk/portal';

import {
  GT_NODE_DEFAULT_CONFIG,
  GT_RENDER_COMPONENT_MAP,
  GtRenderCoreModule,
} from '@ghosten/renderer';
import { gtContainerConfigMap } from '@ghosten/components';

import { AccordionComponent } from './accordion.component';
import { AlertComponent } from './alert.component';
import { ButtonGroupComponent } from './button-group.component';
import { CardComponent } from './card.component';

@NgModule({
  imports: [CommonModule, PortalModule, GtRenderCoreModule, CdkAccordionModule],
  declarations: [
    CardComponent,
    AccordionComponent,
    AlertComponent,
    ButtonGroupComponent,
  ],
  providers: [
    {
      provide: GT_RENDER_COMPONENT_MAP,
      useValue: {
        card: CardComponent,
        accordion: AccordionComponent,
        alert: AlertComponent,
        buttonGroup: ButtonGroupComponent,
      },
      multi: true,
    },
    {
      provide: GT_NODE_DEFAULT_CONFIG,
      useFactory: gtContainerConfigMap,
      multi: true,
    },
  ],
})
export class GtContainerRenderModule {}
