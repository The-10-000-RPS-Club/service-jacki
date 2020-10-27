/* eslint-disable import/newline-after-import */
/* eslint-disable no-console */
const express = require('express');
require('newrelic');
const bodyParser = require('body-parser');
const compression = require('compression');
const path = require('path');
const Promise = require('bluebird');
const client = require('../database/index.js');
const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(compression());
app.use('/questions/:sort', express.static(path.join(__dirname, '/../client/dist')));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
  next();
});

const dataShaper = (dataSet) => {
  const results = [];
  const currentQ = {};
  const answers = [];

  dataSet.forEach((row) => {
    if (row.parent_id === 0) {
      results.push({
        question_id: row.primary_id,
        product_id: row.product_id,
        created_at: row.created_at,
        user: row.author_username,
        question_body: row.text_value,
        answers: [],
      });
      currentQ[row.primary_id] = results.length - 1;
    } else if (currentQ[row.parent_id] !== undefined) {
      results[currentQ[row.parent_id]].answers.push(
        {
          id: row.primary_id,
          user: row.author_username,
          created_at: row.created_at,
          body: row.text_value,
          helpful: {
            yes: row.helpful_yes,
            no: row.helpful_no,
          },
        },
      );
    } else {
      answers.push(row);
    }
  });

  if (answers.length > 0) {
    answers.forEach((item) => {
      if (currentQ[item.parent_id] !== undefined) {
        results[currentQ[item.parent_id]].answers.push({
          id: item.primary_id,
          user: item.author_username,
          created_at: item.created_at,
          body: item.text_value,
          helpful: {
            yes: item.helpful_yes,
            no: item.helpful_no,
          },
        });
      }
    });
  }
  return results;
};

// GET ALL Q's & A's with product_id = #
app.get('/api/questions/:sort', (req, res) => {
  client.execute(`SELECT * FROM QnA_records WHERE product_id = ${req.params.sort};`)
    .then(async (result) => {
      const newDataShape = await dataShaper(result.rows);
      res.send(newDataShape);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});

// app.post('/api/products/questions/:product_id', (req, res) => {
//   const newQuestion = new Questions({
//     product_id: req.params.id,
//     user: req.body.user,
//     question_body: req.body.question_body,
//   });
//   newQuestion.save()
//     .then((data) => res.send(data))
//     .catch((err) => res.send(err));
// });

// app.patch('/api/products/questions/:question_id/:answer_id/:option', (req, res) => {
//   const quesId = req.params.question_id;
//   const id = req.params.answer_id;
//   const filter = { question_id: quesId };
//   const { option } = req.params;
//   Questions.find(filter)
//     .then((question) => {
//       const subDoc = question[0].answers.id(id);
//       const count = subDoc.helpful[option];
//       if (option === 'yes') {
//         subDoc.set({ helpful: { yes: count + 1 } });
//       } else {
//         subDoc.set({ helpful: { no: count + 1 } });
//       }
//       question[0].save((err, newObj) => {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log('succcess', newObj);
//         }
//       });
//       return question;
//     })
//     .then((data) => res.send(data))
//     // save parent question not child
//     .catch((err) => res.send(err));
// });

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});

module.exports = app;