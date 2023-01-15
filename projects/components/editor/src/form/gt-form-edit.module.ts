import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import {
  GT_EDIT_COMPONENT_MAP,
  GT_ELEMENT_LISTS,
  GT_NODE_DEFAULT_CONFIG,
  GT_TEMPLATE_MAP,
  GtEditCoreModule,
} from '@ghosten/editor';
import { gtFormConfigMap } from '@ghosten/components';

import { ButtonComponent } from './button.component';
import { FormComponent } from './form.component';
import { InputComponent } from './input.component';
import { RadioComponent } from './radio.component';
import { SelectComponent } from './select.component';
import { TextareaComponent } from './textarea.component';
import { ToggleComponent } from './toggle.component';

@NgModule({
  imports: [CommonModule, FormsModule, GtEditCoreModule],
  declarations: [
    RadioComponent,
    ToggleComponent,
    FormComponent,
    ButtonComponent,
    InputComponent,
    TextareaComponent,
    SelectComponent,
  ],
  providers: [
    {
      provide: GT_ELEMENT_LISTS,
      useValue: {
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
        ],
      },
      multi: true,
    },
    {
      provide: GT_EDIT_COMPONENT_MAP,
      useValue: {
        radio: RadioComponent,
        checkbox: RadioComponent,
        toggle: ToggleComponent,
        button: ButtonComponent,
        input: InputComponent,
        form: FormComponent,
        textarea: TextareaComponent,
        select: SelectComponent,
      },
      multi: true,
    },
    {
      provide: GT_TEMPLATE_MAP,
      useValue: {
        button: `<button class="btn btn-primary" type="button">Button</button>`,
        select: `<select class="form-select"><option selected>Select</option></select>`,
        input: `<input type="text" class="form-control" placeholder="Input">`,
        datepicker: `<input type="text" class="form-control" placeholder="Datepicker">`,
        textarea: `<textarea class="form-control"></textarea>`,
        radio:
          '<div class="config-form-check"><input class="config-form-check-input" type="radio"><label class="config-form-check-label">RADIO</label></div>',
        checkbox:
          '<div class="config-form-check"><input class="config-form-check-input" type="checkbox"><label class="config-form-check-label">CHECKBOX</label></div>',
        form: `<div style="border: 1px dashed;width: 100px;height:100px;"></div>`,
        toggle: `<div class="form-check form-switch"><input type="checkbox" class="form-check-input" role="switch"><label class="form-check-label">切换按钮</label></div>`,
      },
      multi: true,
    },
    {
      provide: GT_NODE_DEFAULT_CONFIG,
      useFactory: gtFormConfigMap,
      multi: true,
    },
  ],
})
export class GtFormEditModule {}
