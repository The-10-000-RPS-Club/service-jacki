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

app.get('/api/questions/:question_id', (req, res) => {
  const id = req.params.question_id;
  Questions.find({ question_id: id }).exec()
    .then((result) => res.send(result))
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
/********* IF TIME ALLOWS **********/

// app.patch('/api/questions/:question_id/:answer_id', (req, res) => {
//   const quesId = req.params.question_id;
//   const ansId = req.params.answer_id;
//   const obj = Questions.find({ question_id: quesId }).exec();
//   // Questions.findOneAndUpdate({ question_id: quesId, answer_id: ansId }, { $inc: { answers.no: 1 }}).exec()
//   Questions.find({ question_id: quesId }).exec()
//   .then((data) => {
//     for (let i = 0; i < data[0].answers.length; i += 1) {
//       if (data[0].answers[i].answer_id === JSON.parse(ansId)) {
//         data[0].answers[i].helpful.no += 1;
//       }
//     }
//     Questions.findOneAndReplace(obj, data);
//     // console.log('obj: ', obj.Promise, 'data: ', data.Promise);
//       res.send(obj);
//     })
//     .catch((err) => res.send(err));
// });

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
