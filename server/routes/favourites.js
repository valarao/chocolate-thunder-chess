const express = require('express');
const logger = require('../util/logger');

const router = express.Router();
const Favourite = require('../models/Position').favouritePositions;

// TODO: This is a placeholder. Update after application API route design is complete.
/* GET users listing. */
router.get('/', async (_req, res) => {
  try {
    return Favourite.find({}).then((query) => res.status(200).json({ favourites: query }));
  } catch (err) {
    logger.error(err);
    return res.status(500).json(err);
  }
});

router.post('/', async (_req, res) => {
  const favourite = new Favourite(_req.body);
  try {
    await favourite.save();
    return Favourite.find({}).then((query) => res.status(200).json({ favourites: query }));
  } catch (err) {
    logger.error(err);
    return res.status(500).json(err);
  }
});
module.exports = router;
