const Good = require('good');

const ApiPlug = require('../../api');
const MailPlug = require('../../mailer');
const Frontend = require('../../frontend');

const logOptions = {
  ops: {
    interval: 1000
  },
  reporters: {
    console: [{
      module: 'good-squeeze',
      name: 'Squeeze',
      args: [{ log: '*', response: '*' }]
    }, {
      module: 'good-console'
    }, 'stdout']
  }
};

module.exports = {
  development: {
    server: {
      port: '8080',
      host: 'localhost'
    },
    register: {
      plugins: [
        {
          plugin:'good',
          options: logOptions
        },
        {
          plugin: ApiPlug,
          options: { logLevel: 'INFO' }
        },
        Frontend,
        {
          plugin: MailPlug,
          options: {
            smtp: {
              address: 'localhost',
              domain: 'foobar.dev'
            }
          }
        }
      ]
    }
  }
};
