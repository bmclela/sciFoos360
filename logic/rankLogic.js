const mongoose = require('mongoose');
const Team = mongoose.model('team');

module.exports = async game => {
  let getList = await Team.find();
  const teams = Object.values(getList);

  // Get the name of the team by putting player names in alphabetical order
  const getTeamName = (player1, player2) => {
    if (player1 <= player2) {
      var teamName = `${player1} and ${player2}`;
    } else {
      var teamName = `${player2} and ${player1}`;
    }
    return teamName;
  };

  const team1Name = getTeamName(game.winner1, game.winner2);
  const team2Name = getTeamName(game.loser1, game.loser2);

  // Check if teams exist
  const findTeam = teamName => {
    for (var i = 0; i < teams.length; i++) {
      if (teams[i].teamName === teamName) {
        return teams[i];
      }
    }
    return false;
  };

  // Add teams if they don't exist
  const buildTeam = async teamName => {
    const team = new Team({
      teamName,
      elo: 1000,
      wins: 0,
      losses: 0
    });
    await team.save();
  };

  // You've gotta figure out your async/await man...

  let team1;
  let team2;

  if (findTeam(team1Name)) {
    team1 = findTeam(team1Name);
  } else {
    buildTeam(team1Name);
    team1 = findTeam(team1Name);
  }

  if (findTeam(team2Name)) {
    team2 = findTeam(team2Name);
  } else {
    buildTeam(team2Name);
    team2 = findTeam(team2Name);
  }

  console.log(team1);
  console.log(team2);

  // Calculate team elos
  const calculateElo = (team1Name, team2Name) => {
    const K = 50;
    team1 = findTeam(team1Name);
    team2 = findTeam(team2Name);
    const probability1 =
      1.0 / (1.0 + Math.pow(10, (team2.elo - team1.elo) / 400));
    const probability2 =
      1.0 / (1.0 + Math.pow(10, (team1.elo - team2.elo) / 400));
    team1.elo = team1.elo + K * (1 - probability1);
    team2.elo = team2.elo + K * (0 - probability2);
    team1.gamesWon++;
    team2.gamesLost++;
  };

  // Update teams
};
