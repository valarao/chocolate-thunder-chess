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
