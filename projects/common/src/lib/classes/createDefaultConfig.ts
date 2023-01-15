import { FormItemModel, IGtNode } from '../types';

const commonCore = {
  canHasChild: false,
  canPaste: true,
  canCopy: true,
  canDelete: true,
  canCut: true,
  canCopyStyle: true,
  canPasteStyle: true,
  dynamicTemplate: false,
};
const commonProperty: FormItemModel[] = [{ name: 'show', label: '显示', type: 'switch', value: true }];
const commonStyle: FormItemModel[] = [
  {
    label: '宽度',
    name: 'width',
    type: 'numberHasUnit',
  },
  {
    label: '高度',
    name: 'height',
    type: 'numberHasUnit',
  },
  {
    label: '内边距',
    name: 'padding',
    type: 'fourNumbers',
  },
  {
    label: '外边距',
    name: 'margin',
    type: 'fourNumbers',
  },
  {
    label: 'Display',
    name: 'display',
    type: 'select',
    options: [
      { label: 'inline', value: 'inline' },
      { label: 'inline-block', value: 'inline-block' },
      { label: 'block', value: 'block' },
      { label: 'flex', value: 'flex' },
    ],
  },
  {
    label: 'Position',
    name: 'position',
    type: 'select',
    options: [
      { label: 'static', value: 'static' },
      { label: 'relative', value: 'relative' },
      { label: 'absolute', value: 'absolute' },
      { label: 'fixed', value: 'fixed' },
    ],
  },
  {
    label: 'Float',
    name: 'float',
    type: 'select',
    options: [
      { label: 'none', value: 'none' },
      { label: 'left', value: 'left' },
      { label: 'right', value: 'right' },
    ],
  },
  {
    label: 'Overflow',
    name: 'overflow',
    type: 'select',
    options: [
      { label: 'auto', value: 'auto' },
      { label: 'visible', value: 'visible' },
      { label: 'hidden', value: 'hidden' },
      { label: 'scroll', value: 'scroll' },
    ],
  },
  {
    label: 'Left',
    name: 'left',
    type: 'numberHasUnit',
  },
  {
    label: 'Top',
    name: 'top',
    type: 'numberHasUnit',
  },
  {
    label: 'Right',
    name: 'right',
    type: 'numberHasUnit',
  },
  {
    label: 'Bottom',
    name: 'bottom',
    type: 'numberHasUnit',
  },
  {
    label: 'Z-Index',
    name: 'zIndex',
    type: 'number',
  },
  {
    name: 'color',
    type: 'color',
  },
  {
    name: 'background',
    type: 'color',
  },
  {
    name: 'flexDirection',
    type: 'select',
    options: [
      { label: 'row', value: 'row' },
      { label: 'column', value: 'column' },
      { label: 'row-reverse', value: 'row-reverse' },
      { label: 'column-reverse', value: 'column-reverse' },
    ],
  },
  {
    name: 'flexGrow',
    type: 'number',
  },
  {
    name: 'flexShrink',
    type: 'number',
  },
];

const commonAction: Record<string, IGtNode.Action[]> = {
  onInit: [],
  onDestroy: [],
};

export interface DefaultConfig {
  core?: Partial<typeof commonCore>;
  property?: FormItemModel[];
  style?: FormItemModel[];
  action?: Record<string, IGtNode.Action[]>;
  rights?: boolean;
  validator?: any[] | boolean;
}

export function createDefaultConfig(defaultConfig: DefaultConfig): Map<string, any> {
  const { core = {}, property = [], style = [], action = [], rights = false, validator = false } = defaultConfig;
  const configMap = new Map<string, any>();
  configMap.set('core', { ...commonCore, ...core });
  configMap.set('property', mergeSameItem([...commonProperty, ...(Array.isArray(property) ? property : [])]));
  configMap.set('style', mergeSameItem([...commonStyle, ...(Array.isArray(style) ? style : [])]));
  configMap.set('action', { ...commonAction, ...action });
  configMap.set('rights', rights);
  configMap.set('validator', validator);
  return configMap;
}

function mergeSameItem(items: FormItemModel[]): FormItemModel[] {
  const itemsMap = new Map<string, FormItemModel>();
  items.forEach(item => {
    if (itemsMap.has(item.name)) {
      itemsMap.set(item.name, { ...itemsMap.get(item.name), ...item });
    } else {
      itemsMap.set(item.name, item);
    }
  });
  return Array.from(itemsMap.values());
}
