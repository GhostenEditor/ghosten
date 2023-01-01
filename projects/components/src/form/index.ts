import { DataBinding, createDefaultConfig } from '@ghosten/common';

export interface InputProperty {
  name: string;
  showLabel: boolean;
  labelText: string;
  inputSize: string;
  inputType: 'text' | 'number' | 'password';
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
  value: string;
  inputType: 'radio' | 'checkbox';
  options: any[];
}

export function gtFormConfigMap() {
  const radio = createDefaultConfig({
    property: [
      {
        label: 'name',
        name: 'name',
        type: 'text',
      },
      {
        label: '显示label',
        name: 'showLabel',
        type: 'toggle',
        value: true,
      },
      {
        name: 'layout',
        type: 'select',
        options: [
          { label: 'Default', value: '' },
          { label: 'Inline', value: 'form-check-inline' },
          { label: 'Reverse', value: 'form-check-reverse' },
        ],
      },
      {
        name: 'value',
        type: 'text',
      },
      {
        name: 'options',
        type: 'table',
        columns: [
          { prop: 'label', name: 'label' },
          { prop: 'value', name: 'value' },
        ],
        value: [],
      },
    ],
  });
  const toggle = createDefaultConfig({
    property: [
      {
        label: 'name',
        name: 'name',
        type: 'text',
      },
      {
        label: 'labelText',
        name: 'labelText',
        type: 'text',
      },
    ],
  });
  const button = createDefaultConfig({
    property: [
      {
        label: '文字',
        name: 'text',
        type: 'text',
        value: 'Button',
        canBind: true,
      },
      {
        label: '尺寸',
        name: 'buttonSize',
        type: 'select',
        options: [
          { label: 'lg', value: 'btn-lg' },
          { label: 'md', value: '' },
          { label: 'sm', value: 'btn-sm' },
        ],
      },
      {
        label: '颜色',
        name: 'buttonColor',
        type: 'select',
        value: 'btn-primary',
        options: [
          { label: 'primary', value: 'btn-primary' },
          { label: 'default', value: 'btn-default' },
          { label: 'secondary', value: 'btn-secondary' },
          { label: 'warning', value: 'btn-warning' },
          { label: 'danger', value: 'btn-danger' },
          { label: 'info', value: 'btn-info' },
        ],
      },
      {
        label: '类型',
        name: 'buttonType',
        type: 'select',
        options: [
          { label: 'rect', value: '' },
          { label: 'block', value: 'btn-block' },
        ],
      },
      {
        label: '禁用',
        name: 'disabled',
        type: 'toggle',
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
        label: 'name',
        name: 'name',
        type: 'text',
      },
      {
        label: '显示label',
        name: 'showLabel',
        type: 'toggle',
        value: false,
      },
      {
        label: 'labelText',
        name: 'labelText',
        type: 'text',
      },
      {
        label: '尺寸',
        name: 'inputSize',
        type: 'select',
        options: [
          { label: 'lg', value: 'input-group-lg' },
          { label: 'md', value: '' },
          { label: 'sm', value: 'input-group-sm' },
        ],
      },
      {
        label: '类型',
        name: 'inputType',
        type: 'select',
        value: 'text',
        options: [
          { label: 'text', value: 'text' },
          { label: 'number', value: 'number' },
          { label: 'password', value: 'password' },
        ],
      },
      {
        label: '禁用',
        name: 'disabled',
        type: 'toggle',
        value: false,
        canBind: true,
      },
      {
        label: '只读',
        name: 'readonly',
        type: 'toggle',
        value: false,
      },
      {
        label: '占位符',
        name: 'placeholder',
        type: 'text',
      },
    ],
    validator: [],
  });
  const select = createDefaultConfig({
    property: [
      {
        label: 'name',
        name: 'name',
        type: 'text',
        canBind: true,
      },
      {
        label: '显示label',
        name: 'showLabel',
        type: 'toggle',
        value: false,
      },
      {
        label: 'labelText',
        name: 'labelText',
        type: 'text',
        canBind: true,
      },
      {
        label: '尺寸',
        name: 'inputSize',
        type: 'select',
        options: [
          { label: 'lg', value: 'input-group-lg' },
          { label: 'md', value: '' },
          { label: 'sm', value: 'input-group-sm' },
        ],
      },
      {
        label: '值',
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
        label: '禁用',
        name: 'disabled',
        type: 'toggle',
        value: false,
      },
      {
        label: '多选',
        name: 'multiple',
        type: 'toggle',
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
        label: 'name',
        name: 'name',
        type: 'text',
      },
      {
        label: '显示label',
        name: 'showLabel',
        type: 'toggle',
        value: false,
      },
      {
        label: 'labelText',
        name: 'labelText',
        type: 'text',
      },
      {
        label: '尺寸',
        name: 'inputSize',
        type: 'select',
        options: [
          { label: 'lg', value: 'input-group-lg' },
          { label: 'md', value: '' },
          { label: 'sm', value: 'input-group-sm' },
        ],
      },
      {
        label: '值',
        name: 'value',
        type: 'text',
      },
      {
        label: '禁用',
        name: 'disabled',
        type: 'toggle',
        value: false,
      },
      {
        label: '占位符',
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
    checkbox: radio,
    toggle,
    button,
    input,
    select,
    textarea,
    form,
  };
}
