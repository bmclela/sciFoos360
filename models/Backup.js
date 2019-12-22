const mongoose = require('mongoose');
const { Schema } = mongoose;

const backupSchema = new Schema({
  winner1: String,
  winner2: String,
  loser1: String,
  loser2: String,
  date: Date,
  deleted: Boolean
});

mongoose.model('backup', backupSchema);
