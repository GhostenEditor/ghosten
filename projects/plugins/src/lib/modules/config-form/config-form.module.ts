import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';

import { GT_CONFIG_FORM_TYPE_MAP } from '@ghosten/editor';

import { BorderComponent } from './border.component';
import { ColorComponent } from './color.component';
import { ColorSketchModule } from 'ngx-color/sketch';
import { FourNumbersComponent } from './four-numbers.component';
import { ObjectComponent } from './object.component';
import { TableCellComponent } from './table-cell.component';
import { TableComponent } from './table.component';
import { UnitInputComponent } from './unit-input.component';

@NgModule({
  imports: [ReactiveFormsModule, ColorSketchModule, CommonModule, FormsModule, OverlayModule, PortalModule],
  exports: [],
  declarations: [
    ColorComponent,
    BorderComponent,
    FourNumbersComponent,
    TableComponent,
    TableCellComponent,
    UnitInputComponent,
    ObjectComponent,
  ],
  providers: [
    {
      provide: GT_CONFIG_FORM_TYPE_MAP,
      useValue: {
        color: ColorComponent,
        border: BorderComponent,
        fourNumbers: FourNumbersComponent,
        object: ObjectComponent,
        table: TableComponent,
        numberHasUnit: UnitInputComponent,
      },
      multi: true,
    },
  ],
})
export class ConfigFormModule {}
