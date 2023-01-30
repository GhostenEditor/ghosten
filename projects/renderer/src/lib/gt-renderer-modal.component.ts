import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Board } from '@ghosten/common';

import { TemplateDirective } from './directives/template.directive';

@Component({
  selector: 'gt-renderer-modal',
  template: `
    <gt-modal
      [modalTitle]="board.title"
      [modalSize]="board.size"
      [modalFooter]="board.modalFooter"
      (confirm)="modalConfirm.emit()"
      (cancel)="modalClose.emit()"
      (animationDone)="animationDone.emit()"
    >
      <ng-template gtTemplate></ng-template>
    </gt-modal>
  `,
})
export class GtRendererModalComponent implements OnInit {
  @ViewChild(TemplateDirective, { static: true }) template: TemplateDirective;
  @Input() board: Board;
  @Output() modalConfirm = new EventEmitter();
  @Output() modalClose = new EventEmitter();
  @Output() animationDone: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    if (this.board) {
      this.template.insert(this.board.gt);
    }
  }
}
