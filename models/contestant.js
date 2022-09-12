const mongoose = require('mongoose');

const contestantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  tournaments: {
    type: Array,
    default: [],
  },
  totalWins: {
    type: Number,
    default: 0,
  },
  totalScore: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model('Contestants', contestantSchema);
