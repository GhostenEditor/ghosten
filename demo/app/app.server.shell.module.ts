import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServerModule } from '@angular/platform-server';

@Component({
  selector: 'app-root',
  template: ` <div class="sk-plane"></div>`,
  styles: [
    `
      .sk-plane {
        width: 4rem;
        height: 4rem;
        background-color: #404dff;
        animation: sk-plane 1.2s infinite ease-in-out;
        position: absolute;
        left: 50%;
        top: 50%;
        margin: -2rem 0 0 -2rem;
      }

      @keyframes sk-plane {
        0% {
          transform: perspective(120px) rotateX(0deg) rotateY(0deg);
        }
        50% {
          transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
        }
        100% {
          transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
        }
      }
    `,
  ],
})
export class AppComponent {}

@NgModule({
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), ServerModule],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
})
export class AppServerModule {}
