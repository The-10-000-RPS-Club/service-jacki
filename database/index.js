const mongoose = require('mongoose');

mongoose.connect('mongodb://db:27017/rei_questions', { useFindAndModify: true, useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

module.exports = db;
