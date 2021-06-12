const mongoose = require('mongoose');
const logger = require('../util/logger');

exports.initializeDatabaseConnection = (connection) => {
  mongoose.connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
    .then(() => logger.info('Database connection successful'))
    .catch((err) => logger.error(err));
};
