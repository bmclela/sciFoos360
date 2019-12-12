const mongoose = require("mongoose");
const { Schema } = mongoose;

const championsSchema = new Schema({
  player: {
    playerName: String,
    elo: Number,
    wins: Number,
    losses: Number
  },
  team: {
    teamName: String,
    elo: Number,
    wins: Number,
    losses: Number
  }
});

mongoose.model("champions", championsSchema);
