'use strict';

const Hapi = require('hapi');

const server = Hapi.server({
    port: 8080,
    host: 'localhost'
});

const init = async () => {
  await server.register({
    plugin: require('./')
  });
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();