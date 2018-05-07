module.exports = {
  name: "Api",
  register: async (server, options) => {
    console.info(`Api plugged with log level: ${options.logLevel}`)

    server.route([
      {
        method: "GET",
        path: "/api",
        handler: async (request, h) => {
          return { data: "Hello From Api" };
        }
      }
    ]);

  }
}
