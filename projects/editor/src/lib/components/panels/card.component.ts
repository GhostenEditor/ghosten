import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface PanelCard {
  title: string;
}

@Component({
  selector: 'gt-panel-card',
  template: ` <div class="card mb-3 transform" cdkDrag cdkDragLockAxis="y">
    <div class="card-header">
      <div class="d-flex justify-content-between">
        {{ item.title }}
        <div class="btn-group btn-group-sm">
          <button class="btn btn-light btn-sm" cdkDragHandle>
            <i class="gt-icon">list</i>
          </button>
          <button class="btn btn-light btn-sm" (click)="removeItem.emit(item)">
            <i class="gt-icon">close</i>
          </button>
        </div>
      </div>
    </div>
    <div class="card-body">
      <ng-content></ng-content>
    </div>
  </div>`,
})
export class CardComponent {
  @Input() item: PanelCard;
  @Output() removeItem = new EventEmitter<PanelCard>();
}
