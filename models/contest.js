const mongoose = require('mongoose');

const contestSchema = new mongoose.Schema({
  contestants: [],
  forfeit: {
    type: Boolean,
    default: false,
  },
  winnerId: String,
  winningScore: {
    type: Number,
    default: 0,
  },
  loosingScore: {
    type: Number,
    default: 0,
  },
  loosingId: String,
  round: {
    type: Number,
    default: 0,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  tournamentId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Contest', contestSchema);
