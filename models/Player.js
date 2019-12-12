const mongoose = require("mongoose");
const { Schema } = mongoose;

const playerSchema = new Schema({
  playerName: String,
  elo: Number,
  wins: Number,
  losses: Number
});

mongoose.model("player", playerSchema);
