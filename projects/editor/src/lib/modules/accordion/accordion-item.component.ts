import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CdkAccordionItem } from '@angular/cdk/accordion';
import { bodyExpansion } from '../../animations';

@Component({
  selector: 'gt-accordion-item',
  animations: [bodyExpansion],
  host: {
    class: 'accordion-item d-block',
  },
  template: ` <ng-container
    cdkAccordionItem
    [expanded]="expanded"
    #accordionItem="cdkAccordionItem"
    (opened)="opened.emit()"
    (closed)="closed.emit()"
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
        <span class="flex-grow-1">{{ cardTitle }}</span>
        <ng-content select=".accordion-header-buttons"></ng-content>
      </button>
    </h2>
    <div
      [@bodyExpansion]="accordionItem.expanded ? 'expanded' : 'collapsed'"
      class="accordion-collapse"
      style="overflow: hidden"
    >
      <div class="accordion-body">
        <ng-content></ng-content>
      </div>
    </div>
  </ng-container>`,
})
export class AccordionItemComponent {
  @Input() cardTitle: string;
  @Input() expanded?: boolean;
  @Output() opened = new EventEmitter<void>();
  @Output() closed = new EventEmitter<void>();
  @ViewChild(CdkAccordionItem) accordion: CdkAccordionItem;
}
