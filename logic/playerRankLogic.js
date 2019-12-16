const mongoose = require('mongoose');
const Player = mongoose.model('player');

module.exports = async game => {
  let getList = await Player.find();
  const players = Object.values(getList);

  // Find players in database
  const findPlayer = playerName => {
    for (let i = 0; i < players.length; i++) {
      if (players[i].name === playerName) {
        return players[i];
      }
    }
    return false;
  };

  const winner1 = findPlayer(game.winner1);
  const winner2 = findPlayer(game.winner2);
  const loser1 = findPlayer(game.loser1);
  const loser2 = findPlayer(game.loser2);

  // Calculate new player elos
  const calculateElo = (winner1, winner2, loser1, loser2) => {
    const K = 100;
    const team1Elo = (winner1.elo + winner2.elo) / 2;
    const team2Elo = (loser1.elo + loser2.elo) / 2;
    const probability1 =
      1.0 / (1.0 + Math.pow(10, (team2Elo - team1Elo) / 400));
    const probability2 =
      1.0 / (1.0 + Math.pow(10, (team1Elo - team2Elo) / 400));
    winner1.elo = winner1.elo + K * (1 - probability1);
    winner2.elo = winner2.elo + K * (1 - probability1);
    loser1.elo = loser1.elo + K * (0 - probability2);
    loser2.elo = loser2.elo + K * (0 - probability2);
    winner1.wins++;
    winner2.wins++;
    loser1.losses++;
    loser2.losses++;
  };

  calculateElo(winner1, winner2, loser1, loser2);

  // Update players in database
  const updatePlayers = async (winner1, winner2, loser1, loser2) => {
    await Player.findOneAndUpdate(
      { name: winner1.name },
      { elo: winner1.elo, wins: winner1.wins, losses: winner1.losses }
    );
    await Player.findOneAndUpdate(
      { name: winner2.name },
      { elo: winner2.elo, wins: winner2.wins, losses: winner2.losses }
    );
    await Player.findOneAndUpdate(
      { name: loser1.name },
      { elo: loser1.elo, wins: loser1.wins, losses: loser1.losses }
    );
    await Player.findOneAndUpdate(
      { name: loser2.name },
      { elo: loser2.elo, wins: loser2.wins, losses: loser2.losses }
    );
  };

  updatePlayers(winner1, winner2, loser1, loser2);
};
