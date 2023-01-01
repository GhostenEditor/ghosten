import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  GT_EDIT_COMPONENT_MAP,
  GT_NODE_DEFAULT_CONFIG,
  GT_TEMPLATE_MAP,
  GtEditCoreModule,
} from '@ghosten/editor';
import { gtContainerConfigMap } from '@ghosten/components';

import { AccordionComponent } from './accordion.component';
import { AlertComponent } from './alert.component';
import { ButtonGroupComponent } from './button-group.component';
import { CardComponent } from './card.component';

@NgModule({
  imports: [CommonModule, GtEditCoreModule],
  declarations: [
    CardComponent,
    AccordionComponent,
    AlertComponent,
    ButtonGroupComponent,
  ],
  providers: [
    {
      provide: GT_EDIT_COMPONENT_MAP,
      useValue: {
        card: CardComponent,
        accordion: AccordionComponent,
        alert: AlertComponent,
        buttonGroup: ButtonGroupComponent,
      },
      multi: true,
    },
    {
      provide: GT_NODE_DEFAULT_CONFIG,
      useFactory: gtContainerConfigMap,
      multi: true,
    },
    {
      provide: GT_TEMPLATE_MAP,
      useValue: {
        card: `<div class='card'>
		  <div class='card-header' *ngIf='gtNode.property.showTitle'>标题</div>
		  <div class='card-body'>卡片内容</div>
      <div class='card-footer'></div>
	  </div>`,
        alert: `<div class='alert alert-primary' role='alert'>
  默认文本，渲染模式不会展示！
</div>`,
        accordion: `<div class='accordion'>
  <div class='accordion-item'>
    <h2 class='accordion-header'>
      <button class='accordion-button' type='button'>
        占位标题
      </button>
    </h2>
    <div class='accordion-collapse collapse show'>
      <div class='accordion-body'>占位文本
      </div>
    </div>
  </div>
</div>`,
        buttonGroup: `<div class='btn-group'>
  <button type='button' class='btn btn-primary'>按钮1</button>
  <button type='button' class='btn btn-primary'>按钮2</button>
</div>`,
      },
      multi: true,
    },
  ],
})
export class GtContainerEditModule {}
