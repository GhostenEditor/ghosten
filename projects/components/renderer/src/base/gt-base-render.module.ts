import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GT_NODE_DEFAULT_CONFIG, GT_RENDER_COMPONENT_MAP, GtRenderCoreModule } from '@ghosten/renderer';
import { gtBaseConfigMap } from '@ghosten/components';

import { AComponent } from './a.component';
import { ImageComponent } from './image.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule, GtRenderCoreModule],
  declarations: [ImageComponent, AComponent],
  providers: [
    {
      provide: GT_RENDER_COMPONENT_MAP,
      useValue: {
        image: ImageComponent,
        a: AComponent,
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
