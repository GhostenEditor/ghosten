import { ApplicationRef, enableProdMode } from '@angular/core';
import { enableDebugTools } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { log } from './utils';

if (environment.production) {
  enableProdMode();
}
const Stats = require('stats.js');
const stats = new Stats();
stats.dom.style.top = '';
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
    .catch(err => log('error', err));
}

// bootstrap();

if (document.readyState === 'complete') {
  bootstrap();
} else {
  document.addEventListener('DOMContentLoaded', bootstrap);
}

const darkMode = matchMedia('(prefers-color-scheme: dark)');
const setColorScheme = (dark: boolean) => (document.documentElement.dataset.bsTheme = dark ? 'dark' : 'light');
// const convertStyle = () => {
//   // document.body.style.height = `${window.innerHeight}px`;
//   document.documentElement.style.fontSize =
//     Math.max(0, Math.round((window.innerWidth - 1000) / 200)) + 12 + 'px';
// };
darkMode.addEventListener('change', event => setColorScheme(event.matches));
// window.addEventListener('resize', convertStyle);
// window.addEventListener('DOMContentLoaded', convertStyle);
