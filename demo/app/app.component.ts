import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

import { ToastService } from './modules/toast/toast.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  constructor(toast: ToastService, updates: SwUpdate) {
    if (updates.isEnabled) {
      updates.versionUpdates.subscribe(event => {
        console.info('versionUpdates', event);
        if (event.type === 'VERSION_READY') {
          toast.show({
            type: 'primary',
            title: $localize`:Toast Type\: Info:提示`,
            message: $localize`:Toast Message\: There is new edition, update now?:有新版本，是否更新？`,
            buttons: [$localize`:Button\: Yes:是`],
            duration: false,
            buttonClick: (button: string) => {
              if (button === $localize`:Button\: Yes:是`) {
                location.reload();
              }
            },
          });
        }
      });
    }
  }
}
