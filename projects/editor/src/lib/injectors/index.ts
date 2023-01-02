import { InjectionToken } from '@angular/core';

import {
  EditorBrand,
  ElementList,
  GtAuth,
  GtConfig,
  GtContextMenu,
  TopBarButton,
} from '../types';
import { ComponentType } from '@angular/cdk/overlay';

export const GT_CONTEXTMENU = new InjectionToken<GtContextMenu>(
  'Gt ContextMenu',
);
export const GT_DEFAULT_CONFIG = new InjectionToken<GtConfig>(
  'gt-default-options',
);
export const GT_ELEMENT_LISTS = new InjectionToken<ElementList[]>(
  'gt-element-lists',
);
export const GT_AUTH_CONFIG = new InjectionToken<GtAuth>('gt-auth-config');
export const TOP_BAR_BUTTONS = new InjectionToken<TopBarButton[]>(
  'Top Bar Buttons',
);
export const PROPERTY_EDIT_EVENT = new InjectionToken(
  'Property edit event trigger',
);
export const GT_EDIT_COMPONENT_MAP = new InjectionToken<
  Record<string, ComponentType<any>>
>('Ghosten Edit Component Map');
export const GT_TEMPLATE_MAP = new InjectionToken<Record<string, string>>(
  'Ghosten Template Map',
);
export const GT_INTERNAL_ELEMENT_LISTS = new InjectionToken<ElementList[]>(
  'Ghosten Internal Element Lists',
);
export const GT_NODE_DEFAULT_CONFIG = new InjectionToken<
  Record<string, Map<string, any>>
>('Gt Node Default Config');
export const GT_EDITOR_BRAND = new InjectionToken<EditorBrand>(
  'Ghosten Editor Brand',
);
