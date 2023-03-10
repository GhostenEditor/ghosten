import { DataBinding, createDefaultConfig } from '@ghosten/common';

export interface ButtonProperty {
  text: string;
  active: boolean | DataBinding;
  disabled: boolean | DataBinding;
}

export interface InputProperty {
  name: string;
  showLabel: boolean;
  labelText: string;
  inputSize: string;
  inputType: 'text' | 'number' | 'password' | 'file';
  readonly: boolean;
  disabled: boolean | DataBinding;
  value: string | number | null;
}

export interface SelectProperty {
  name: string;
  showLabel: boolean;
  labelText: string;
  inputSize: string;
  readonly: boolean;
  multiple: boolean;
  disabled: boolean | DataBinding;
  value: any;
  labelField: string;
  valueField: string;
  options: any[];
}

export interface TextareaProperty {
  name: string;
  showLabel: boolean;
  labelText: string;
  inputSize: string;
  readonly: boolean;
  textareaRows: number;
}

export interface ToggleProperty {
  name: string;
  labelText: string;
  disabled: boolean;
  value: boolean;
}

export interface TextareaProperty {
  name: string;
  labelText: string;
  value: boolean;
  placeholder: string;
}

export interface RadioProperty {
  name: string;
  layout: string;
  showLabel: boolean;
  labelText: string;
  value: string;
  inputType: 'radio' | 'checkbox';
  options: { label: string; value: string }[];
}

export function gtFormConfigMap() {
  const radio = createDefaultConfig({
    property: [
      {
        label: 'Name',
        name: 'name',
        type: 'text',
      },
      {
        label: $localize`:Property Label\: Show Label:显示标签`,
        name: 'showLabel',
        type: 'switch',
      },
      {
        label: $localize`:Property Label\: Label Text:标签文本`,
        name: 'labelText',
        type: 'text',
      },
      {
        label: 'Layout',
        name: 'layout',
        type: 'select',
        options: [
          { label: 'Default', value: '' },
          { label: 'Inline', value: 'config-form-check-inline' },
          { label: 'Reverse', value: 'config-form-check-reverse' },
        ],
      },
      {
        label: 'Value',
        name: 'value',
        type: 'text',
        canBind: true,
      },
      {
        label: 'Options',
        name: 'options',
        type: 'table',
        columns: [
          { prop: 'label', name: 'label', value: null },
          { prop: 'value', name: 'value', value: null },
        ],
        canBind: true,
        value: [],
      },
    ],
  });
  const checkbox = createDefaultConfig({
    property: [
      {
        label: 'Name',
        name: 'name',
        type: 'text',
      },
      {
        label: $localize`:Property Label\: Show Label:显示标签`,
        name: 'showLabel',
        type: 'switch',
      },
      {
        label: $localize`:Property Label\: Label Text:标签文本`,
        name: 'labelText',
        type: 'text',
      },
      {
        label: 'Layout',
        name: 'layout',
        type: 'select',
        options: [
          { label: 'Default', value: '' },
          { label: 'Inline', value: 'config-form-check-inline' },
          { label: 'Reverse', value: 'config-form-check-reverse' },
        ],
      },
      {
        label: 'Value',
        name: 'value',
        type: 'text',
        canBind: true,
      },
      {
        label: 'Options',
        name: 'options',
        type: 'table',
        columns: [
          { prop: 'label', name: 'label', value: null },
          { prop: 'value', name: 'value', value: null },
        ],
        value: [],
        canBind: true,
      },
    ],
  });
  const toggle = createDefaultConfig({
    property: [
      {
        label: 'Name',
        name: 'name',
        type: 'text',
      },
      {
        label: $localize`:Property Label\: Label Text:标签文本`,
        name: 'labelText',
        type: 'text',
      },
      {
        label: $localize`:Property Label\: Disabled:禁用`,
        name: 'disabled',
        type: 'switch',
      },
      {
        label: 'Value',
        name: 'value',
        type: 'switch',
      },
    ],
  });
  const button = createDefaultConfig({
    property: [
      {
        label: $localize`:Property Label\: Text:文字`,
        name: 'text',
        type: 'text',
        value: 'Button',
        canBind: true,
      },
      {
        label: $localize`:Property Label\: Size:尺寸`,
        name: 'buttonSize',
        type: 'select',
        options: [
          { label: 'lg', value: 'btn-lg' },
          { label: 'md', value: '' },
          { label: 'sm', value: 'btn-sm' },
        ],
      },
      {
        label: $localize`:Property Label\: Color:颜色`,
        name: 'buttonColor',
        type: 'select',
        value: 'btn-primary',
        options: [
          { label: 'primary', value: 'btn-primary' },
          { label: 'secondary', value: 'btn-secondary' },
          { label: 'success', value: 'btn-success' },
          { label: 'warning', value: 'btn-warning' },
          { label: 'danger', value: 'btn-danger' },
          { label: 'info', value: 'btn-info' },
          { label: 'light', value: 'btn-light' },
          { label: 'dark', value: 'btn-dark' },
          { label: 'link', value: 'btn-link' },
          { label: 'primary-outline', value: 'btn-outline-primary' },
          { label: 'secondary-outline', value: 'btn-outline-secondary' },
          { label: 'success-outline', value: 'btn-outline-success' },
          { label: 'warning-outline', value: 'btn-outline-warning' },
          { label: 'danger-outline', value: 'btn-outline-danger' },
          { label: 'info-outline', value: 'btn-outline-info' },
          { label: 'light-outline', value: 'btn-outline-light' },
          { label: 'dark-outline', value: 'btn-outline-dark' },
        ],
      },
      {
        label: $localize`:Property Label\: Disabled:禁用`,
        name: 'disabled',
        type: 'switch',
        canBind: true,
      },
      {
        label: 'Active',
        name: 'active',
        type: 'switch',
        canBind: true,
      },
    ],
    action: {
      click: [],
    },
  });
  const input = createDefaultConfig({
    property: [
      {
        label: 'Name',
        name: 'name',
        type: 'text',
      },
      {
        label: $localize`:Property Label\: Show Label:显示标签`,
        name: 'showLabel',
        type: 'switch',
        value: false,
      },
      {
        label: $localize`:Property Label\: Label Text:标签文本`,
        name: 'labelText',
        type: 'text',
      },
      {
        label: $localize`:Property Label\: Size:尺寸`,
        name: 'inputSize',
        type: 'select',
        options: [
          { label: 'lg', value: 'input-group-lg' },
          { label: 'md', value: '' },
          { label: 'sm', value: 'input-group-sm' },
        ],
      },
      {
        label: $localize`:Property Label\: Category:类型`,
        name: 'inputType',
        type: 'select',
        value: 'text',
        options: [
          { label: 'text', value: 'text' },
          { label: 'number', value: 'number' },
          { label: 'password', value: 'password' },
          { label: 'file', value: 'file' },
        ],
      },
      {
        label: $localize`:Property Label\: Disabled:禁用`,
        name: 'disabled',
        type: 'switch',
        value: false,
        canBind: true,
      },
      {
        label: $localize`:Property Label\: Readonly:只读`,
        name: 'readonly',
        type: 'switch',
        value: false,
      },
      {
        label: $localize`:Property Label\: Placeholder:占位符`,
        name: 'placeholder',
        type: 'text',
      },
    ],
    validator: [],
  });
  const select = createDefaultConfig({
    property: [
      {
        label: 'Name',
        name: 'name',
        type: 'text',
        canBind: true,
      },
      {
        label: $localize`:Property Label\: Show Label:显示标签`,
        name: 'showLabel',
        type: 'switch',
        value: false,
      },
      {
        label: $localize`:Property Label\: Label Text:标签文本`,
        name: 'labelText',
        type: 'text',
        canBind: true,
      },
      {
        label: $localize`:Property Label\: Size:尺寸`,
        name: 'inputSize',
        type: 'select',
        options: [
          { label: 'lg', value: 'input-group-lg' },
          { label: 'md', value: '' },
          { label: 'sm', value: 'input-group-sm' },
        ],
      },
      {
        label: $localize`:Property Label\: Value:值`,
        name: 'value',
        type: 'text',
      },
      {
        label: '数据',
        name: 'data',
        type: 'text',
        canBind: true,
      },
      {
        label: $localize`:Property Label\: Disabled:禁用`,
        name: 'disabled',
        type: 'switch',
        value: false,
      },
      {
        label: '多选',
        name: 'multiple',
        type: 'switch',
        value: false,
      },
      {
        label: 'Label字段',
        name: 'labelField',
        type: 'text',
        value: 'label',
      },
      {
        label: 'Value字段',
        name: 'valueField',
        type: 'text',
        value: 'value',
      },
      {
        name: 'options',
        type: 'table',
        columns: [
          { prop: 'label', name: 'label' },
          { prop: 'value', name: 'value' },
        ],
        value: [],
        canBind: true,
      },
    ],
  });
  const textarea = createDefaultConfig({
    property: [
      {
        label: 'Name',
        name: 'name',
        type: 'text',
      },
      {
        label: $localize`:Property Label\: Show Label:显示标签`,
        name: 'showLabel',
        type: 'switch',
        value: false,
      },
      {
        label: $localize`:Property Label\: Label Text:标签文本`,
        name: 'labelText',
        type: 'text',
      },
      {
        label: $localize`:Property Label\: Size:尺寸`,
        name: 'inputSize',
        type: 'select',
        options: [
          { label: 'lg', value: 'input-group-lg' },
          { label: 'md', value: '' },
          { label: 'sm', value: 'input-group-sm' },
        ],
      },
      {
        label: $localize`:Property Label\: Value:值`,
        name: 'value',
        type: 'text',
      },
      {
        label: $localize`:Property Label\: Disabled:禁用`,
        name: 'disabled',
        type: 'switch',
        value: false,
      },
      {
        label: $localize`:Property Label\: Placeholder:占位符`,
        name: 'placeholder',
        type: 'text',
      },
      {
        label: 'Rows',
        name: 'textareaRows',
        type: 'number',
        value: 5,
      },
    ],
    rights: false,
  });
  const form = createDefaultConfig({
    core: {
      canHasChild: true,
    },
    rights: false,
    validator: false,
  });
  return {
    radio,
    checkbox,
    toggle,
    button,
    input,
    select,
    textarea,
    form,
  };
}
