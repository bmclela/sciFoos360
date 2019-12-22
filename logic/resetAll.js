const mongoose = require('mongoose');
const Game = mongoose.model('game');
const Team = mongoose.model('team');
const Player = mongoose.model('player');

const reset = async () => {
  // Get players, teams
  let getList = await Player.find();
  const players = Object.values(getList);

  getList = await Team.find();
  const teams = Object.values(getList);

  //Delete all games
  await Game.deleteMany({});

  // Set players and teams back to 0
  players.forEach(player => {
    player.elo = 1000;
    player.wins = 0;
    player.losses = 0;
  });

  teams.forEach(team => {
    team.elo = 1000;
    team.wins = 0;
    team.losses = 0;
  });

  // Update players and teams in database using a loop and multiple update calls
  const updateTeams = async () => {
    for (let i = 0; i < teams.length; i++) {
      await Team.findOneAndUpdate(
        { _id: teams[i].id },
        { elo: teams[i].elo, wins: teams[i].wins, losses: teams[i].losses }
      );
    }
  };

  updateTeams();

  const updatePlayers = async () => {
    for (let i = 0; i < players.length; i++) {
      await Player.findOneAndUpdate(
        { _id: players[i].id },
        {
          elo: players[i].elo,
          wins: players[i].wins,
          losses: players[i].losses
        }
      );
    }
  };

  await updatePlayers();
};

exports.reset = reset;
