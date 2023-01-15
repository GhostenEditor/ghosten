import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GT_NODE_DEFAULT_CONFIG, GT_RENDER_COMPONENT_MAP, GtRenderCoreModule } from '@ghosten/renderer';
import { gtFormConfigMap } from '@ghosten/components';

import { ButtonComponent } from './button.component';
import { CheckboxComponent } from './checkbox.component';
import { FormComponent } from './form.component';
import { InputComponent } from './input.component';
import { RadioComponent } from './radio.component';
import { SelectComponent } from './select.component';
import { TextareaComponent } from './textarea.component';
import { ToggleComponent } from './toggle.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, GtRenderCoreModule],
  declarations: [
    RadioComponent,
    CheckboxComponent,
    ToggleComponent,
    ButtonComponent,
    FormComponent,
    SelectComponent,
    TextareaComponent,
    InputComponent,
  ],
  providers: [
    {
      provide: GT_RENDER_COMPONENT_MAP,
      useValue: {
        radio: RadioComponent,
        checkbox: CheckboxComponent,
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
      provide: GT_NODE_DEFAULT_CONFIG,
      useFactory: gtFormConfigMap,
      multi: true,
    },
  ],
})
export class GtFormRenderModule {}
