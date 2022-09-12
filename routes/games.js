const express = require('express');

const router = express.Router();

const { GUITAR_HERO_GAME_TYPES } = require('../constants');

// Get all games

router.get('/', (req, res) => {
  res.send('Gotcha');
});

router.get('/:id', (req, res) => {

});

router.get('/types', (req, res) => {
  res.json(GUITAR_HERO_GAME_TYPES);
});

module.exports = router;
