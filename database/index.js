const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/rei_questions', { useNewUrlParser: true, useUnifiedTopology: true });

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
      count: Number,
      user: String,
      helpful: {
        yes: Number,
        no: Number,
      },
    },
  ],
});

const Question = mongoose.model('Question', questionSchema);

module.exports = { Question };
