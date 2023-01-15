import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ConfigFormComponent } from './config-form.component';
import { DataBindingComponent } from './components/data-binding.component';
import { FormGroupComponent } from './form-group.component';
import { InputComponent } from './components/input.component';
import { SelectComponent } from './components/select.component';
import { SwitchComponent } from './components/switch.component';
import { TemplateDirective } from './template.directive';
import { TextareaComponent } from './components/textarea.component';

import { GT_CONFIG_FORM_TYPE_MAP } from '../../injectors';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [
    FormGroupComponent,
    TemplateDirective,
    TextareaComponent,
    SelectComponent,
    InputComponent,
    SwitchComponent,
    ConfigFormComponent,
    DataBindingComponent,
  ],
  providers: [
    {
      provide: GT_CONFIG_FORM_TYPE_MAP,
      useValue: {
        text: InputComponent,
        number: InputComponent,
        color: InputComponent,
        select: SelectComponent,
        textarea: TextareaComponent,
        switch: SwitchComponent,
      },
      multi: true,
    },
  ],
  exports: [ConfigFormComponent],
})
export class ConfigFormModule {}
