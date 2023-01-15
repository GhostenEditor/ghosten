import { NgModule } from '@angular/core';

import { GtBaseEditModule } from './base/gt-base-edit.module';
import { GtContainerEditModule } from './container/gt-container-edit.module';
import { GtFormEditModule } from './form/gt-form-edit.module';
import { GtGaugeEditModule } from './gauge/gt-gauge-edit.module';

@NgModule({
  exports: [GtContainerEditModule, GtBaseEditModule, GtFormEditModule, GtGaugeEditModule],
})
export class GtComponentsEditorModule {}
