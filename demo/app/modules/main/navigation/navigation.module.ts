import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavigationComponent } from './navigation.component';
import { NavigationItemComponent } from './navigation-item.component';

@NgModule({
  imports: [CommonModule, RouterModule, CdkAccordionModule],
  exports: [NavigationComponent],
  declarations: [NavigationComponent, NavigationItemComponent],
  providers: [],
})
export class NavigationModule {}
