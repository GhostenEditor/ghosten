import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { RenderAbstractComponent } from '@ghosten/renderer';

interface AccordionType {
  multi: boolean;
  accordionItems: {
    id: string;
    title: string;
  }[];
}

@Component({
  selector: 'gt-accordion',
  animations: [
    trigger('bodyExpansion', [
      state('collapsed, void', style({ height: '0px', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition(
        'expanded <=> collapsed, void => collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)'),
      ),
    ]),
  ],
  template: ` <div
    class="accordion"
    cdkAccordion
    [multi]="gtNode.property.multi"
  >
    <div
      class="accordion-item"
      *ngFor="let item of gtNode.property.accordionItems"
      cdkAccordionItem
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
        style="overflow: hidden"
        class="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body" [attr.data-droppable]="item.id">
          <ng-template gtTemplate [templateID]="item.id"></ng-template>
        </div>
      </div>
    </div>
  </div>`,
})
export class AccordionComponent
  extends RenderAbstractComponent<AccordionType>
  implements OnInit {}
