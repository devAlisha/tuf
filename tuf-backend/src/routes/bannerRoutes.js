const express = require('express');
const Banner = require('../models/Banner');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const banner = await Banner.findOne();
    if (banner) {
      res.json(banner);
    } else {
      res.status(404).json({ message: 'Banner not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/', async (req, res) => {
  try {
    const banner = await Banner.findOneAndUpdate({}, req.body, { new: true, upsert: true });
    res.json(banner);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
