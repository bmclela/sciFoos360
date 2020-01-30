const mongoose = require("mongoose");
const { Schema } = mongoose;

const hallOfFameTeamSchema = new Schema({
  name: String,
  elo: Number,
  wins: Number,
  losses: Number,
  date: Date
});

mongoose.model("hallOfFameTeam", hallOfFameTeamSchema);
