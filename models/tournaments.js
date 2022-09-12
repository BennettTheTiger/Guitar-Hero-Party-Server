const mongoose = require('mongoose');

const tournamentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  players: {
    type: [],
  },
  rounds: [],
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Player', tournamentSchema, { collection: 'Tournaments' });
