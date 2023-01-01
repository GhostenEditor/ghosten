import { from, fromEvent, of } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';

const baseUrl = 'https://cdn.bootcdn.net/ajax/libs/monaco-editor/0.24.0/min/vs';
export const monacoLoader = of(null).pipe(
  map(() => {
    const loaderScript = document.createElement('script');
    loaderScript.type = 'text/javascript';
    loaderScript.src = `${baseUrl}/loader.js`;
    document.body.appendChild(loaderScript);
    return loaderScript;
  }),
  switchMap(loaderScript => fromEvent(loaderScript, 'load')),
  switchMap(() => {
    (<any>window).require.config({ paths: { vs: baseUrl } });
    return from(
      new Promise(resolve =>
        (<any>window).require([`vs/editor/editor.main`], resolve),
      ),
    );
  }),
  shareReplay(1),
);
