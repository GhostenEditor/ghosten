import { createDefaultConfig } from '@ghosten/common';

export interface AlertProperty {
  dismissible: boolean;
  type: string;
}

export interface CardProperty {
  showHeader: boolean;
  showBody: boolean;
  showFooter: boolean;
  showListGroup: boolean;
  title: string;
  style: string;
  topImage: string;
  bottomImage: string;
  align: string;
}

export interface NavProperty {
  style: string;
  fill: string;
  align: string;
  items: { tab: string; active: boolean; disabled: boolean }[];
}

export interface ListGroup {
  horizontal: boolean;
  flush: boolean;
  numbered: boolean;
}

export interface ListGroupItem {
  active: boolean;
  disabled: boolean;
  action: boolean;
  style: string;
}

export interface AccordionProperty {
  multi: boolean;
  accordionItems: {
    id: string;
    title: string;
    expanded: boolean;
  }[];
}

export const gtContainerConfigMap = () => {
  const card = createDefaultConfig({
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
      {
        name: 'display',
        type: 'select',
        value: 'block',
      },
    ],
    property: [
      {
        label: $localize`:Property Label\: Show Title:显示标题`,
        name: 'showHeader',
        type: 'switch',
      },
      {
        label: $localize`:Property Label\: Title:标题`,
        name: 'title',
        type: 'text',
        value: 'Title',
        canBind: true,
      },
      {
        label: $localize`:Property Label\: Show Body:显示Body`,
        name: 'showBody',
        type: 'switch',
        value: true,
      },
      {
        label: $localize`:Property Label\: Show Footer:显示底栏`,
        name: 'showFooter',
        type: 'switch',
      },
      {
        label: $localize`:Property Label\: Show List Group:显示列表`,
        name: 'showListGroup',
        type: 'switch',
      },
      {
        label: $localize`:Property Label\: Style:样式`,
        name: 'style',
        type: 'select',
        options: [
          { label: 'bg-primary', value: 'text-bg-primary' },
          { label: 'bg-secondary', value: 'text-bg-secondary' },
          { label: 'bg-success', value: 'text-bg-success' },
          { label: 'bg-danger', value: 'text-bg-danger' },
          { label: 'bg-warning', value: 'text-bg-warning' },
          { label: 'bg-info', value: 'text-bg-info' },
          { label: 'bg-light', value: 'text-bg-light' },
          { label: 'bg-dark', value: 'text-bg-dark' },
          { label: 'border-primary', value: 'border-primary' },
          { label: 'border-secondary', value: 'border-secondary' },
          { label: 'border-success', value: 'border-success' },
          { label: 'border-danger', value: 'border-danger' },
          { label: 'border-warning', value: 'border-warning' },
          { label: 'border-info', value: 'border-info' },
          { label: 'border-light', value: 'border-light' },
          { label: 'border-dark', value: 'border-dark' },
        ],
      },
      {
        label: 'Align',
        name: 'align',
        type: 'select',
        options: [
          { label: 'start', value: 'text-start' },
          { label: 'center', value: 'text-center' },
          { label: 'end', value: 'text-end' },
        ],
      },
      {
        label: $localize`:Property Label\: Top Image:顶部图片`,
        name: 'topImage',
        type: 'textarea',
      },
      {
        label: $localize`:Property Label\: Bottom Image:底部图片`,
        name: 'bottomImage',
        type: 'textarea',
      },
    ],
  });
  const accordion = createDefaultConfig({
    core: {
      canHasChild: true,
      dynamicTemplate: true,
    },
    property: [
      {
        label: 'Multi',
        name: 'multi',
        type: 'switch',
      },
      {
        label: 'Items',
        name: 'accordionItems',
        type: 'table',
        columns: [
          { name: 'Header', prop: 'title', value: null },
          { name: 'ID', prop: 'id', value: null },
          { name: 'Expanded', prop: 'expanded', type: 'switch', value: false },
        ],
        value: [],
      },
    ],
  });
  const alert = createDefaultConfig({
    core: {
      canHasChild: true,
    },
    property: [
      {
        label: 'Type',
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
        label: 'Dismissible',
        name: 'dismissible',
        type: 'switch',
        value: false,
      },
    ],
  });
  const buttonGroup = createDefaultConfig({
    core: {
      canHasChild: true,
    },
    property: [
      {
        label: 'Size',
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
        label: 'Orientation',
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
  const listGroup = createDefaultConfig({
    core: {
      canHasChild: true,
    },
    property: [
      {
        label: 'Horizontal',
        name: 'horizontal',
        type: 'switch',
      },
      {
        label: 'Flush',
        name: 'flush',
        type: 'switch',
      },
      {
        label: 'Numbered',
        name: 'numbered',
        type: 'switch',
      },
    ],
  });
  const listGroupItem = createDefaultConfig({
    core: {
      canHasChild: true,
    },
    property: [
      {
        label: 'Active',
        name: 'active',
        type: 'switch',
      },
      {
        label: 'Disabled',
        name: 'disabled',
        type: 'switch',
      },
      {
        label: 'Action',
        name: 'action',
        type: 'switch',
      },
      {
        label: $localize`:Property Label\: Style:样式`,
        name: 'style',
        type: 'select',
        options: [
          { label: 'primary', value: 'list-group-item-primary' },
          { label: 'secondary', value: 'list-group-item-secondary' },
          { label: 'success', value: 'list-group-item-success' },
          { label: 'danger', value: 'list-group-item-danger' },
          { label: 'warning', value: 'list-group-item-warning' },
          { label: 'info', value: 'list-group-item-info' },
          { label: 'light', value: 'list-group-item-light' },
          { label: 'dark', value: 'list-group-item-dark' },
        ],
      },
    ],
  });
  const nav = createDefaultConfig({
    property: [
      {
        label: $localize`:Property Label\: Style:样式`,
        name: 'style',
        type: 'select',
        options: [
          { label: 'pills', value: 'nav-pills' },
          { label: 'tabs', value: 'nav-tabs' },
        ],
      },
      {
        label: 'Fill',
        name: 'fill',
        type: 'select',
        options: [
          { label: 'fill', value: 'nav-fill' },
          { label: 'justified', value: 'nav-justified' },
        ],
      },
      {
        label: 'Align',
        name: 'align',
        type: 'select',
        options: [
          { label: 'center', value: 'justify-content-center' },
          { label: 'end', value: 'justify-content-end' },
          { label: 'vertical', value: 'flex-column' },
        ],
      },
      {
        label: 'Items',
        name: 'items',
        type: 'table',
        columns: [
          { name: 'tab', prop: 'tab', type: 'text', value: null },
          { name: 'disabled', prop: 'disabled', type: 'switch', value: null },
          { name: 'active', prop: 'active', type: 'switch', value: null },
        ],
        value: [],
      },
    ],
    style: [{ name: 'display', type: 'select', value: 'block' }],
  });
  return {
    card,
    accordion,
    alert,
    buttonGroup,
    listGroup,
    listGroupItem,
    nav,
  };
};
