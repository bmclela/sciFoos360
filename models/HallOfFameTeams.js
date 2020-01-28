const mongoose = require("mongoose");
const { Schema } = mongoose;

const hallOfFameTeamsSchema = new Schema({
  name: String,
  elo: Number,
  wins: Number,
  losses: Number,
  date: Date,
  rank: Number
});

mongoose.model("hallOfFameTeams", hallOfFameTeamsSchema);
