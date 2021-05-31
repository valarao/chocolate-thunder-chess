const express = require('express');
const router = express.Router();

// TODO: This is a placeholder. Update after application API route design is complete.
/* GET users listing. */
router.get('/', async (_req, res) => {
  try {
      const data = 'Placeholder GET';
      return res.status(200).json({ message: data });
  } catch (err) {
      console.log(err);
      return res.status(500).json(err);
  }
});

module.exports = router;
