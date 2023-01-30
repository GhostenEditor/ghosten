import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  GT_EDIT_COMPONENT_MAP,
  GT_ELEMENT_LISTS,
  GT_NODE_DEFAULT_CONFIG,
  GT_TEMPLATE_MAP,
  GtEditCoreModule,
} from '@ghosten/editor';
import { gtTextConfigMap } from '@ghosten/components';

import { CodeComponent } from './code.component';
import { H1Component } from './h1.component';
import { H2Component } from './h2.component';
import { H3Component } from './h3.component';
import { H4Component } from './h4.component';
import { H5Component } from './h5.component';
import { H6Component } from './h6.component';

@NgModule({
  imports: [CommonModule, GtEditCoreModule],
  declarations: [H1Component, H2Component, H3Component, H4Component, H5Component, H6Component, CodeComponent],
  providers: [
    {
      provide: GT_ELEMENT_LISTS,
      useValue: {
        title: $localize`:Element Group Title\: Typography:文字`,
        elements: [
          {
            label: $localize`:Element Label\: h1:h1`,
            type: 'h1',
            icon: 'h1',
          },
          {
            label: $localize`:Element Label\: h2:h2`,
            type: 'h2',
            icon: 'h2',
          },
          {
            label: $localize`:Element Label\: h3:h3`,
            type: 'h3',
            icon: 'h3',
          },
          {
            label: $localize`:Element Label\: h4:h4`,
            type: 'h4',
            icon: 'h4',
          },
          {
            label: $localize`:Element Label\: h5:h5`,
            type: 'h5',
            icon: 'h5',
          },
          {
            label: $localize`:Element Label\: h6:h6`,
            type: 'h6',
            icon: 'h6',
          },
          {
            label: 'Code',
            type: 'code',
            icon: 'code',
          },
        ],
      },
      multi: true,
    },
    {
      provide: GT_EDIT_COMPONENT_MAP,
      useValue: {
        h1: H1Component,
        h2: H2Component,
        h3: H3Component,
        h4: H4Component,
        h5: H5Component,
        h6: H6Component,
        code: CodeComponent,
      },
      multi: true,
    },
    {
      provide: GT_TEMPLATE_MAP,
      useValue: {
        h1: '<h1>h1.Heading</h1>',
        h2: '<h2>h2.Heading</h2>',
        h3: '<h3>h3.Heading</h3>',
        h4: '<h4>h4.Heading</h4>',
        h5: '<h5>h5.Heading</h5>',
        h6: '<h6>h6.Heading</h6>',
        code: '<code>Code Placeholder</code>',
      },
      multi: true,
    },
    {
      provide: GT_NODE_DEFAULT_CONFIG,
      multi: true,
      useFactory: gtTextConfigMap,
    },
  ],
})
export class GtTypographyModule {}
