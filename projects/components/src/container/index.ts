import { createDefaultConfig } from '@ghosten/common';

export interface CardProperty {
  showTitle: boolean;
}

export const gtContainerConfigMap = () => {
  const card = createDefaultConfig({
    core: {
      canHasChild: true,
    },
    style: [
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
    property: [
      {
        label: '标题',
        name: 'title',
        type: 'text',
        value: '标题',
        canBind: true,
      },
      {
        label: '显示标题',
        name: 'showTitle',
        type: 'toggle',
        value: true,
      },
    ],
  });
  const accordion = createDefaultConfig({
    core: {
      canHasChild: true,
      dynamicTemplate: true,
    },
    style: [
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
    property: [
      {
        label: 'Multi',
        name: 'multi',
        type: 'toggle',
      },
      {
        label: 'Items',
        name: 'accordionItems',
        type: 'button',
      },
    ],
  });
  const alert = createDefaultConfig({
    core: {
      canHasChild: true,
    },
    property: [
      {
        name: 'type',
        type: 'select',
        value: 'primary',
        options: [
          { label: 'primary', value: 'primary' },
          { label: 'secondary', value: 'secondary' },
          { label: 'success', value: 'success' },
          { label: 'danger', value: 'danger' },
          { label: 'warning', value: 'warning' },
          { label: 'info', value: 'info' },
          { label: 'light', value: 'light' },
          { label: 'dark', value: 'dark' },
        ],
      },
      {
        name: 'dismissible',
        type: 'toggle',
        value: false,
      },
    ],
  });
  const buttonGroup = createDefaultConfig({
    core: {
      canHasChild: true,
      acceptedChildType: ['buttonGroup', 'button'],
    },
    property: [
      {
        type: 'select',
        name: 'size',
        value: '',
        options: [
          { label: 'Large', value: 'lg' },
          { label: 'Default', value: '' },
          { label: 'Small', value: 'sm' },
        ],
      },
      {
        type: 'select',
        name: 'orientation',
        value: 'horizontal',
        options: [
          { label: 'Horizontal', value: 'horizontal' },
          { label: 'Vertical', value: 'vertical' },
        ],
      },
    ],
  });
  return {
    card,
    accordion,
    alert,
    buttonGroup,
  };
};
