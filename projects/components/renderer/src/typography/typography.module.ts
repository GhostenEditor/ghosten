import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GT_NODE_DEFAULT_CONFIG, GT_RENDER_COMPONENT_MAP, GtRenderCoreModule } from '@ghosten/renderer';
import { gtTextConfigMap } from '@ghosten/components';

import { CodeComponent } from './code.component';
import { H1Component } from './h1.component';
import { H2Component } from './h2.component';
import { H3Component } from './h3.component';
import { H4Component } from './h4.component';
import { H5Component } from './h5.component';
import { H6Component } from './h6.component';

@NgModule({
  imports: [CommonModule, GtRenderCoreModule],
  declarations: [H1Component, H2Component, H3Component, H4Component, H5Component, H6Component, CodeComponent],
  providers: [
    {
      provide: GT_RENDER_COMPONENT_MAP,
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
      provide: GT_NODE_DEFAULT_CONFIG,
      multi: true,
      useFactory: gtTextConfigMap,
    },
  ],
})
export class GtTypographyModule {}
