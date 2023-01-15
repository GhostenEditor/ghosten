import { InjectionToken, Type } from '@angular/core';

export const GT_NODE_INTERNAL_DEFAULT_CONFIG_MAP = new InjectionToken<Map<string, any>>('Gt Node 默认属性配置');
export const GT_NODE_DEFAULT_CONFIG = new InjectionToken<Record<string, Map<string, any>>>('Gt Node Default Config');
export const GT_RENDER_COMPONENT_MAP = new InjectionToken<Record<string, Type<any>>>('Gt Render Component Map');
export const GT_RENDER_DIRECTIVE_MAP = new InjectionToken<Record<string, Type<any>>>('Gt Render Directive Map');
