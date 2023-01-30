import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { PortalModule } from '@angular/cdk/portal';

import { ConfigFormModule, DropdownModule } from '../../modules';

import { ActionComponent } from './action.component';
import { CardComponent } from './card.component';
import { ClassComponent } from './class.component';
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
  ClassComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ConfigFormModule,
    DragDropModule,
    DropdownModule,
    ReactiveFormsModule,
    PortalModule,
  ],
  exports: components,
  declarations: components,
})
export class PanelModule {}
