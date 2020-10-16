/* eslint-disable camelcase */
const fs = require('fs');
const path = require('path');
const faker = require('faker');
const { argv } = require('yargs');

const lines = argv.lines || 1; // this will be 10M product limit

// create output files
const fileQuestions = path.resolve(__dirname, 'questions_data.csv');

const stream = fs.createWriteStream(fileQuestions);

const fakeQuestion = (questionCount, productCount) => {
  const question_id = questionCount;
  const created_at = String(faker.date.past(1)).slice(0, 24);
  const user_name = faker.internet.userName().replace(',', '');
  const question_body = faker.lorem.sentence().replace(',', '');
  const product_id = productCount;

  return `${question_id}, ${created_at}, ${user_name}, ${question_body}, ${product_id}`;
};

// Write the data to the supplied writable stream one million times.
function writeOneMillionTimes(writer, encoding, callback) {
  const max = lines;
  let productCount = 0;
  let questionCount = 0;
  let question = '';

  function write() {
    let ok = true;
    do {
      productCount += 1;
      const numberOfQuestions = Math.floor(Math.random() * 7) + 1;
      for (let i = 0; i < numberOfQuestions; i += 1) {
        questionCount += 1;
        question = fakeQuestion(questionCount, productCount);

        if (productCount === max) {
          writer.write(`${question}\n`, encoding, callback);
        } else {
          if (productCount % 100000 === 0) {
            console.log(`${Math.round(((productCount / lines)) * 100)}% of questions.csv completed`);
          }
          ok = writer.write(`${question}\n`, encoding);
        }
      }
    } while (productCount < max && ok);
    if (productCount < max) {
      writer.once('drain', write);
    }
  }
  write();
}

// header
stream.write('question_id, created_at, user_name, question_body, product_id\n', 'utf-8');

writeOneMillionTimes(stream, 'utf-8', () => {
  console.log(`successfully logged ${lines} records for questions.csv`);
  stream.end();
});

// log last total count to be applied to answers generator
