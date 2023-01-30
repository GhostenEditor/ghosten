// module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';

import { GtModalModule } from '@ghosten/utils';

import { DataBindingPipe } from './components/data-binding.pipe';
import { DivisionComponent } from './components/division.component';
import { ForComponent } from './components/for.component';
import { FormAbstractComponent } from './components/form-abstract.component';
import { GtRendererComponent } from './gt-renderer.component';
import { GtRendererModalComponent } from './gt-renderer-modal.component';
import { IfComponent } from './components/if.component';
import { RenderAbstractComponent } from './components/abstract.component';
import { TemplateDirective } from './directives/template.directive';
import { providers } from './providers';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, OverlayModule, PortalModule, GtModalModule],
  declarations: [
    GtRendererComponent,
    RenderAbstractComponent,
    DivisionComponent,
    FormAbstractComponent,
    IfComponent,
    ForComponent,
    TemplateDirective,
    DataBindingPipe,
    GtRendererComponent,
    GtRendererModalComponent,
  ],
  exports: [GtRendererComponent, TemplateDirective, DataBindingPipe],
  providers,
})
export class GtRenderCoreModule {}
