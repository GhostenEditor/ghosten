import { NgModule } from '@angular/core';

import { GtBaseRenderModule } from './base/gt-base-render.module';
import { GtContainerRenderModule } from './container/gt-container-render.module';
import { GtFormRenderModule } from './form/gt-form-render.module';
import { GtGaugeRenderModule } from './gauge/gt-gauge-render.module';

@NgModule({
  exports: [GtContainerRenderModule, GtBaseRenderModule, GtGaugeRenderModule, GtFormRenderModule],
})
export class GtComponentsRendererModule {}
