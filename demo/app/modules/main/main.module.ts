import { ROUTES, Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { GtComponentsRendererModule } from '@ghosten/components/renderer';
import { GtRenderCoreModule } from '@ghosten/renderer';

import { ErrorComponent } from './error.component';
import { MainComponent } from './main.component';
import { MainService } from '../../providers/main.service';
import { NavigationModule } from './navigation/navigation.module';
import { TemplateComponent } from './template.component';
import { TemplateResolve } from './main.resovle';

@NgModule({
  imports: [
    RouterModule,
    NavigationModule,
    GtRenderCoreModule,
    GtComponentsRendererModule,
  ],
  declarations: [MainComponent, ErrorComponent, TemplateComponent],
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
