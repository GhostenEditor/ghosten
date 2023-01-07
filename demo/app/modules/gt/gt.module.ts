import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GT_EDITOR_BRAND, GtEditCoreModule } from '@ghosten/editor';
import { GtComponentsEditorModule } from '@ghosten/components/editor';
import { GtComponentsRendererModule } from '@ghosten/components/renderer';
import { GtPluginModule } from '@ghosten/plugins';
import { GtRenderCoreModule } from '@ghosten/renderer';

import { EditComponent } from './edit.component';
import { EditResovle } from './edit.resovle';
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
        redirectTo: '/404',
        pathMatch: 'full',
      },
      {
        path: ':id',
        component: EditComponent,
        resolve: { data: EditResovle },
      },
    ]),
  ],
  declarations: [EditComponent, RenderComponent],
  providers: [
    EditResovle,
    {
      provide: GT_EDITOR_BRAND,
      useValue: {
        title: 'GHOSTEN',
        href: '/',
        src: 'assets/icons/128.png',
        alt: 'Ghosten Logo',
        click() {
          location.replace(document.querySelector('base')!.href);
        },
      },
    },
  ],
})
export class GtModule {}
