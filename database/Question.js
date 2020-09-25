const mongoose = require('mongoose');
const db = require('./index.js');

mongoose.Promise = global.Promise;

const questionSchema = new mongoose.Schema({
  question_id: Number,
  product_id: Number,
  user: String,
  question_body: String,
  answers: [
    {
      answer_id: Number,
      body: String,
      user: String,
      helpful: {
        yes: Number,
        no: Number,
      },
    },
  ],
},
{
  timestamps: true,
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
