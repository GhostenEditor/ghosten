import { Component } from '@angular/core';

import { AlertProperty } from '@ghosten/components';
import { RenderAbstractComponent } from '@ghosten/renderer';

@Component({
  selector: 'gt-alert',
  template: ` <div
    class="alert"
    [class.alert-dismissible]="property.dismissible"
    data-droppable
    [ngClass]="'alert-' + property.type"
    role="alert"
  >
    <ng-template gtTemplate></ng-template>
    <button
      *ngIf="property.dismissible"
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
      (click)="close()"
    ></button>
  </div>`,
})
export class AlertComponent extends RenderAbstractComponent<AlertProperty> {
  close() {
    this.gtNode.removeSelf();
  }
}
