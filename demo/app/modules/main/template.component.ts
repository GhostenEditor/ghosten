import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

import { LogEvent } from '@ghosten/common';
import { log } from '../../../utils';

@Component({
  selector: 'app-template',
  template: ` <gt-renderer [data]="route.snapshot.data.data" (log)="log($event)"></gt-renderer>`,
})
export class TemplateComponent {
  private readonly isBrowser: boolean;

  constructor(public route: ActivatedRoute, @Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  log({ type, message, data }: LogEvent) {
    if (this.isBrowser) {
      switch (type) {
        case 'info':
          log('info', '[GHOSTEN  INFO]', message, data);
          break;
        case 'error':
          log('error', '[GHOSTEN ERROR]', message, data);
          break;
        case 'warning':
          log('warn', '[GHOSTEN WARNING]', message, data);
          break;
      }
    }
  }
}
