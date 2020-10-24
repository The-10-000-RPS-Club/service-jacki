/* eslint-disable import/newline-after-import */
/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const path = require('path');
// const Questions = require('../database/Question.js');
const Promise = require('bluebird');
const client = require('../database/index.js');
const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(compression());
app.use(express.static(path.join(__dirname, '/../client/dist')));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
  next();
});

const dataShaper = (dataSet) => {
  const results = [];
  const currentQ = {};
  const answers = [];

  const fn = function asyncShape(row) {
    return new Promise((resolve, reject) => {
      if (row.parent_id === 0) {
        console.log('entered QUESTION shaper condition', row.primary_id);
        results.push({
          question_id: row.primary_id,
          product_id: row.product_id,
          created_at: row.created_at,
          user: row.author_username,
          question_body: row.text_value,
          answers: [],
        });
        console.log('results after question added: ', results);
        // currentQ[row.primary_id] = results.length() - 1;
      }
      resolve();
    })
  }

  const actions = dataSet.map(fn);

  const results = Promise.all(actions);


  results.then(data => )
  // console.log('dataSet length: ', dataSet.length());
  // dataSet.forEach((row) => {
  //   if (row.parent_id === 0) {
  //     console.log('entered QUESTION shaper condition', row.primary_id);
  //     results.push({
  //       question_id: row.primary_id,
  //       product_id: row.product_id,
  //       created_at: row.created_at,
  //       user: row.author_username,
  //       question_body: row.text_value,
  //       answers: [],
  //     });
  //     // console.log('results after question added: ', results);
  //     // currentQ[row.primary_id] = results.length() - 1;
  //   } else {
  //     console.log('entered ANSWER shaper condition', row.parent_id);
  //     if (currentQ[row.parent_id] === undefined) {
  //       console.log('hello');
  //       // results[currentQ[row.parent_id]].answers.push({
  //       //   // id: dataSet.primary_id,
  //       //   // user: dataSet.author_username,
  //       //   // created_at: dataSet.created_at,
  //       //   // body: dataSet.text_value,
  //       //   // helpful: {
  //       //   //   yes: dataSet.helpful_yes,
  //       //   //   no: dataSet.helpful_no,
  //       //   // }
  //       //   id: '023',
  //       //   created_at: 'Fri Sep 22 2017 20:43:04',
  //       //   body: 'Yes it does.',
  //       //   user: 'REI Helper Sally',
  //       //   helpful: {
  //       //     yes: 0,
  //       //     no: 1,
  //       //   },
  //       // })
  //     } else {
  //       console.log('answer container size: ', answers.length());
  //       // answers.push({ 'test': 'tester' });
  //       // console.log('ANSWER added to ANSWER reserve container');
  //     }
  //     console.log('world');
  //   }
  // })
  console.log('answer container size: ', answers.length());

  if (answers.length() > 0) {
    answers.forEach((item) => {
      console.log('entered RESERVE ANSWER ARRAY loop');
      if (currentQ[item.parent_id]) {
        results[currentQ[item.parent_id]].answers.push({ item });
      }
    });
  }
  // return array of obj Q's
  return results;
};

// change url to window.location.href
// GET ALL Q's & A's with product_id = #
app.get('/api/products/questions/sort/:sort', (req, res) => {
  // const prodId = req.params.sort;
  let filter;
  const sorter = req.params.sort;
  if (sorter === 'Newest questions') {
    filter = 'created_at';
  } else {
    filter = '_id';
  }
  client.execute(`SELECT * FROM QnA_records WHERE product_id = ${sorter};`)
    .then((result) => {
      // console.log(result.rows[3]);
      const promise1 = new Promise(())
      const newDataShape = dataShaper(result.rows);
      console.log('Product data for query in Cassandra: ', newDataShape);
      res.send(newDataShape);
    })
    .catch((err) => res.send(500, err));
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

module.exports = app;

// optional, not being used
// app.get('/api/products/questions/:question_id', (req, res) => {
//   const id = req.params.question_id;
//   Questions.find({ question_id: id }).exec()
//     .then((result) => res.send(result))
//     .catch((err) => res.send(err));
// });

// change url to window.location.href
// app.get('/api/products/questions/sort/:sort', (req, res) => {
//   // let filter;
//   // const sorter = req.params.sort;
//   // if (sorter === 'Newest questions') {
//   //   filter = 'created_at';
//   // } else {
//   //   filter = '_id';
//   // }
//   // Questions.find({}).sort(filter).limit(5).exec()

//   const query = 'SELECT * FROM QnA_records WHERE product_id = ?';
//   const prodId = req.params.sort;
//   // client.execute(query, [ 'someone' ])
//   //   .then(result => console.log('User with email %s', result.rows[0].email));
//   console.log(prodId);
//   // client.execute(query, [`${prodId}`]);
//   client.execute(`SELECT * FROM QnA_records WHERE product_id = ${prodId};`)
//     .then((result) => {
//       // const row = result.rows[0];
//       console.log('Product data for query in Cassandra: ', result.rows);
//       res.send(result.rows);
//       // res.send(row);
//     })
//     .catch((err) => res.send(err));
// });

// data shaper
