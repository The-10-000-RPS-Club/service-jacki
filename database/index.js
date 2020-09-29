const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/rei_questions', { useFindAndModify: true, useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

module.exports = db;
