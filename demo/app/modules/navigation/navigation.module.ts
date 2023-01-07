import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { RouterModule } from '@angular/router';

import { NavigationComponent } from './navigation.component';
import { NavigationItemComponent } from './navigation-item.component';
import { PageManagementModule } from '../page-management/page-management.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    OverlayModule,
    CdkAccordionModule,
    PageManagementModule,
  ],
  exports: [NavigationComponent],
  declarations: [NavigationComponent, NavigationItemComponent],
})
export class NavigationModule {}
