const mongoose = require('mongoose');

const trackSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
  },
  spotifyTrackId: {
    type: String,
  },
  tier: {
    type: Number,
    required: true,
  },
  tierName: {
    type: String,
    required: true,
  },
  gameId: {
    type: String,
    required: true,
  },
  gameType: {
    type: String,
  },
}, { collection: 'Tracks' });

module.exports = mongoose.model('Track', trackSchema);
