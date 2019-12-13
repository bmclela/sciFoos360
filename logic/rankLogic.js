const mongoose = require("mongoose");
const Team = mongoose.model("team");

module.exports = async game => {
  let getList = await Team.find();
  const teams = Object.values(getList);

  // Get the name of the team by putting player names in alphabetical order
  const getTeamName = (player1, player2) => {
    let teamName = "";
    if (player1 <= player2) {
      teamName = `${player1} and ${player2}`;
    } else {
      teamName = `${player2} and ${player1}`;
    }
    return teamName;
  };

  const team1Name = getTeamName(game.winner1, game.winner2);
  const team2Name = getTeamName(game.loser1, game.loser2);

  // Check if teams exist
  const findTeam = teamName => {
    for (let i = 0; i < teams.length; i++) {
      if (teams[i].name === teamName) {
        return teams[i];
      }
    }
    return false;
  };

  // Add teams if they don't exist
  const buildTeam = name => {
    const team = new Team({
      name,
      elo: 1000,
      wins: 0,
      losses: 0
    });
    return team;
  };

  // Either get existing team or build new team
  const team1 = findTeam(team1Name)
    ? findTeam(team1Name)
    : buildTeam(team1Name);
  const team2 = findTeam(team2Name)
    ? findTeam(team2Name)
    : buildTeam(team2Name);

  // Calculate team elos
  const calculateElo = (team1, team2) => {
    const K = 50;
    const probability1 =
      1.0 / (1.0 + Math.pow(10, (team2.elo - team1.elo) / 400));
    const probability2 =
      1.0 / (1.0 + Math.pow(10, (team1.elo - team2.elo) / 400));
    team1.elo = team1.elo + K * (1 - probability1);
    team2.elo = team2.elo + K * (0 - probability2);
    team1.wins++;
    team2.losses++;
  };

  calculateElo(team1, team2);

  // Update teams in database
  const updateTeams = async (team1, team2) => {
    if (findTeam(team1)) {
      await team1.findOneAndUpdate(
        { name: team1.name },
        { elo: team1.elo, wins: team1.wins, losses: team1.losses }
      );
    } else {
      await team1.save();
    }
    if (findTeam(team2)) {
      await team2.findOneAndUpdate(
        { name: team2.name },
        { elo: team2.elo, wins: team2.wins, losses: team2.losses }
      );
    } else {
      await team2.save();
    }
  };

  updateTeams(team1, team2);

  //Get new list of teams to return
};
