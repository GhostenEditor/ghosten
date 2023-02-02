import '@angular/platform-server/init';
import '@angular/localize/init';
import './polyfills.server';
import { enableProdMode } from '@angular/core';

enableProdMode();

export { AppServerModule } from './app/app.server.module';
export { renderModule, renderModuleFactory } from '@angular/platform-server';
