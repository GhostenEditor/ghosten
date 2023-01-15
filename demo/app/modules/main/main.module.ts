import { ROUTES, Route, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GtComponentsEditorModule } from '@ghosten/components/editor';
import { GtComponentsRendererModule } from '@ghosten/components/renderer';
import { GtEditCoreModule } from '@ghosten/editor';
import { GtRenderCoreModule } from '@ghosten/renderer';
import { GtPluginModule } from '@ghosten/plugins';

import { ErrorComponent } from './error.component';
import { FooterComponent } from './footer.component';
import { HomeComponent } from './home.component';
import { MainComponent } from './main.component';
import { MainService } from '../../providers/main.service';
import { NavbarComponent } from './navbar.component';
import { NavigationModule } from '../navigation/navigation.module';
import { OffcanvasComponent } from './offcanvas.component';
import { TemplateComponent } from './template.component';
import { TemplateResolve } from './template.resovle';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NavigationModule,
    GtEditCoreModule,
    GtRenderCoreModule,
    // GtComponentsEditorModule,
    GtComponentsRendererModule,
    // GtPluginModule,
  ],
  declarations: [
    MainComponent,
    NavbarComponent,
    ErrorComponent,
    TemplateComponent,
    FooterComponent,
    OffcanvasComponent,
    HomeComponent,
  ],
  providers: [
    {
      provide: ROUTES,
      multi: true,
      useFactory: (mainService: MainService): Route[] => [
        {
          path: '',
          component: MainComponent,
          children: [
            {
              path: '',
              component: HomeComponent,
            },
            {
              path: '404',
              component: ErrorComponent,
            },
            ...mainService.generateRoutes(TemplateComponent, TemplateResolve),
          ],
        },
      ],
      deps: [MainService],
    },
    TemplateResolve,
  ],
})
export class MainModule {}
