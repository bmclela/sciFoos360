const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
// require('./models/Player');
// require('./models/Team');
require('./models/Game');
// require('./models/LastMonthChamps');

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();

app.use(bodyParser.json());

require('./routes/gameRoutes')(app);

app.get('/', (req, res) => {
  res.send({ hi: 'Ben' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
