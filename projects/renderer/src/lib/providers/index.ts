import { Provider } from '@angular/core';

import { Core, IGtNode, Property, Style, gtBaseConfigMap } from '@ghosten/common';

import {
  GT_NODE_DEFAULT_CONFIG,
  GT_NODE_INTERNAL_DEFAULT_CONFIG_MAP,
  GT_RENDER_COMPONENT_MAP,
  GT_RENDER_DIRECTIVE_MAP,
} from '../injectors';
import { DivisionComponent } from '../components/division.component';
import { ForComponent } from '../components/for.component';
import { GlobalVariableService } from '../components/global-variable.service';
import { IfComponent } from '../components/if.component';

export const providers: Provider[] = [
  GlobalVariableService,
  {
    provide: GT_NODE_DEFAULT_CONFIG,
    multi: true,
    useFactory: gtBaseConfigMap,
  },
  {
    provide: GT_RENDER_COMPONENT_MAP,
    useValue: {},
    multi: true,
  },
  {
    provide: GT_RENDER_COMPONENT_MAP,
    useValue: {
      root: DivisionComponent,
      division: DivisionComponent,
      template: DivisionComponent,
      slot: DivisionComponent,
      outlet: DivisionComponent,
    },
    multi: true,
  },
  {
    provide: GT_RENDER_DIRECTIVE_MAP,
    useValue: {
      if: IfComponent,
      for: ForComponent,
    },
  },
  {
    provide: GT_NODE_INTERNAL_DEFAULT_CONFIG_MAP,
    useFactory: (defaultConfig: Record<string, Map<string, any>>[]): IGtNode.DefaultConfigMap => {
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
];
