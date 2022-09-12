const express = require('express');

const router = express.Router();

const Track = require('../models/tracks');
// Get all games

router.get('/', async (req, res) => {
  try {
    const tracks = await Track.find();
    res.json(tracks);
  } catch (err) {
    // you gotta fix somethin
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const tracks = await Track.findById(req.params.id);
    res.json(tracks);
  } catch (err) {
    // you gotta fix somethin
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
