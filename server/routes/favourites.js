const express = require('express');
const logger = require('../util/logger');

const router = express.Router();
const User = require('../models/User');

router.get('/get/:ownerId', async (_req, res) => {
  try {
    const { ownerId } = _req.params;
    return User.find({
      id: ownerId,
    }, { _id: 0, favourites: 1 }).populate('favourites', '_id baseOpening variant previewImageLink pgn')
      .then((query) => res.status(200).json({ favourites: query }));
  } catch (err) {
    logger.error(err);
    return res.status(500).json(err);
  }
});

router.patch('/add/:ownerId/:id', async (_req, res) => {
  const { ownerId, id } = _req.params;
  try {
    return User.findOneAndUpdate({
      id: ownerId,
    }, { $push: { favourites: id } }).then((query) => res.status(200).json({ favourites: query }));
  } catch (err) {
    logger.error(err);
    return res.status(500).json(err);
  }
});

router.get('/search/:ownerId', async (_req, res) => {
  const { ownerId } = _req.params;
  try {
    const MAX_SEARCH_RESULTS = 90;
    // Matches any characters that are not letters, a space, - or '
    const nonLettersRegex = new RegExp(/[^a-z\s-']/gi);
    const cleanedFilter = _req.query.filter.trim().replace(nonLettersRegex, '');
    const filterRegex = new RegExp(cleanedFilter);
    const regexPositionFilter = { $regex: filterRegex, $options: 'i' };
    return User.find({
      id: ownerId,
    }, { _id: 0, favourites: 1 }).populate('favourites', '_id baseOpening variant previewImageLink pgn').find(
      {
        $and: [
          {
            variant: {
              $exists: false,
              $eq: null,
            },
          },
          { 'favourites.baseOpening.name': regexPositionFilter },
        ],
      }, '_id baseOpening variant previewImageLink pgn',
    ).limit(MAX_SEARCH_RESULTS)
      .then((query) => res.status(200).json({ positions: query }));
  } catch (err) {
    logger.error(err);
    return res.status(500).json(err);
  }
});

router.delete('/delete/:ownerId/:id', async (_req, res) => {
  const { ownerId, id } = _req.params;
  try {
    return User.findOneAndUpdate({
      id: ownerId,
    }, { $pull: { favourites: id } }).then((query) => res.status(200).json({ favourites: query }));
  } catch (err) {
    logger.error(err);
    return res.status(500).json(err);
  }
});
module.exports = router;
