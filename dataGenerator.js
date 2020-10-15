const fs = require('fs');
const faker = require('faker');

// create output files
const fileProducts = fs.createWriteStream(__dirname + '/products_data.csv');
const fileQuestions = fs.createWriteStream(__dirname + '/questions_data.csv');
const fileAnswers = fs.createWriteStream(__dirname + '/answers_data.csv');

// create a loop for number of questions to produce (multiple questions per product) Joe had 8 questions to 1 product ratio
// 0-5 answers per question
// create data to input into csv for questions
const fakeQuestion = (count) => {
  let question_id: count;
  let created_at: faker.date.past(1);
  let user: faker.internet.userName();
  let question_body: faker.lorem.sentence();
  let product_id:
  //nested for loop (10M, then 0-5 questions assigned); export numbers for answers to reference during answer generation
  //string.replace (reg X)
  return `${question_id}, ${created_at}, ${user}, ${question_body}`;
}

// create data to input into csv for answers



// createwrite file stream for each csv (async/await)
for(let i=0; i<= 10; i++) {
  fileQuestions.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n');
  //note to remove extra commas in faker data for faker names and other areas use .replace(",", "")
}

file.end();






// // prevents "backpressuring" when writing to stream
// const write = (writer, data) => {
//   return new Promise((resolve) => {
//     if (!writer.write(data)) {
//       writer.once('drain', resolve)
//     }
//     else {
//       resolve()
//     }
//   })
// }

// // usage
// const run = async () => {
//   const write_stream = fs.createWriteStream('...')
//   const max = 1000000
//   let current = 0
//   while (current <= max) {
//     await write(write_stream, current++)
//   }
// }

// // Write the data to the supplied writable stream one million times.
// // Be attentive to back-pressure.
// function writeOneMillionTimes(writer, data, encoding, callback) {
//   let i = 100000;
//   write();
//   function write() {
//     let ok = true;
//     do {
//       i--;
//       if (i === 0) {
//         // Last time!
//         writer.write(data, encoding, callback);
//       } else {
//         // See if we should continue, or wait.
//         // Don't pass the callback, because we're not done yet.
//         ok = writer.write(data, encoding);
//       }
//     } while (i > 0 && ok);
//     if (i > 0) {
//       // Had to stop early!
//       // Write some more once it drains.
//       writer.once('drain', write);
//     }
//   }
// }