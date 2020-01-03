const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
var CronJob = require('cron').CronJob;
require('./models/Team');
require('./models/Game');
require('./models/Player');
require('./models/Backup');

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.set('useFindAndModify', false);

const app = express();

app.use(bodyParser.json());

require('./routes/gameRoutes')(app);
const resetAll = require('./logic/resetAll');

// Resets rankings every month
new CronJob(
  '0 0 1 * *',
  function() {
    resetAll.reset();
  },
  null,
  true,
  'America/Los_Angeles'
);

let http = require('http');
setInterval(function() {
  http.get('http://scifoos360.herokuapp.com');
}, 300000); // every 5 minutes (300000)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
