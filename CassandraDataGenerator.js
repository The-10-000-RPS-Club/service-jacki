/* eslint-disable camelcase */
const fs = require('fs');
const path = require('path');
const faker = require('faker');
const { argv } = require('yargs');

// 160M
const lines = argv.lines || 50;
// const productCountMax = 10000000;

// create output files
const fileAnswers = path.resolve(__dirname, 'cassandra_data.csv');

const stream = fs.createWriteStream(fileAnswers);

const fakeRecord = (recordCount, parent_question_id, productCount) => {
  const primary_id = recordCount;
  const parent_id = parent_question_id;
  const product_id = productCount;
  const created_at = String(faker.date.past(1)).slice(0, 24);
  const last_modified_at = String(faker.date.past(1)).slice(0, 24);
  const author_username = faker.internet.userName().replace(',', '');
  const text_value = faker.lorem.sentence().replace(',', '');
  const helpful_yes = Math.floor(Math.random() * 5);
  const helpful_no = Math.floor(Math.random() * 5);
  const is_deleted = false;

  return `${primary_id}, ${parent_id}, ${product_id}, ${created_at}, ${last_modified_at}, ${author_username}, ${text_value}, ${helpful_yes}, ${helpful_no}, ${is_deleted}`;
};

// Write the data to the supplied writable stream one million times.
function writeOneMillionTimes(writer, encoding, callback) {
  const max = lines;
  let recordCount = 0;
  let questionCount = 0;
  let productCount = 0;
  let record = '';

  function write() {
    let ok = true;
    do {
      productCount += 1; // start with product listing id
      const numberOfQuestions = Math.floor(Math.random() * 5) + 1;
      for (let i = 0; i < numberOfQuestions; i += 1) {
        questionCount += 1;
        recordCount += 1;
        record = fakeRecord(recordCount, 'null', productCount);

        if (recordCount === max) {
          writer.write(`${record}\n`, encoding, callback);
        } else {
          if (recordCount % 10 === 0) {
            console.log(`${Math.round(((recordCount / lines)) * 100)}% of cassandra_data.csv completed`);
          }
          ok = writer.write(`${record}\n`, encoding);
        }

        // inner loop for num of answers per question
        const numberOfAnswers = Math.floor(Math.random() * 5) + 1;
        for (let j = 0; j < numberOfAnswers; j += 1) {
          recordCount += 1;
          record = fakeRecord(recordCount, questionCount, productCount);

          if (recordCount === max) {
            writer.write(`${record}\n`, encoding, callback);
          } else {
            ok = writer.write(`${record}\n`, encoding);
          }
        }
      }
    } while (recordCount < max && ok);
    if (recordCount < max) {
      writer.once('drain', write);
    }
  }
  write();
}

// header
stream.write('primary_id, parent_id, product_id, created_at, last_modified_at, author_username, text_value, helpful_yes, helpful_no, is_deleted\n', 'utf-8');

writeOneMillionTimes(stream, 'utf-8', () => {
  console.log('successfully completed cassandra_data.csv');
  stream.end();
});