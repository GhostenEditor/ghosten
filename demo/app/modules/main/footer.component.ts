import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: ` <footer class="mt-5 py-4 oblique-stripes border-top">
    <div class="container py-4 px-4">
      <div class="row">
        <div class="col-lg-6 col-md-auto mb-3 d-flex">
          <a href="/" class="navbar-brand d-flex flex-column align-items-center">
            <img
              src="assets/icons/192.png"
              alt="Ghosten Logo"
              class="rounded"
              width="80"
              height="80"
              style="width: 5rem;height: 5rem;"
            />
            <span class="fw-bold my-2">GHOSTEN</span>
          </a>
          <div class="ms-3">
            A Low-Code Web Editor. If you like it, give me a star please! Code licensed MIT, Currently v0.1.0-alpha9.
          </div>
        </div>
        <div class="col-6 col-lg-3 mb-3">
          <h5>LANGUAGES</h5>
          <ul class="list-unstyled">
            <li class="mb-2">
              <a href="/ghosten/zh/">简体中文版</a>
            </li>
            <li class="mb-2">
              <a href="/ghosten/en-US/">English Version</a>
            </li>
            <li class="mb-2">
              <span>日本語版 (todo)</span>
            </li>
          </ul>
        </div>
        <div class="col-6 col-lg-3 mb-3">
          <h5>LINKS</h5>
          <ul class="list-unstyled">
            <li class="mb-2">
              <a target="_blank" href="https://github.com/GhostenEditor/ghosten">GITHUB</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>`,
})
export class FooterComponent {}
