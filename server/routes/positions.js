const mongoose = require('mongoose');
const express = require('express');
const logger = require('../util/logger');

const router = express.Router();
const Position = require('../models/Position');

router.get('/search', async (req, res) => {
  try {
    const MAX_SEARCH_RESULTS = 90;
    // Matches any characters that are not letters, a space, - or '
    const nonLettersRegex = new RegExp(/[^a-z\s-']/gi);
    const cleanedFilter = req.query.filter.trim().replace(nonLettersRegex, '');
    const filterRegex = new RegExp(cleanedFilter);
    const regexPositionFilter = { $regex: filterRegex, $options: 'i' };
    return Position.find(
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
      },
    ).limit(MAX_SEARCH_RESULTS).then((query) => res.status(200).json({ positions: query }));
  } catch (err) {
    logger.error(err);
    return res.status(500).json(err);
  }
});

router.get('/variants/:id', async (req, res) => {
  const { id } = req.params;
  return Position.find({ 'baseOpening.baseId': id }, 'variant previewImage pgn', { sort: { variant: 1 } }).then((query) => {
    res.status(200).json({ positions: query });
  });
});

router.get('/common', async (_req, res) => {
  try {
    return Position.aggregate(
      [
        {
          $match: {
            'baseOpening.baseId': {
              $exists: true,
              $ne: null,
            },
          },
        },
        {
          $group: {
            _id: '$baseOpening.baseId',
            count: { $sum: 1 },
          },
        },
        {
          $sort: { count: -1 },
        },
      ],
    ).limit(9).then((aggQuery) => {
      // eslint-disable-next-line no-underscore-dangle
      const listOfIds = aggQuery.map((item) => mongoose.Types.ObjectId(item._id));

      Position.find({
        _id: {
          $in: listOfIds,
        },
      }).then((findQuery) => res.status(200).json({ positions: findQuery }));
    });
  } catch (err) {
    logger.error(err);
    return res.status(500).json(err);
  }
});

module.exports = router;
