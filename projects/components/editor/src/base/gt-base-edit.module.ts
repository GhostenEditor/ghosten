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

import { AComponent } from './a.component';
import { ImageComponent } from './image.component';

@NgModule({
  imports: [CommonModule, GtEditCoreModule],
  declarations: [ImageComponent, AComponent],
  providers: [
    {
      provide: GT_ELEMENT_LISTS,
      useValue: {
        title: $localize`:Element Group Title\: Normal:通用`,
        elements: [
          {
            label: $localize`:Element Label\: Image:图片`,
            type: 'image',
            icon: 'picture',
          },
          {
            label: $localize`:Element Label\: Link:超链接`,
            type: 'a',
            icon: 'bind',
          },
        ],
      },
      multi: true,
    },
    {
      provide: GT_EDIT_COMPONENT_MAP,
      useValue: {
        image: ImageComponent,
        a: AComponent,
      },
      multi: true,
    },
    {
      provide: GT_TEMPLATE_MAP,
      useValue: {
        image: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-image"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>`,
        a: `<a>Link Placeholder</a>`,
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
