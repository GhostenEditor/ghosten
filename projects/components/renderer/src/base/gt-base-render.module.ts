import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  GT_NODE_DEFAULT_CONFIG,
  GT_RENDER_COMPONENT_MAP,
  GtRenderCoreModule,
} from '@ghosten/renderer';
import { gtBaseConfigMap } from '@ghosten/components';

import { DivisionComponent } from './division.component';
import { ImageComponent } from './image.component';
import { TextComponent } from './text.component';

@NgModule({
  imports: [CommonModule, GtRenderCoreModule],
  declarations: [TextComponent, DivisionComponent, ImageComponent],
  providers: [
    {
      provide: GT_RENDER_COMPONENT_MAP,
      useValue: {
        root: DivisionComponent,
        division: DivisionComponent,
        template: DivisionComponent,
        slot: DivisionComponent,
        outlet: DivisionComponent,
        text: TextComponent,
        image: ImageComponent,
      },
      multi: true,
    },
    {
      provide: GT_NODE_DEFAULT_CONFIG,
      useFactory: gtBaseConfigMap,
      multi: true,
    },
  ],
})
export class GtBaseRenderModule {}
