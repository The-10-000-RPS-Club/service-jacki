/* eslint-disable camelcase */
const fs = require('fs');
const path = require('path');
const faker = require('faker');
const { argv } = require('yargs');

// 40001695 questions;
// 120011418 answers generated to answers_data.csv
const lines = argv.lines || 40001695;

// create output files
const fileAnswers = path.resolve(__dirname, 'answers_data.csv');

const stream = fs.createWriteStream(fileAnswers);

const fakeAnswer = (answerCount, questionCount) => {
  const answer_id = answerCount;
  const created_at = String(faker.date.past(1)).slice(0, 24);
  const user_name = faker.internet.userName().replace(',', '');
  const answer_body = faker.lorem.sentence().replace(',', '');
  const helpful_yes = Math.floor(Math.random() * 5);
  const helpful_no = Math.floor(Math.random() * 5);
  const question_id = questionCount;

  return `${answer_id}, ${created_at}, ${user_name}, ${answer_body}, ${helpful_yes}, ${helpful_no}, ${question_id}`;
};

// Write the data to the supplied writable stream one million times.
function writeOneMillionTimes(writer, encoding, callback) {
  const max = lines;
  let questionCount = 0;
  let answerCount = 0;
  let answer = '';

  function write() {
    let ok = true;
    do {
      questionCount += 1;
      const numberOfQuestions = Math.floor(Math.random() * 5) + 1;
      for (let i = 0; i < numberOfQuestions; i += 1) {
        answerCount += 1;
        answer = fakeAnswer(answerCount, questionCount);

        if (questionCount === max) {
          writer.write(`${answer}\n`, encoding, callback);
        } else {
          if (questionCount % 100000 === 0) {
            console.log(`${Math.round(((questionCount / lines)) * 100)}% of answers.csv completed`);
          }
          ok = writer.write(`${answer}\n`, encoding);
        }
      }
    } while (questionCount < max && ok);
    if (questionCount < max) {
      writer.once('drain', write);
    }
  }
  write();
}

// header
stream.write('answer_id, created_at, user_name, answer_body, helpful_yes, helpful_no, question_id\n', 'utf-8');

writeOneMillionTimes(stream, 'utf-8', () => {
  console.log('successfully logged records for answers.csv');
  stream.end();
});
