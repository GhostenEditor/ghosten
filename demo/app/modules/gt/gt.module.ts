import { Router, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { GT_EDITOR_BRAND, GT_EDITOR_THEME_COLOR, GtEditCoreModule } from '@ghosten/editor';
import { GtComponentsEditorModule } from '@ghosten/components/editor';
import { GtComponentsRendererModule } from '@ghosten/components/renderer';
import { GtPluginModule } from '@ghosten/plugins';
import { GtRenderCoreModule } from '@ghosten/renderer';

import { EditComponent } from './edit.component';
import { EditResolve } from './edit.resolve';
import { ModalModule } from '../modal/modal.module';
import { RenderComponent } from './render.component';

@NgModule({
  imports: [
    GtEditCoreModule,
    GtRenderCoreModule,
    GtComponentsEditorModule,
    GtComponentsRendererModule,
    GtPluginModule,
    ModalModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo: '/404',
        pathMatch: 'full',
      },
      {
        path: ':id',
        component: EditComponent,
        resolve: { data: EditResolve },
      },
    ]),
  ],
  declarations: [EditComponent, RenderComponent],
  providers: [
    EditResolve,
    {
      provide: GT_EDITOR_BRAND,
      useFactory: (router: Router) => ({
        title: 'GHOSTEN',
        href: '/',
        src: 'assets/icons/128.png',
        alt: 'Ghosten Logo',
        click() {
          router.navigateByUrl('/').then();
        },
      }),
      deps: [Router],
    },
    {
      provide: GT_EDITOR_THEME_COLOR,
      useValue: () => document.documentElement.dataset.bsTheme,
    },
  ],
})
export class GtModule {}
