const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const { initializeDatabaseConnection } = require('./database/connection');
const usersRouter = require('./routes/users');
const logger = require('./util/logger');

const app = express();
initializeDatabaseConnection();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// API Routers
app.use('/api/users', usersRouter);

// Heroku Post-Build Path
app.use(express.static(path.join(__dirname, '../client/build')));
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../client/build'));
});

// Start Server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  logger.info(`Server started on port ${port}`);
});
