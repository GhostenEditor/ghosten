import { Component } from '@angular/core';

@Component({
  selector: 'app-page-error',
  template: ` <div
    class="font-monospace w-100 h-100 d-flex justify-content-center align-items-center"
    style="font-size: 5rem"
  >
    404 Not Found
  </div>`,
})
export class ErrorComponent {}
