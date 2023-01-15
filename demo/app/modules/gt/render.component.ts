import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LogEvent } from '@ghosten/common';

@Component({
  selector: 'app-gt-render',
  template: ` <gt-modal
    i18n-modalTitle="Modal Title: Preview"
    modalTitle="预览"
    modalSize="xl"
    (cancel)="modalDismiss.emit()"
  >
    <gt-renderer [data]="data" (log)="log($event)"></gt-renderer>
  </gt-modal>`,
})
export class RenderComponent {
  @Input() data: any;
  @Output() modalDismiss = new EventEmitter();

  log({ type, message, data }: LogEvent) {
    switch (type) {
      case 'info':
        console.info('[GHOSTEN  INFO]: ' + message + ' %O', data);
        break;
      case 'error':
        console.error('[GHOSTEN ERROR]: ' + message, data);
        break;
      case 'warning':
        console.warn('[GHOSTEN WARNING]: ' + message, data);
        break;
    }
  }
}
