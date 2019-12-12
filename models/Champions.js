const mongoose = require('mongoose');
const { Schema } = mongoose;

const championsSchema = new Schema({
  player: {
    playerId: String,
    playerName: String,
    elo: Number,
    wins: Number,
    losses: Number
  },
  team: {
    teamId: String,
    teamName: String,
    elo: Number,
    wins: Number,
    losses: Number
  }
});

mongoose.model('champions', championsSchema);
