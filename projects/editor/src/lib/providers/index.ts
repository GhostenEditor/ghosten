import { Optional, Provider } from '@angular/core';

import { Core, IGtNode, Property, Style, gtBaseConfigMap } from '@ghosten/common';

import {
  GT_AUTH_CONFIG,
  GT_DEFAULT_CONFIG,
  GT_EDITOR_BRAND,
  GT_EDITOR_THEME_COLOR,
  GT_EDIT_COMPONENT_MAP,
  GT_ELEMENT_LISTS,
  GT_INTERNAL_ELEMENT_LISTS,
  GT_NODE_DEFAULT_CONFIG,
  GT_TEMPLATE_MAP,
  TOP_BAR_BUTTONS,
} from '../injectors';
import { GT_NODE_INTERNAL_CONFIG_LIST_MAP, GT_NODE_INTERNAL_DEFAULT_CONFIG_MAP } from '../injectors-internal';
import { DivisionComponent } from '../components/items/division.component';
import { ElementList } from '../types';
import { EventsService } from '../services';
import { GtEdit } from '../classes';
import { authConfig } from '../configs';

export const providers: Provider[] = [
  GtEdit,
  EventsService,
  {
    provide: GT_EDITOR_BRAND,
    useValue: {
      title: 'GHOSTEN',
      src: 'assets/icons/128.png',
      alt: 'Ghosten Logo',
      click() {},
    },
  },
  {
    provide: GT_EDITOR_THEME_COLOR,
    useValue: () => 'light',
  },
  {
    provide: GT_DEFAULT_CONFIG,
    useValue: {
      exitUrl: '/test',
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
    provide: GT_TEMPLATE_MAP,
    useValue: {},
    multi: true,
  },
  {
    provide: TOP_BAR_BUTTONS,
    useFactory: (gt: GtEdit) => [
      {
        title: $localize`:Top Bar Button\: Undo:撤销`,
        icon: 'rotate_ccw',
        get disabled() {
          return !gt.history.get().length;
        },
        onclick: () => {
          gt.undo();
        },
      },
      {
        title: $localize`:Top Bar Button\: Redo:重做`,
        icon: 'rotate_cw',
        get disabled() {
          return !gt.undoHistory.get().length;
        },
        onclick: () => {
          gt.redo();
        },
      },
      {
        title: $localize`:Top Bar Button\: Reference Line:参考线`,
        icon: 'dashed_rect',
        get active() {
          return gt.showReferenceLine;
        },
        onclick() {
          gt.showReferenceLine = !gt.showReferenceLine;
        },
      },
      {
        title: $localize`:Top Bar Button\: Preview:预览`,
        icon: 'preview',
        onclick: () => {
          gt.events.TOP_BUTTON_CLICK.emit({
            button: {
              name: 'preview',
            },
            data: gt.exportString(),
          });
        },
      },
      {
        title: $localize`:Top Bar Button\: Save:保存`,
        icon: 'save',
        onclick: () => {
          gt.events.TOP_BUTTON_CLICK.emit({
            button: {
              name: 'save',
            },
            data: { config: gt.exportString(), settings: gt.exportSettings() },
          });
        },
      },
    ],
    deps: [GtEdit],
  },
  {
    provide: GT_EDIT_COMPONENT_MAP,
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
    provide: GT_NODE_DEFAULT_CONFIG,
    useFactory: gtBaseConfigMap,
    multi: true,
  },
  {
    provide: GT_ELEMENT_LISTS,
    useValue: {
      title: $localize`:Element Group Title\: Layout:布局`,
      elements: [
        {
          label: $localize`:Element Label\: Row:行布局`,
          type: 'division',
          icon: 'row',
          content: {
            style: {
              display: 'flex',
            },
          },
        },
        {
          label: $localize`:Element Label\: Column:列布局`,
          type: 'division',
          icon: 'column',
        },
        {
          label: $localize`:Element Label\: Division:普通布局`,
          type: 'division',
          icon: 'division',
        },
      ],
    },
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
              type: 'warning',
              message: `Type 为 ${type} 的组件未设置预览组件`,
              data: null,
            });
          }
        });
      });
      return gtElementLists;
    },
    deps: [[new Optional(), GT_ELEMENT_LISTS], GT_EDIT_COMPONENT_MAP, GT_NODE_DEFAULT_CONFIG, GT_TEMPLATE_MAP, GtEdit],
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
    useFactory: (defaultConfig: Record<string, Map<string, any>>[]): IGtNode.DefaultConfigMap => {
      const map = new Map();
      defaultConfig.forEach(config => {
        for (const configKey in config) {
          map.set(configKey, {
            core: Core.create(config[configKey].get('core')!),
            property: Property.create(
              config[configKey].get('property').reduce((acc: any, cur: any) => {
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
];
