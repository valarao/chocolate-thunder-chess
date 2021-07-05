const express = require('express');
const logger = require('../util/logger');

const router = express.Router();
const Favourite = require('../models/Position').favouritePositions;

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

router.get('/search', async (req, res) => {
  try {
    const MAX_SEARCH_RESULTS = 90;
    // Matches any characters that are not letters, a space, - or '
    const nonLettersRegex = new RegExp(/[^a-z\s-']/gi);
    const cleanedFilter = req.query.filter.trim().replace(nonLettersRegex, '');
    const filterRegex = new RegExp(cleanedFilter);
    const regexPositionFilter = { $regex: filterRegex, $options: 'i' };
    return Favourite.find(
      {
        $and: [
          {
            variant: {
              $exists: false,
              $eq: null,
            },
          },
          { 'baseOpening.name': regexPositionFilter },
        ],
      }, '_id baseOpening variant previewImageLink pgn',
    ).limit(MAX_SEARCH_RESULTS).then((query) => res.status(200).json({ positions: query }));
  } catch (err) {
    logger.error(err);
    return res.status(500).json(err);
  }
});

router.delete('/:id', async (_req, res) => {
  try {
    const favourite = await Favourite.findByIdAndDelete(_req.params.id);

    if (!favourite) {
      res.status(404).send();
    }
    return Favourite.find({}).then((query) => res.status(200).json({ favourites: query }));
  } catch (err) {
    logger.error(err);
    return res.status(500).json(err);
  }
});
module.exports = router;
