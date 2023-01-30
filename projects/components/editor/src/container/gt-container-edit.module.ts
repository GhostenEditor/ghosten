import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  GT_EDIT_COMPONENT_MAP,
  GT_EDIT_COMPONENT_TYPE_MAP,
  GT_ELEMENT_LISTS,
  GT_NODE_DEFAULT_CONFIG,
  GT_TEMPLATE_MAP,
  GtEditCoreModule,
} from '@ghosten/editor';
import { gtContainerConfigMap } from '@ghosten/components';

import { NavComponent, NavComponentType } from './nav.component';
import { AccordionComponent } from './accordion.component';
import { AlertComponent } from './alert.component';
import { ButtonGroupComponent } from './button-group.component';
import { CardComponent } from './card.component';
import { ListGroupComponent } from './list-group.component';
import { ListGroupItemComponent } from './list-group-item.component';

@NgModule({
  imports: [CommonModule, GtEditCoreModule],
  declarations: [
    CardComponent,
    AccordionComponent,
    AlertComponent,
    ButtonGroupComponent,
    ListGroupComponent,
    ListGroupItemComponent,
    NavComponent,
  ],
  providers: [
    {
      provide: GT_ELEMENT_LISTS,
      useValue: {
        title: $localize`:Element Group Title\: Container:容器`,
        elements: [
          {
            label: $localize`:Element Label\: Card:卡片`,
            type: 'card',
            icon: 'panel',
          },
          {
            label: $localize`:Element Label\: List Group:List Group`,
            type: 'listGroup',
            icon: 'list',
          },
          {
            label: $localize`:Element Label\: List Group Item:List Group Item`,
            type: 'listGroupItem',
            icon: 'list',
          },
          {
            label: $localize`:Element Label\: Nav:Nav`,
            type: 'nav',
            icon: 'tab',
          },
          {
            label: $localize`:Element Label\: Accordion:折叠面板`,
            type: 'accordion',
            icon: 'panel',
          },
          {
            label: $localize`:Element Label\: Alert:警告`,
            type: 'alert',
            icon: 'bell',
          },
          {
            label: $localize`:Element Label\: Button Group:按钮组`,
            type: 'buttonGroup',
            icon: 'button_group',
          },
        ],
      },
      multi: true,
    },
    {
      provide: GT_EDIT_COMPONENT_MAP,
      useValue: {
        card: CardComponent,
        accordion: AccordionComponent,
        alert: AlertComponent,
        buttonGroup: ButtonGroupComponent,
        listGroup: ListGroupComponent,
        listGroupItem: ListGroupItemComponent,
        nav: NavComponent,
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
        card: `<div class="card">
		  <div class="card-header" *ngIf="gtNode.property.showTitle">标题</div>
		  <div class="card-body">卡片内容</div>
      <div class="card-footer"></div>
	  </div>`,
        alert: `<div class="alert alert-primary" role="alert">
  默认文本，渲染模式不会展示！
</div>`,
        accordion: `<div class="accordion">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button">
        占位标题
      </button>
    </h2>
    <div class="accordion-collapse collapse show">
      <div class="accordion-body">占位文本
      </div>
    </div>
  </div>
</div>`,
        buttonGroup: `<div class="btn-group">
  <button type="button" class="btn btn-primary">按钮1</button>
  <button type="button" class="btn btn-primary">按钮2</button>
</div>`,
        listGroupItem: '<div class="gt-node" style="border: .15rem dashed"></div>',
        nav: `<ul class="nav" style="width: 20rem;"><li class="nav-item"><a class="nav-link active">Active</a></li><li class="nav-item"><a class="nav-link">Link</a></li><li class="nav-item"><a class="nav-link disabled">Disabled</a></li>
</ul>`,
        listGroup: `<ul class="list-group"><li class="list-group-item">An item</li><li class="list-group-item">A second item</li><li class="list-group-item">A third item</li></ul>`,
      },
      multi: true,
    },
    {
      provide: GT_EDIT_COMPONENT_TYPE_MAP,
      useValue: {
        nav: NavComponentType,
      },
      multi: true,
    },
  ],
})
export class GtContainerEditModule {}
