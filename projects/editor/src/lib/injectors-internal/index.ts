import { InjectionToken } from '@angular/core';

export const GT_NODE_INTERNAL_CONFIG_LIST_MAP = new InjectionToken<Map<string, Map<string, any>>>(
  'Ghosten Node 配置列表',
);
export const GT_NODE_INTERNAL_DEFAULT_CONFIG_MAP = new InjectionToken<Map<string, any>>('Ghosten Node 默认属性配置');
