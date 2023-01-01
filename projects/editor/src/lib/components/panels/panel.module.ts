import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { PortalModule } from '@angular/cdk/portal';

import { DropdownModule } from '../../directives/dropdown/dropdown.module';
import { PropertiesFormModule } from '../properties-form/properties-form.module';

import { ActionComponent } from './action.component';
import { CardComponent } from './card.component';
import { FormComponent } from './form.component';
import { PanelBoardComponent } from './panel-board.component';
import { PanelConfigComponent } from './panel-config.component';
import { PanelDirectiveComponent } from './panel-directive.component';
import { PanelTableComponent } from './panel-table.component';
import { PanelValidatorComponent } from './panel-validator.component';
import { VariableComponent } from './variable.component';

const components = [
  PanelBoardComponent,
  PanelConfigComponent,
  PanelTableComponent,
  PanelValidatorComponent,
  PanelDirectiveComponent,
  VariableComponent,
  CardComponent,
  ActionComponent,
  FormComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PropertiesFormModule,
    DragDropModule,
    DropdownModule,
    ReactiveFormsModule,
    PortalModule,
  ],
  exports: components,
  declarations: components,
})
export class PanelModule {}
