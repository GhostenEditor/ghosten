import { ApplicationRef, enableProdMode } from '@angular/core';
import { enableDebugTools } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { log } from './utils';

if (environment.production) {
  enableProdMode();
} else {
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
}

function bootstrap() {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then(moduleRef => {
      const applicationRef = moduleRef.injector.get(ApplicationRef);
      enableDebugTools(applicationRef.components[0]);
    })
    .catch(err => log('error', 'Bootstrap Error', err));
}

if (document.readyState === 'complete') {
  bootstrap();
} else {
  document.addEventListener('DOMContentLoaded', bootstrap);
}
initSettings();

function initSettings() {
  const fontSize = localStorage.getItem('fontSize');
  const theme = localStorage.getItem('theme');
  const direction = localStorage.getItem('direction');
  if (fontSize) {
    document.documentElement.style.setProperty('font-size', fontSize + 'px');
  }
  if (!theme || theme === 'auto') {
    const darkMode = matchMedia('(prefers-color-scheme: dark)');
    const setColorScheme = (dark: boolean) => {
      const theme = localStorage.getItem('theme');
      if (!theme || theme === 'auto') {
        document.documentElement.dataset.bsTheme = dark ? 'dark' : 'light';
      }
    };
    darkMode.addEventListener('change', event => setColorScheme(event.matches));
    document.documentElement.dataset.bsTheme = darkMode.matches ? 'dark' : 'light';
  } else {
    document.documentElement.dataset.bsTheme = theme;
  }
  if (direction === 'rtl') {
    document.documentElement.dir = 'rtl';
    const linkElement = document.head.querySelector<HTMLLinkElement>('link#bootstrap')!;
    linkElement.href = linkElement.href.replace('bootstrap.min.css', 'bootstrap.rtl.min.css');
  }
}
