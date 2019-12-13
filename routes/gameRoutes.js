const mongoose = require('mongoose');
const Game = mongoose.model('game');
const rankLogic = require('../logic/rankLogic');

module.exports = app => {
  app.get('/api/games', async (req, res) => {
    const games = await Game.find();
    res.send(games);
  });

  app.post('/api/games', async (req, res) => {
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

    rankLogic(game);

    res.send(game);

    // try {
    //   await game.save();
    //   res.send(game);
    // } catch (err) {
    //   res.send(422).send(err);
    // }
  });
};
