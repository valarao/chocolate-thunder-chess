const pino = require('pino');

const logger = pino({
  level: process.env.LOG_LEVEL || 'debug',
  prettyPrint: {
    colorize: true,
    translateTime: 'SYS:standard',
    ignore: 'hostname,pid',
  },
});

module.exports = logger;
