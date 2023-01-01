import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  GT_EDIT_COMPONENT_MAP,
  GT_NODE_DEFAULT_CONFIG,
  GT_TEMPLATE_MAP,
  GtEditCoreModule,
} from '@ghosten/editor';
import { gtBaseConfigMap } from '@ghosten/components';

import { DivisionComponent } from './division.component';
import { ImageComponent } from './image.component';
import { TextComponent } from './text.component';

@NgModule({
  imports: [CommonModule, GtEditCoreModule],
  declarations: [DivisionComponent, TextComponent, ImageComponent],
  providers: [
    {
      provide: GT_EDIT_COMPONENT_MAP,
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
      provide: GT_TEMPLATE_MAP,
      useValue: {
        division: '<div style="width: 100px;height:100px;"></div>',
        slot: '<div class="gt-node gt-slot" style="width: 100px;height:100px;"></div>',
        text: '<span>Some Text</span>',
        image: `<img src='...' alt='...'/>`,
      },
      multi: true,
    },
    {
      provide: GT_NODE_DEFAULT_CONFIG,
      multi: true,
      useFactory: gtBaseConfigMap,
    },
  ],
})
export class GtBaseEditModule {}
