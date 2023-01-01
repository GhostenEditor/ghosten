import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import {
  GT_EDIT_COMPONENT_MAP,
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
        button: `<button class='btn btn-primary' type='button'>Button</button>`,
        select: `<select class='form-select'><option selected>Select</option></select>`,
        input: `<input type='text' class='form-control' placeholder='Input'>`,
        datepicker: `<input type='text' class='form-control' placeholder='Datepicker'>`,
        textarea: `<textarea class='form-control'></textarea>`,
        radio:
          '<div class="form-check"><input class="form-check-input" type="radio"><label class="form-check-label">RADIO</label></div>',
        checkbox:
          '<div class="form-check"><input class="form-check-input" type="checkbox"><label class="form-check-label">CHECKBOX</label></div>',
        form: `<div style='1px dotted #06366f;width: 100px;height:100px;'></div>`,
        toggle: `<div class='form-check form-switch'><input type='checkbox' class='form-check-input' role='switch'><label class='form-check-label'>切换按钮</label></div>`,
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
