import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AccordionComponent } from './accordion.component';
import { AccordionItemComponent } from './accordion-item.component';

@NgModule({
  imports: [CommonModule, CdkAccordionModule],
  declarations: [AccordionComponent, AccordionItemComponent],
  exports: [AccordionComponent, AccordionItemComponent],
})
export class AccordionModule {}
