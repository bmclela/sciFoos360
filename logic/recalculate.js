const mongoose = require("mongoose");
const Game = mongoose.model("game");
const Team = mongoose.model("team");
const Player = mongoose.model("player");

module.exports = async () => {
  // Get players, teams, and games
  let getList = await Player.find();
  const players = Object.values(getList);

  getList = await Team.find();
  const teams = Object.values(getList);

  getList = await Game.find();
  const games = Object.values(getList);

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

  // Find player
  const findPlayer = playerName => {
    for (let i = 0; i < players.length; i++) {
      if (players[i].name === playerName) {
        return players[i];
      }
    }
    return false;
  };

  // Find team
  const findTeam = teamName => {
    for (let i = 0; i < teams.length; i++) {
      if (teams[i].name === teamName) {
        return teams[i];
      }
    }
    return false;
  };

  // Get team name
  const getTeamName = (player1, player2) => {
    let teamName = "";
    if (player1 <= player2) {
      teamName = `${player1} and ${player2}`;
    } else {
      teamName = `${player2} and ${player1}`;
    }
    return teamName;
  };

  // Calculate new player elos
  const calculatePlayerElo = (
    winner1Player,
    winner2Player,
    loser1Player,
    loser2Player
  ) => {
    const K = 100;
    const team1Elo = (winner1Player.elo + winner2Player.elo) / 2;
    const team2Elo = (loser1Player.elo + loser2Player.elo) / 2;
    const probability1 =
      1.0 / (1.0 + Math.pow(10, (team2Elo - team1Elo) / 400));
    const probability2 =
      1.0 / (1.0 + Math.pow(10, (team1Elo - team2Elo) / 400));
    winner1Player.elo = winner1Player.elo + K * (1 - probability1);
    winner2Player.elo = winner2Player.elo + K * (1 - probability1);
    loser1Player.elo = loser1Player.elo + K * (0 - probability2);
    loser2Player.elo = loser2Player.elo + K * (0 - probability2);
    winner1Player.wins++;
    winner2Player.wins++;
    loser1Player.losses++;
    loser2Player.losses++;
  };

  const calculateTeamElo = (team1, team2) => {
    const K = 100;
    const probability1 =
      1.0 / (1.0 + Math.pow(10, (team2.elo - team1.elo) / 400));
    const probability2 =
      1.0 / (1.0 + Math.pow(10, (team1.elo - team2.elo) / 400));
    team1.elo = team1.elo + K * (1 - probability1);
    team2.elo = team2.elo + K * (0 - probability2);
    team1.wins++;
    team2.losses++;
  };

  // Calculate player stats for each game
  games.forEach(game => {
    const { winner1, winner2, loser1, loser2 } = game;

    // Find players
    const winner1Player = findPlayer(winner1);
    const winner2Player = findPlayer(winner2);
    const loser1Player = findPlayer(loser1);
    const loser2Player = findPlayer(loser2);

    // Find teams
    const team1Name = getTeamName(winner1, winner2);
    const team2Name = getTeamName(loser1, loser2);

    const team1 = findTeam(team1Name);
    const team2 = findTeam(team2Name);

    calculatePlayerElo(
      winner1Player,
      winner2Player,
      loser1Player,
      loser2Player
    );
    calculateTeamElo(team1, team2);
  });

  // Update players and teams in database using a loop and multiple update calls
  console.log(teams);
  console.log(players);

  // const updateTeams = async teams => {
  //   await Team.updateMany(
  //     {},
  //     { elo: teams.elo, wins: teams.wins, losses: teams.losses }
  //   );
  // };

  // updateTeams(team1, team2);
};
