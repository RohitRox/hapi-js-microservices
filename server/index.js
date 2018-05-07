'use strict';

const Hapi = require('hapi');
const Glue = require('glue');

const NodeEnv = process.env['NODE_ENV'] || 'development';

const Config = require('./config');
const Manifest = require('./manifest');

const manifest = Manifest[NodeEnv];

const init = async () => {
  try {
    const server = await Glue.compose(manifest, { relativeTo: __dirname });

    await server.start();

    console.info(`Server running at: ${server.info.uri}`);
  } catch(err) {
    console.info(err);

    process.exit(1);
  }
};

init();