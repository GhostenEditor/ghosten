import 'zone.js/node';

import * as express from 'express';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';
import { join } from 'path';
import { ngExpressEngine } from '@nguniversal/express-engine';

import { AppServerModule } from './main.server';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/demo/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/main/modules/express-engine)
  server.engine(
    'html',
    ngExpressEngine({
      bootstrap: AppServerModule,
    }),
  );

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get(
    '*.*',
    express.static(distFolder, {
      maxAge: '1y',
    }),
  );

  server.get('getRoutes', (req, res) => {
    console.log('getRoutes');
    res.json([]);
  });

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, {
      req,
      providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }],
    });
  });

  return server;
}

function run(): void {
  const port = process.env.PORT || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.info(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is icon.svg proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
// eslint-disable-next-line camelcase
declare const __non_webpack_require__: NodeRequire;
// eslint-disable-next-line camelcase
const mainModule = __non_webpack_require__.main;
const moduleFilename = (mainModule && mainModule.filename) || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './main.server';
