// commented out for Cassandra connection

// const mongoose = require('mongoose');
// const db = require('./index.js');

// mongoose.Promise = global.Promise;

// const questionSchema = new mongoose.Schema({
//   question_id: Number,
//   product_id: Number,
//   created_at: Date,
//   user: String,
//   question_body: String,
//   answers: [
//     {
//       answer_id: Number,
//       created_at: Date,
//       body: String,
//       user: String,
//       helpful: {
//         yes: Number,
//         no: Number,
//       },
//     },
//   ],
// });

// const Question = mongoose.model('Question', questionSchema);

// module.exports = Question;
