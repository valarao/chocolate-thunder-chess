const mongoose = require('mongoose');
const logger = require('../util/logger');

exports.initializeDatabaseConnection = () => {
  const connection = process.env.MONGODB_CONNECTION;
  mongoose.connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
    .then(() => logger.info('Database connection successful'))
    .catch((err) => logger.error(err));
};
