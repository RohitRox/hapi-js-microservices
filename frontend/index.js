const Path = require('path');

module.exports = {
  name: "Frontend",
  register: async (server, options) => {
    console.info('Frontend plugged.');

    await server.register(require('inert'));

    server.route({
      method: 'GET',
      path: '/',
      handler: (request, h) => {
        return h.file(Path.join(__dirname, 'public/index.html'));
      }
    });

    server.route({
      method: 'GET',
      path: '/public/{param*}',
      handler: {
        directory: {
          path: Path.join(__dirname, 'public')
        }
      }
    });

  }
}
