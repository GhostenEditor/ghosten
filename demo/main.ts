import { ApplicationRef, enableProdMode } from '@angular/core';
import { enableDebugTools } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
const Stats = require('stats.js');
const stats = new Stats();
stats.dom.style.position = 'fixed';
stats.dom.style.left = '';
stats.dom.style.top = '';
stats.dom.style.right = 'env(safe-area-inset-right)';
stats.dom.style.bottom = 'env(safe-area-inset-bottom)';
document.body.appendChild(stats.dom);
const monitor = () => {
  stats.update();
  requestAnimationFrame(monitor);
};
requestAnimationFrame(monitor);

function bootstrap() {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then(moduleRef => {
      const applicationRef = moduleRef.injector.get(ApplicationRef);
      enableDebugTools(applicationRef.components[0]);
    })
    .catch(err => console.error(err));
}

bootstrap();

// if (document.readyState === 'complete') {
//   bootstrap();
// } else {
//   document.addEventListener('DOMContentLoaded', bootstrap);
// }

const darkMode = matchMedia('(prefers-color-scheme: dark)');
document.documentElement.dataset.bsTheme = darkMode.matches ? 'dark' : 'light';
darkMode.addEventListener('change', function () {
  document.documentElement.dataset.bsTheme = this.matches ? 'dark' : 'light';
});
