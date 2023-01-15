import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AccordionProperty } from '@ghosten/components';
import { RenderAbstractComponent } from '@ghosten/renderer';

@Component({
  selector: 'gt-accordion',
  animations: [
    trigger('bodyExpansion', [
      state('collapsed, void', style({ height: '0px', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed, void => collapsed', animate('225ms cubic-bezier(0.4,0.0,0.2,1)')),
    ]),
  ],
  template: ` <div class="accordion" cdkAccordion [multi]="gtNode.property.multi">
    <div
      class="accordion-item"
      *ngFor="let item of property.accordionItems"
      cdkAccordionItem
      [expanded]="item.expanded"
      #accordionItem="cdkAccordionItem"
    >
      <h2 class="accordion-header">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          [class.collapsed]="!accordionItem.expanded"
          [attr.aria-expanded]="accordionItem.expanded"
          (click)="accordionItem.toggle()"
        >
          {{ item.title }}
        </button>
      </h2>
      <div
        [@bodyExpansion]="accordionItem.expanded ? 'expanded' : 'collapsed'"
        class="accordion-collapse"
        style="overflow: hidden"
      >
        <div class="accordion-body">
          <ng-template gtTemplate [templateID]="item.id"></ng-template>
        </div>
      </div>
    </div>
  </div>`,
})
export class AccordionComponent extends RenderAbstractComponent<AccordionProperty> implements OnInit {}
