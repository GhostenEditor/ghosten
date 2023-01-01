import { GT_ELEMENT_LISTS } from '@ghosten/editor';
import { Provider } from '@angular/core';

export const gtElementsList: Provider = {
  provide: GT_ELEMENT_LISTS,
  useValue: [
    {
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
        {
          label: $localize`:Element Label\: Card:卡片`,
          type: 'card',
          icon: 'panel',
        },
        {
          label: $localize`:Element Label\: Accordion:折叠面板`,
          type: 'accordion',
          icon: 'panel',
        },
        {
          label: $localize`:Element Label\: Alert:警告`,
          type: 'alert',
          icon: 'bell',
        },
        { label: '按钮组', type: 'buttonGroup', icon: 'button_group' },
        // {
        //   label: 'Card', type: 'card', icon: 'panel',
        //   content: {
        //     type: 'division',
        //     style: {
        //       border: {
        //         all: '1px solid #ccc'
        //       },
        //       // background: '#ccc'
        //     },
        //     children: [
        //       { type: 'division' },
        //       { type: 'division' },
        //       { type: 'division' },
        //     ]
        //   }
        // }
      ],
    },
    {
      title: $localize`:Element Group Title\: Normal:通用`,
      elements: [
        {
          label: $localize`:Element Label\: Text:文字`,
          type: 'text',
          icon: 'text',
        },
        { label: '图片', type: 'image', icon: 'picture' },
        // { label: '图表', type: 'icon', icon: 'icon' },
      ],
    },
    {
      title: $localize`:Element Group Title\: Form:表单`,
      elements: [
        {
          label: $localize`:Element Label\: Form:表单`,
          type: 'form',
          icon: 'form',
        },
        {
          label: $localize`:Element Label\: Button:按钮`,
          type: 'button',
          icon: 'button',
        },
        {
          label: $localize`:Element Label\: Input:输入框`,
          type: 'input',
          icon: 'input',
        },
        {
          label: $localize`:Element Label\: Radio:单选按钮`,
          type: 'radio',
          icon: 'radio',
          content: { property: { inputType: 'radio' } },
        },
        {
          label: $localize`:Element Label\: Checkbox:复选按钮`,
          type: 'checkbox',
          icon: 'checkbox',
          content: { property: { inputType: 'checkbox' } },
        },
        {
          label: $localize`:Element Label\: Select:下拉框`,
          type: 'select',
          icon: 'select',
        },
        {
          label: $localize`:Element Label\: Textarea:文本域`,
          type: 'textarea',
          icon: 'textarea',
        },
        {
          label: $localize`:Element Label\: Toggle:切换按钮`,
          type: 'toggle',
          icon: 'toggle',
        },
        // { label: '时间选择器', type: 'datepicker', icon: 'datepicker' },
      ],
    },
    {
      title: $localize`:Element Group Title\: Component:组件`,
      elements: [
        {
          label: $localize`:Element Label\: Gauge:仪表盘`,
          type: 'gauge',
          icon: 'gauge',
        },
        {
          label: $localize`:Element Label\: Water:水位图`,
          type: 'water',
          icon: 'water',
        },
        {
          label: $localize`:Element Label\: Slot:占位符`,
          type: 'slot',
          icon: 'slot',
        },
        {
          label: $localize`:Element Label\: Battery:电池`,
          type: 'battery',
          icon: 'battery',
        },
        // { label: '表格', type: 'table', icon: 'table' },
        // { label: '普通表格', type: 'normalTable', icon: 'table' },
        // { label: '灯', type: 'lamp', icon: 'lamp' },
        // { label: 'circle', type: 'circle', icon: 'circle' },
        // { label: '统计图', type: 'chart', icon: 'linechart' },
        // { label: '饼图', type: 'piechart', icon: 'piechart' },
        // { label: 'Unit', type: 'unit', icon: 'unit' },
        // { label: 'Process', type: 'process', icon: 'process' },
        // { label: 'Slider', type: 'slider', icon: 'slider' },
        // { label: 'List', type: 'list', icon: 'list' },
        // { label: '状态', type: 'status', icon: 'status' },
        // { label: 'CFM', type: 'cfm', icon: 'cfm' },
        // { label: 'Search', type: 'search', icon: 'search' },
        // { label: 'Eqp', type: 'eqp', icon: 'eqp' },
      ],
    },
  ],
};
