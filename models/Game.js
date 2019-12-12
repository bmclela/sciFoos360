const mongoose = require('mongoose');
const { Schema } = mongoose;

const gameSchema = new Schema({
  gameId: String,
  winner1: String,
  winner2: String,
  loser1: String,
  loser2: String,
  date: Date
});

mongoose.model('game', gameSchema);
