/**
*
*
**/

const server = require('./server')
const port = process.env.SERVICE_PORT || process.env.PORT || 3000;

process.on('unhandledRejection', (e) => {
  console.log(e.message, e.stack);
});

server.listen(port, '0.0.0.0', (error) => {
  if (error) {
    console.log(error)
  }

  console.info('App running on 🌎 at http://localhost:%s', port)
})
