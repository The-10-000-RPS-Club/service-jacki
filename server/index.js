/* eslint-disable no-console */
const express = require('express');

const bodyParser = require('body-parser');

const Questions = require('../database/Question.js');

const app = express();

const PORT = 3001;

app.use(bodyParser.json());

app.get('/api/questions', (req, res) => {
  Questions.find({}).exec()
    .then((results) => res.send(results))
    .catch((err) => res.send(err));
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
