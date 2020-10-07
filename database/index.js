const mongoose = require('mongoose');

mongoose.connect('mongodb://172.17.0.2:27017/rei_questions', { useFindAndModify: true, useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

module.exports = db;
