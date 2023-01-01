import { createDefaultConfig } from '@ghosten/common';

export const gtBaseConfigMap = () => {
  const root = createDefaultConfig({
    core: {
      canHasChild: true,
    },
    style: [
      {
        label: '高度',
        name: 'height',
        type: 'numberHasUnit',
        // value: '100%',
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
    ],
    rights: false,
    validator: false,
  });
  const division = createDefaultConfig({
    core: { canHasChild: true },
    style: [
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
      {
        name: 'border',
        type: 'border',
      },
    ],
    rights: false,
  });
  const text = createDefaultConfig({
    property: [
      {
        label: '文字',
        name: 'text',
        type: 'textarea',
        value: 'Some Text',
        canBind: true,
      },
      {
        label: '标签',
        name: 'tagName',
        type: 'select',
        value: 'span',
        options: [
          { label: 'h1', value: 'h1' },
          { label: 'h2', value: 'h2' },
          { label: 'h3', value: 'h3' },
          { label: 'h4', value: 'h4' },
          { label: 'h5', value: 'h5' },
          { label: 'h6', value: 'h6' },
          { label: 'p', value: 'p' },
          { label: 'div', value: 'div' },
          { label: 'span', value: 'span' },
          { label: 'label', value: 'label' },
          { label: 'legend', value: 'legend' },
        ],
      },
    ],
    style: [
      {
        label: 'Font Weight',
        name: 'fontWeight',
        type: 'select',
        options: [
          { label: '100', value: '100' },
          { label: '200', value: '200' },
          { label: '300', value: '300' },
          { label: '400', value: '400' },
          { label: '500', value: '500' },
          { label: '600', value: '600' },
          { label: '700', value: '700' },
          { label: '800', value: '800' },
          { label: '900', value: '900' },
        ],
      },
    ],
  });
  const icon = createDefaultConfig({
    property: [
      {
        options: [],
        label: '图标类型',
        name: 'iconType',
        type: 'icon',
      },
    ],
  });
  const template = createDefaultConfig({
    core: {
      canHasChild: true,
      canCopy: true,
      canDelete: true,
      canCut: true,
    },
    style: [
      {
        name: 'background',
        type: 'color',
      },
      {
        name: 'flexDirection',
        type: 'select',
        options: [
          { label: 'horizontal', value: 'horizontal' },
          { label: 'vertical', value: 'vertical' },
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
    ],
    rights: false,
    validator: false,
  });
  const slot = createDefaultConfig({
    core: {
      canHasChild: true,
      canDelete: true,
    },
    style: [
      {
        name: 'background',
        type: 'color',
      },
      {
        name: 'flexDirection',
        type: 'select',
        options: [
          { label: 'horizontal', value: 'horizontal' },
          { label: 'vertical', value: 'vertical' },
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
    ],
    validator: false,
  });
  const outlet = createDefaultConfig({
    core: {
      canHasChild: true,
      canDelete: true,
    },
    validator: false,
  });
  const image = createDefaultConfig({
    property: [
      {
        label: '图片地址',
        type: 'text',
        name: 'src',
      },
      {
        label: 'alt',
        type: 'text',
        name: 'alt',
      },
      {
        label: 'title',
        type: 'text',
        name: 'title',
      },
    ],
  });
  return {
    root,
    division,
    template,
    slot,
    text,
    icon,
    outlet,
    image,
  };
};
