import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  GT_EDIT_COMPONENT_MAP,
  GT_ELEMENT_LISTS,
  GT_NODE_DEFAULT_CONFIG,
  GT_TEMPLATE_MAP,
  GtEditCoreModule,
} from '@ghosten/editor';
import { gtBaseConfigMap } from '@ghosten/components';

import { ImageComponent } from './image.component';
import { TextComponent } from './text.component';

@NgModule({
  imports: [CommonModule, GtEditCoreModule],
  declarations: [TextComponent, ImageComponent],
  providers: [
    {
      provide: GT_ELEMENT_LISTS,
      useValue: {
        title: $localize`:Element Group Title\: Normal:通用`,
        elements: [
          {
            label: $localize`:Element Label\: Text:文字`,
            type: 'text',
            icon: 'text',
          },
          { label: '图片', type: 'image', icon: 'picture' },
        ],
      },
      multi: true,
    },
    {
      provide: GT_EDIT_COMPONENT_MAP,
      useValue: {
        text: TextComponent,
        image: ImageComponent,
      },
      multi: true,
    },
    {
      provide: GT_TEMPLATE_MAP,
      useValue: {
        division: '<div class="gt-node" style="border: .15rem dashed"></div>',
        slot: '<div class="gt-node" style="border: .15rem dashed"></div>',
        text: '<span>Some Text</span>',
        image: `<img src="..." alt="..."/>`,
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
