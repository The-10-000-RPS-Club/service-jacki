/* eslint-disable import/newline-after-import */
/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compressionion');
const path = require('path');
const Questions = require('../database/Question.js');
const app = express();
const PORT = 3001;

app.use(bodyParser.json());

app.use(compression());

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
});

app.get('/api/products/questions/sort/:sort', (req, res) => {
  let filter;
  const sorter = req.params.sort;
  if (sorter === 'Newest questions') {
    filter = 'created_at';
  } else {
    filter = '_id';
  }
  Questions.find({}).sort(filter).limit(5).exec()
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
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
});

app.patch('/api/products/questions/:question_id/:answer_id/:option', (req, res) => {
  const quesId = req.params.question_id;
  const id = req.params.answer_id;
  const filter = { question_id: quesId };
  const { option } = req.params;
  Questions.find(filter)
    .then((question) => {
      const subDoc = question[0].answers.id(id);
      const count = subDoc.helpful[option];
      if (option === 'yes') {
        subDoc.set({ helpful: { yes: count + 1 } });
      } else {
        subDoc.set({ helpful: { no: count + 1 } });
      }
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
    .catch((err) => res.send(err));
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
