const mongoose = require('mongoose');
const express = require('express');
const logger = require('../util/logger');
const router = express.Router();
const Position = require('../models/Position');

  router.get('/search', async (_req, res) => {
    try {
      const searchFilter = _req.query.filter.replace(/[^a-z\s-']/gi, '')
      const regexSearchFilter = new RegExp(searchFilter);
      const regexPositionFilter = { $regex: regexSearchFilter, $options: 'i' };
      Position.find(
        { $or : 
          [
            { variant : regexPositionFilter }, 
            { "baseOpening.name": regexPositionFilter }
          ] 
        }).limit(90).then( (query) => {
        // TODO: Perform actions for Redux
        return res.status(200).json({ message: 'Done' });
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
                $ne: null
              }
            }
          },
          { 
            $group: {
          _id: '$baseOpening.baseId',
          count: { $sum: 1 },
            }
          },
          {
            $sort: {count: -1 }
          },
        ]).limit(9).then((query) => {
        listOfIds = query.map((item) => mongoose.Types.ObjectId(item._id));
        
        Position.find({
          _id: {
            $in: listOfIds
          }
        }).then( (query) => {
            // TODO: Perform actions for redux
          return res.status(200).json({ message: 'Done' });
        })
      })
    } catch (err) {
        logger.error(err);
        return res.status(500).json(err);
    }
});

module.exports = router;