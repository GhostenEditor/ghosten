// module
import { NgModule, Optional } from '@angular/core';
import { BidiModule } from '@angular/cdk/bidi';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';

import { Core, IGtNode, Property, Style } from '@ghosten/common';
import { BlackboardComponent } from './components/frames/blackboard.component';
import { EditAbstractComponent } from './components/items/abstract.component';
import { NavbarComponent } from './components/frames/navbar.component';
import { SidebarModule } from './components/sidebar/sidebar.module';

import {
  CommonSourceService,
  EditorSettingService,
  EventsService,
} from './services';
import { DragDirective, TemplateDirective, TooltipModule } from './directives';
import {
  GT_AUTH_CONFIG,
  GT_DEFAULT_CONFIG,
  GT_EDIT_COMPONENT_MAP,
  GT_ELEMENT_LISTS,
  GT_INTERNAL_ELEMENT_LISTS,
  GT_NODE_DEFAULT_CONFIG,
  GT_TEMPLATE_MAP,
  PROPERTY_EDIT_EVENT,
} from './injectors';
import {
  GT_NODE_INTERNAL_CONFIG_LIST_MAP,
  GT_NODE_INTERNAL_DEFAULT_CONFIG_MAP,
} from './injectors-internal';
import { DataBindingPipe } from './components/items/data-binding.pipe';
import { ElementList } from './types';
import { GtEdit } from './classes';
import { GtEditComponent } from './gt-edit.component';
import { PageStructureModule } from './modules/page-structure';
import { PanModule } from './modules/pan';
import { ResizeModule } from './modules/resize';
import { ZoomModule } from './modules/zoom';
import { authConfig } from './configs';

// class
@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    PortalModule,
    BidiModule,
    SidebarModule,
    DragDropModule,
    TooltipModule,
    ResizeModule,
    PageStructureModule,
    ZoomModule,
    PanModule,
  ],
  declarations: [
    GtEditComponent,
    BlackboardComponent,
    NavbarComponent,
    EditAbstractComponent,
    DragDirective,
    TemplateDirective,
    DataBindingPipe,
  ],
  exports: [GtEditComponent, TemplateDirective, DataBindingPipe],
  providers: [
    GtEdit,
    CommonSourceService,
    EventsService,
    EditorSettingService,
    {
      provide: GT_DEFAULT_CONFIG,
      useValue: {
        exitUrl: '/test', // '/system/menu'
      },
    },
    {
      provide: GT_AUTH_CONFIG,
      useValue: authConfig,
    },
    {
      provide: GT_EDIT_COMPONENT_MAP,
      useValue: {},
      multi: true,
    },
    {
      provide: GT_NODE_DEFAULT_CONFIG,
      useValue: {},
      multi: true,
    },
    {
      provide: PROPERTY_EDIT_EVENT,
      useValue() {},
      multi: true,
    },
    {
      provide: GT_TEMPLATE_MAP,
      useValue: {},
      multi: true,
    },
    {
      provide: GT_INTERNAL_ELEMENT_LISTS,
      useFactory(
        gtElementLists: ElementList[] | null,
        componentMap: any,
        defaultConfig: any,
        templateMap: any,
        gt: GtEdit,
      ) {
        componentMap = Object.assign({}, ...componentMap);
        defaultConfig = Object.assign({}, ...defaultConfig);
        templateMap = Object.assign({}, ...templateMap);
        if (!gtElementLists) {
          gt.log.next({
            type: 'error',
            message: `未配置 ${GT_ELEMENT_LISTS.toString()}`,
            data: null,
          });
          return [];
        }
        gtElementLists.forEach(elementLists => {
          elementLists.elements.forEach(element => {
            const type = element.type;
            if (!componentMap[type]) {
              element.disabled = true;
              gt.log.next({
                type: 'error',
                message: `Type 为 ${type} 的组件未设置 Component`,
                data: null,
              });
            }
            if (!defaultConfig[type]) {
              element.disabled = true;
              gt.log.next({
                type: 'error',
                message: `Type 为 ${type} 的组件未设置默认配置`,
                data: null,
              });
            }
            if (!templateMap[type]) {
              gt.log.next({
                type: 'warn',
                message: `Type 为 ${type} 的组件未设置预览组件`,
                data: null,
              });
            }
          });
        });
        return gtElementLists;
      },
      deps: [
        [new Optional(), GT_ELEMENT_LISTS],
        GT_EDIT_COMPONENT_MAP,
        GT_NODE_DEFAULT_CONFIG,
        GT_TEMPLATE_MAP,
        GtEdit,
      ],
    },
    {
      provide: GT_NODE_INTERNAL_CONFIG_LIST_MAP,
      useFactory: (defaultConfig: Record<string, Map<string, any>>[]) => {
        const map = new Map();
        defaultConfig.forEach(config => {
          for (const configKey in config) {
            map.set(configKey, config[configKey]);
          }
        });
        return map;
      },
      deps: [GT_NODE_DEFAULT_CONFIG],
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
                config[configKey]
                  .get('property')
                  .reduce((acc: any, cur: any) => {
                    acc[cur.name] = cur.value === undefined ? null : cur.value;
                    return acc;
                  }, {}),
              ),
              style: Style.create(
                config[configKey].get('style')!.reduce((acc: any, cur: any) => {
                  acc[cur.name] = cur.value === undefined ? null : cur.value;
                  return acc;
                }, {}),
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
export class GtEditCoreModule {}
