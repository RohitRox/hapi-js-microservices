module.exports = {
  name: "Mail",
  register: async (server, options) => {
    console.info('Mailer plugged with smtp: %j', options.smtp);

    server.route([
      {
        method: "POST",
        path: "/mail",
        handler: async (request, h) => {
          console.info('Post params', request.payload);
          return { message: `Mail with params: ${JSON.stringify(request.payload)}`};
        }
      }
    ]);

  }
}
