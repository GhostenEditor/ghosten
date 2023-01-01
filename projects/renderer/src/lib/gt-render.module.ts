// module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PortalModule } from '@angular/cdk/portal';

import { Core, IGtNode, Property, Style } from '@ghosten/common';

// class
import {
  GT_NODE_DEFAULT_CONFIG,
  GT_NODE_INTERNAL_DEFAULT_CONFIG_MAP,
  GT_RENDER_COMPONENT_MAP,
} from './injectors';
import {
  TemplateComponent,
  TemplateDirective,
} from './directives/template.directive';
import { DataBindingPipe } from './components/data-binding.pipe';
import { FormAbstractComponent } from './components/form-abstract.component';
import { GlobalVariableService } from './components/global-variable.service';
import { GtRenderComponent } from './gt-render.component';
import { RenderAbstractComponent } from './components/abstract.component';

// component

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PortalModule],
  declarations: [
    GtRenderComponent,
    RenderAbstractComponent,
    TemplateComponent,
    FormAbstractComponent,
    TemplateDirective,
    DataBindingPipe,
  ],
  exports: [GtRenderComponent, TemplateDirective, DataBindingPipe],
  providers: [
    GlobalVariableService,
    {
      provide: GT_RENDER_COMPONENT_MAP,
      useValue: {},
      multi: true,
    },
    {
      provide: GT_NODE_INTERNAL_DEFAULT_CONFIG_MAP,
      useFactory: (
        defaultConfig: Record<string, Map<string, any>>[],
      ): IGtNode.DefaultConfigMap => {
        const map = new Map();
        defaultConfig.forEach(config => {
          for (const configKey in config) {
            map.set(configKey, {
              core: Core.create(config[configKey].get('core')!),
              property: Property.create(
                config[configKey].get('property').reduce(
                  (acc: any, cur: any) => ({
                    ...acc,
                    [cur.name]: cur.value === undefined ? null : cur.value,
                  }),
                  {},
                ),
              ),
              style: Style.create(
                config[configKey].get('style')!.reduce(
                  (acc: any, cur: any) => ({
                    ...acc,
                    [cur.name]: cur.value === undefined ? null : cur.value,
                  }),
                  {},
                ),
              ),
              action: config[configKey].get('action'),
              rights: config[configKey].get('rights'),
              validator: config[configKey].get('validator'),
            });
          }
        });
        return map;
      },
      deps: [GT_NODE_DEFAULT_CONFIG],
    },
  ],
})
export class GtRenderCoreModule {}
