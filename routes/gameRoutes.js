const mongoose = require("mongoose");
const Game = mongoose.model("game");
const Team = mongoose.model("team");
const Player = mongoose.model("player");
const Backup = mongoose.model("backup");
const HallOfFamePlayer = mongoose.model("hallOfFamePlayer");
const HallOfFameTeam = mongoose.model("hallOfFameTeam");
const teamRankLogic = require("../logic/teamRankLogic");
const playerRankLogic = require("../logic/playerRankLogic");
const recalculate = require("../logic/recalculate");

module.exports = app => {
  app.get("/api/games", async (req, res) => {
    const games = await Game.find();
    res.send(games);
  });

  app.post("/api/games", async (req, res) => {
    const { winner1, winner2, loser1, loser2 } = req.body;
    const date = Date.now();

    const game = new Game({
      winner1,
      winner2,
      loser1,
      loser2,
      date
    });

    await game.save();

    const backup = new Backup({
      winner1,
      winner2,
      loser1,
      loser2,
      date,
      deleted: false
    });

    await backup.save();

    await teamRankLogic(game);
    await playerRankLogic(game);

    const getTeamsandPlayers = async () => {
      const newTeams = await Team.find();
      const newPlayers = await Player.find();
      await res.send({ newGame: game, newTeams, newPlayers });
    };

    await getTeamsandPlayers();
  });

  app.delete("/api/games/:gameId", async (req, res) => {
    const game = await Game.findOneAndRemove({ _id: req.params.gameId });
    await Backup.findOneAndUpdate({ date: game.date }, { deleted: true });
    await recalculate();
    const games = await Game.find();
    const newTeams = await Team.find();
    const newPlayers = await Player.find();
    await res.send({ games, newTeams, newPlayers });
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

  app.get("/api/hallOfFamePlayers", async (req, res) => {
    const players = await HallOfFamePlayer.find();
    res.send(players);
  });

  app.get("/api/hallOfFameTeams", async (req, res) => {
    const teams = await HallOfFameTeam.find();
    res.send(teams);
  });
};
