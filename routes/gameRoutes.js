const mongoose = require("mongoose");
const Game = mongoose.model("game");
const Team = mongoose.model("team");
const Player = mongoose.model("player");
const teamRankLogic = require("../logic/teamRankLogic");
const playerRankLogic = require("../logic/playerRankLogic");
const recalculate = require("../logic/recalculate");

module.exports = app => {
  app.get("/api/games", async (req, res) => {
    const games = await Game.find();
    res.send(games);
  });

  app.post("/api/games", async (req, res) => {
    const { gameId, winner1, winner2, loser1, loser2 } = req.body;

    const game = new Game({
      gameId,
      winner1,
      winner2,
      loser1,
      loser2,
      date: Date.now()
    });

    await game.save();

    teamRankLogic(game);
    playerRankLogic(game);

    const getTeamsandPlayers = async () => {
      const newTeams = await Team.find();
      const newPlayers = await Player.find();
      res.send({ newGame: game, newTeams, newPlayers });
    };

    getTeamsandPlayers();
  });

  app.delete("/api/games/:gameId", async (req, res) => {
    await Game.findOneAndRemove({ _id: req.params.gameId });
    recalculate();
    const games = await Game.find();
    res.send(games);
  });

  app.get("/api/teams", async (req, res) => {
    const teams = await Team.find();
    res.send(teams);
  });

  app.get("/api/players", async (req, res) => {
    const players = await Player.find();
    res.send(players);
  });

  app.post("/api/players", async (req, res) => {
    const { name } = req.body;

    const player = new Player({
      name,
      elo: 1000,
      wins: 0,
      losses: 0
    });

    await player.save();

    res.send(player);
  });
};
