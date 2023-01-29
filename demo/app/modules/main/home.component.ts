import { Component, OnInit } from '@angular/core';
import { concat, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  template: `
    <div class="text-center position-relative p-1">
      <h1 class="mt-5 mb-4 display-3 fw-medium">GHOSTEN EDITOR</h1>
      <h6 class="fw-normal mb-5 text-secondary font-monospace m-auto" style="max-width: 24rem;height: 2.5em">
        {{ description }} <span class="cursor">|</span>
      </h6>
      <div class="mb-3">
        <a target="_blank" href="https://github.com/GhostenEditor/ghosten" class="btn btn-lg btn-primary me-3">
          <small>Develop</small>
        </a>
        <button type="button" class="btn btn-lg btn-light">
          <small>How to start</small>
        </button>
      </div>
      <small class="text-body-tertiary"><i>*Note: It is alpha version.</i></small>
      <img
        src="assets/screenshot.webp"
        class="img-fluid border rounded mt-5"
        alt="screenshot"
        width="3420"
        height="2140"
      />
    </div>
  `,
  styles: [
    `
      .cursor {
        animation: blink 0.7s infinite;
      }

      @keyframes blink {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    `,
  ],
})
export class HomeComponent implements OnInit {
  originalDescription = 'A Low-Code Web Editor. Fast and easy to build web page.';
  description: string = '';

  ngOnInit() {
    concat(...this.originalDescription.split('').map(letter => timer(Math.random() * 150).pipe(map(() => letter))))
      // .pipe(tap(console.log))
      .subscribe(letter => (this.description += letter));
  }
}
