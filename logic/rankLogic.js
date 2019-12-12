const mongoose = require("mongoose");
const Game = mongoose.model("game");

module.exports = async newGame => {
  const oldGames = await Game.find();
  console.log(`New Game: ${newGame}`);
  console.log(`Old Games: ${oldGames}`);
};
