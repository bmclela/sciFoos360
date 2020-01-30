const mongoose = require("mongoose");
const { Schema } = mongoose;

const hallOfFamePlayerSchema = new Schema({
  name: String,
  elo: Number,
  wins: Number,
  losses: Number,
  date: Date
});

mongoose.model("hallOfFamePlayer", hallOfFamePlayerSchema);
