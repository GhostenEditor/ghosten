// module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PortalModule } from '@angular/cdk/portal';

import { DataBindingPipe } from './components/data-binding.pipe';
import { DivisionComponent } from './components/division.component';
import { ForComponent } from './components/for.component';
import { FormAbstractComponent } from './components/form-abstract.component';
import { GtRenderComponent } from './gt-render.component';
import { IfComponent } from './components/if.component';
import { RenderAbstractComponent } from './components/abstract.component';
import { TemplateDirective } from './directives/template.directive';
import { providers } from './providers';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PortalModule],
  declarations: [
    GtRenderComponent,
    RenderAbstractComponent,
    DivisionComponent,
    FormAbstractComponent,
    IfComponent,
    ForComponent,
    TemplateDirective,
    DataBindingPipe,
  ],
  exports: [GtRenderComponent, TemplateDirective, DataBindingPipe],
  providers,
})
export class GtRenderCoreModule {}
