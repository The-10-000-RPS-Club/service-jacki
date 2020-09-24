const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/rei_questions', { useNewUrlParser: true, useUnifiedTopology: true });

const questionSchema = mongoose.Schema({
  question_id: Number,
  product_id: Number,
  user: String,
  date: Number,
  question_body: String,
  answer: [
    {
      id: Number,
      date: Number,
      body: String,
      user: String,
      helpful: {
        yes: Number,
        no: Number,
      },
    },
  ],
});

const Question = mongoose.model('Question', questionSchema);

const sampleData = [
        {
    question_id: 058,
    product_id: 017,
    user: 'BobbyB',
    date: "2019-01-31T10:01:00.000Z",
    question_body: 'Does this product fit both men and women?',
    answer: [
        {
        id: 023,
        date: "2019-11-31T03:01:40.000Z",
        body: 'Yes it does.',
        user: 'REI Helper Sally',
        helpful: {
            yes: 0,
            no: 1,
        },
        },
    ],
    }, 
    {
        question_id: 009,
        product_id: 043,
        user: 'Rachel098',
        date: "2020-05-01T12:14:00.000Z",
        question_body: 'How durable is this?',
        answer: [
            {
            id: 023,
            date: "2020-05-05T08:22:36.000Z",
            body: 'It can stand up to all your favortie activities.',
            user: 'REI Helper Jim',
            helpful: {
                yes: 2,
                no: 0,
            },
            }, 
            {
                id: 079,
                date: "2020-06-09T08:21:08.000Z",
                body: 'It tore after one week.',
                user: 'CaliBro43',
                helpful: {
                    yes: 1,
                    no: 3,
                },
                },
        ],
        },
]

module.exports = { Question, db };
