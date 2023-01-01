import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-gt-render',
  template: ` <gt-modal
    modalTitle="预览"
    size="xl"
    [noFooter]="true"
    (cancel)="modalDismiss.emit()"
  >
    <gt-render [data]="data" (log)="log($event)"></gt-render>
  </gt-modal>`,
})
export class RenderComponent {
  @Input() data: any;
  @Output() modalDismiss = new EventEmitter();

  log(event: any) {
    // eslint-disable-next-line no-console
    console.log(event);
  }
}
