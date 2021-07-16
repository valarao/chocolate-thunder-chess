const express = require('express');
const logger = require('../util/logger');

const router = express.Router();
const User = require('../models/User');

router.put('/auth', async (req, res) => {
  try {
    return User.findOneAndUpdate({ id: req.body.id }, req.body, {
      upsert: true,
      new: true,
      rawResult: true,
    }).then((query) => {
      res.status(200).json({ user: query });
    });
  } catch (error) {
    logger.error(error);
    return res.status(500).json(error);
  }
});

module.exports = router;
