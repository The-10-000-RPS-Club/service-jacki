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

app.post('/api/questions/:product_id', (req, res) => {
  const newQuestion = new Questions({
    product_id: req.params.id,
    user: req.body.user,
    question_body: req.body.question_body,
  });
  newQuestion.save()
    .then((data) => res.status(201).send(data))
    .catch((err) => res.send(err));
});

// app.patch('api/questions/:question_id/answers/helpful/no', (req, res) => {
//   const { id } = req.params;
//   Questions.findOneAndUpdate({ product_id: id }, { $inc: { answers.&.no: 1 }}).exec()
//     .then((data) => res.status(200).send(data))
//     .catch((err) => res.send(err));
// });

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
