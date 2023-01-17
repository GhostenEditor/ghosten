const express = require('express');
const { initRoutes } = require('./index');

// The Express app is exported so that it can be used by serverless Functions.
function app() {
  const server = express();

  initRoutes(server);

  return server;
}

function run() {
  const port = process.env.PORT || 4001;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.info(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
