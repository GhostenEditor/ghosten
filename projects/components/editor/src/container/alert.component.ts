import { Component } from '@angular/core';
import { EditAbstractComponent } from '@ghosten/editor';

@Component({
  selector: 'gt-alert',
  template: ` <div
    class="alert "
    data-droppable
    [class.alert-dismissible]="gtNode.property.dismissible"
    [ngClass]="'alert-' + gtNode.property.type"
    role="alert"
  >
    <ng-container *ngIf="!gtNode.children.length"
      >默认文本，渲染模式不会展示！
    </ng-container>
    <ng-template gtTemplate></ng-template>
    <button
      *ngIf="gtNode.property.dismissible"
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    ></button>
  </div>`,
})
export class AlertComponent extends EditAbstractComponent {}
