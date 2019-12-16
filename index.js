const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
require('./models/Team');
require('./models/Game');
require('./models/Player');
// require('./models/LastMonthChamps');

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.set('useFindAndModify', false);

const app = express();

app.use(bodyParser.json());

require('./routes/gameRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
