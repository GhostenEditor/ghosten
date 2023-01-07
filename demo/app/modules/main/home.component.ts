import { Component } from '@angular/core';

@Component({
  selector: 'home',
  template: `
    <div class="text-center position-relative p-1">
      <h1 class="mt-5 mb-4" style="font-size: 4rem;">
        GHOSTEN EDITOR
      </h1>
      <h6
        class="fw-normal mb-5 text-secondary font-monospace m-auto"
        style="width: 24rem;"
      >
        A Low-Code Web Editor. Fast and easy to build web page.
      </h6>
      <div class="mb-3">
        <a
          target="_blank"
          href="https://github.com/GhostenEditor/ghosten"
          class="btn btn-lg btn-primary me-3"
        >
          <small>Develop</small>
        </a>
        <button type="button" class="btn btn-lg btn-light">
          <small>How to start</small>
        </button>
      </div>
      <small class="text-body-tertiary"
        ><i>*Note: It is alpha version.</i></small
      >
    </div>
  `,
})
export class HomeComponent {}
