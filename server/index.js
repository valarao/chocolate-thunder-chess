const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const { initializeDatabaseConnection } = require('./database/connection');
const usersRouter = require('./routes/users');
const positionsRouter = require('./routes/positions');
const favouritesRouter = require('./routes/favourites');
const customPositionsRouter = require('./routes/customPositions');
const logger = require('./util/logger');
const baseRoutes = require('./constants/base-routes');

const app = express();
initializeDatabaseConnection(process.env.MONGODB_CONNECTION);

// Middleware
app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// API Routers
app.use(baseRoutes.users, usersRouter);
app.use(baseRoutes.positions, positionsRouter);
app.use(baseRoutes.favourites, favouritesRouter);
app.use(baseRoutes.customPositions, customPositionsRouter);

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

module.exports = app;
