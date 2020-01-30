const mongoose = require('mongoose');
const Game = mongoose.model('game');
const Team = mongoose.model('team');
const Player = mongoose.model('player');
const HallOfFamePlayer = mongoose.model('hallOfFamePlayer');
const HallOfFameTeam = mongoose.model('hallOfFameTeam');

const reset = async () => {
  let date = new Date();
  date.setDate(date.getDate() - 1);

  // Get players, teams
  let getList = await Player.find();
  const players = Object.values(getList);
  let bestPlayer;
  if (players[0]) {
    bestPlayer = players[0];
    players.forEach(player => {
      if (player.elo > bestPlayer.elo) {
        bestPlayer = player;
      }
    })
  }

  const hallOfFamePlayer = new HallOfFamePlayer({
    name: bestPlayer.name,
    elo: bestPlayer.elo,
    wins: bestPlayer.wins,
    losses: bestPlayer.losses,
    date
  })

  hallOfFamePlayer.save();

  getList = await Team.find();
  const teams = Object.values(getList);
  let bestTeam;
  if (teams[0]) {
    bestTeam = teams[0];
    teams.forEach(team => {
      if (team.elo > bestTeam.elo) {
        bestTeam = team;
      }
    })
  }

  const hallOfFameTeam = new HallOfFameTeam({
    name: bestTeam.name,
    elo: bestTeam.elo,
    wins: bestTeam.wins,
    losses: bestTeam.losses,
    date
  })

  hallOfFameTeam.save();

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
