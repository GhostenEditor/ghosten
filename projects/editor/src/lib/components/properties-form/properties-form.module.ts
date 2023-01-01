import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColorSketchModule } from 'ngx-color/sketch';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';

import { BorderComponent } from './components/border.component';
import { ButtonComponent } from './components/button.component';
import { ColorComponent } from './components/color.component';
import { DataBindingComponent } from './components/data-binding.component';
import { FormGroupComponent } from './form-group.component';
import { FourNumbersComponent } from './components/four-numbers.component';
import { IconComponent } from './components/icon.component';
import { InputComponent } from './components/input.component';
import { ObjectComponent } from './components/object.component';
import { PropertiesFormComponent } from './properties-form.component';
import { RadioButtonsComponent } from './components/radio-buttons.component';
import { SelectComponent } from './components/select.component';
import { TableComponent } from './components/table.component';
import { TemplateDirective } from './template.directive';
import { TextareaComponent } from './components/textarea.component';
import { ToggleComponent } from './components/toggle.component';
import { UnitInputComponent } from './components/unit-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayModule,
    PortalModule,
    ColorSketchModule,
  ],
  declarations: [
    FormGroupComponent,
    TemplateDirective,

    TextareaComponent,
    UnitInputComponent,
    TableComponent,
    ObjectComponent,
    FourNumbersComponent,
    ColorComponent,
    BorderComponent,
    RadioButtonsComponent,
    SelectComponent,
    InputComponent,
    IconComponent,
    ButtonComponent,
    ToggleComponent,
    PropertiesFormComponent,
    DataBindingComponent,
  ],
  exports: [PropertiesFormComponent],
})
export class PropertiesFormModule {}
