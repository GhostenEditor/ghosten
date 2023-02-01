import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

import { BUTTON_YES, SW_UPDATE_MESSAGE, TOAST_INFO_TITLE } from './message';
import { ToastService } from './modules/toast/toast.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  constructor(toast: ToastService, updates: SwUpdate) {
    if (updates.isEnabled) {
      updates.versionUpdates.subscribe(event => {
        if (event.type === 'VERSION_READY') {
          toast.show({
            type: 'primary',
            title: TOAST_INFO_TITLE,
            message: SW_UPDATE_MESSAGE,
            buttons: [BUTTON_YES],
            duration: false,
            buttonClick: (button: string) => {
              if (button === BUTTON_YES) {
                location.reload();
              }
            },
          });
        }
      });
    }
  }
}
