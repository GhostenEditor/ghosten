import { Component, Input } from '@angular/core';

@Component({
  selector: 'gt-accordion',
  template: ` <div
    class="accordion accordion-flush border-bottom"
    cdkAccordion
    [multi]="multi"
  >
    <ng-content></ng-content>
  </div>`,
})
export class AccordionComponent {
  @Input() multi = false;
}
