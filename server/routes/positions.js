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
    Position.find(
      {
        $or: [
          { variant: regexPositionFilter },
          { 'baseOpening.name': regexPositionFilter },
        ],
      },
    ).limit(MAX_SEARCH_RESULTS).then((query) => {
      // TODO: Perform actions for Redux
      return res.status(200).json({ data: query });
    });
  } catch (err) {
    logger.error(err);
    return res.status(500).json(err);
  }
});

router.get('/common-positions', async (_req, res) => {
  try {
    Position.aggregate(
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
      const listOfIds = aggQuery.map((item) => mongoose.Types.ObjectId(item._id));

      Position.find({
        _id: {
          $in: listOfIds,
        },
      }).then((findQuery) => {
        // TODO: Perform actions for redux
        return res.status(200).json({ data: findQuery });
      });
    });
  } catch (err) {
    logger.error(err);
    return res.status(500).json(err);
  }
});

module.exports = router;
