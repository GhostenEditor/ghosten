import { Component } from '@angular/core';
import { RenderAbstractComponent } from '@ghosten/renderer';

@Component({
  selector: 'gt-alert',
  template: ` <div
    class="alert"
    [class.alert-dismissible]="gtNode.property.dismissible"
    data-droppable
    [ngClass]="'alert-' + gtNode.property.type"
    role="alert"
  >
    <ng-template gtTemplate></ng-template>
    <button
      *ngIf="gtNode.property.dismissible"
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
      (click)="close()"
    ></button>
  </div>`,
})
export class AlertComponent extends RenderAbstractComponent {
  close() {
    this.gtNode.removeSelf();
  }
}
