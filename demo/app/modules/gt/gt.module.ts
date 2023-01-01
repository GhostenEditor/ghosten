import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GtComponentsEditorModule } from '@ghosten/components/editor';
import { GtComponentsRendererModule } from '@ghosten/components/renderer';
import { GtEditCoreModule } from '@ghosten/editor';
import { GtPluginModule } from '@ghosten/plugins';
import { GtRenderCoreModule } from '@ghosten/renderer';

import { EditComponent } from './edit.component';
import { RenderComponent } from './render.component';

@NgModule({
  imports: [
    GtEditCoreModule,
    GtRenderCoreModule,
    GtComponentsEditorModule,
    GtComponentsRendererModule,
    GtPluginModule,
    RouterModule.forChild([
      {
        path: '',
        component: EditComponent,
      },
    ]),
  ],
  declarations: [EditComponent, RenderComponent],
})
export class GtModule {}
