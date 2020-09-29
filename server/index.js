/* eslint-disable no-console */
const express = require('express');

const bodyParser = require('body-parser');

const path = require('path');

const extend = require('extend');

const Questions = require('../database/Question.js');

const app = express();

const PORT = 3001;

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

app.get('/api/products/questions', (req, res) => {
  Questions.find({}).limit(5).exec()
    .then((results) => res.send(results))
    .catch((err) => res.send(err));
});

app.get('/api/products/questions/:question_id', (req, res) => {
  const id = req.params.question_id;
  Questions.find({ question_id: id }).exec()
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
});

app.post('/api/products/questions/:product_id', (req, res) => {
  const newQuestion = new Questions({
    product_id: req.params.id,
    user: req.body.user,
    question_body: req.body.question_body,
  });
  newQuestion.save()
    .then((data) => res.status(201).send(data))
    .catch((err) => res.send(err));
});

/********* IF TIME ALLOWS **********/

app.patch('/api/products/questions/:question_id/:answer_id/', (req, res) => {
  const quesId = req.params.question_id;
  const id = req.params.answer_id;
  const filter = { question_id: quesId };
  Questions.find(filter)
    .then((question) => {
      const subDoc = question[0].answers.id(id);
      const yesNum = subDoc.helpful.yes;
      subDoc.set({ helpful: { yes: yesNum + 1 } });
      console.log(yesNum);
      question[0].save((err, newObj) => {
          if (err) {
            console.log(err);
          } else {
            console.log('succcess', newObj);
          }
        });
      return question;
    })
    .then((data) => res.send(data))
    // save parent question not child
    .catch((err) => console.log(err));
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
