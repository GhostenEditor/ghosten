import { Component, OnInit } from '@angular/core';
import { AccordionProperty } from '@ghosten/components';
import { EditAbstractComponent } from '@ghosten/editor';

@Component({
  selector: 'gt-accordion',
  template: ` <div class="accordion" [class.accordion-flush]="property.flush">
    <ng-container *ngIf="!property.accordionItems.length">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            占位标题
          </button>
        </h2>
        <div class="accordion-collapse collapse show">
          <div class="accordion-body">占位文本</div>
        </div>
      </div>
    </ng-container>
    <div class="accordion-item" *ngFor="let item of property.accordionItems">
      <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" aria-expanded="true">
          {{ item.title }}
        </button>
      </h2>
      <div class="accordion-collapse collapse show">
        <div class="accordion-body" [attr.data-droppable]="item.id">
          <ng-template gtTemplate [templateID]="item.id"></ng-template>
        </div>
      </div>
    </div>
  </div>`,
})
export class AccordionComponent extends EditAbstractComponent<AccordionProperty> implements OnInit {}
