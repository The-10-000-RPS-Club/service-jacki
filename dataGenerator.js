const fs = require('fs');
const faker = require('faker');
const { argv } = require('yargs');

const lines = argv.lines || 1000;

// create output files
const fileProducts = fs.createWriteStream(__dirname + '/products_data.csv');
const fileQuestions = fs.createWriteStream(__dirname + '/questions_data.csv');
const fileAnswers = fs.createWriteStream(__dirname + '/answers_data.csv');

const stream = fs.createWriteStream(fileProducts);

// create a loop for number of questions to produce (multiple questions per product) Joe had 8 questions to 1 product ratio
// 0-5 answers per question

// for every product id, iterate over and count a random number of questions to leverage in question/product id reference.
const getRandomId = () => {
  for (let j = 1; j <= 100; j += 1) {
    let numAnswersPerQ = Math.floor(Math.random() * 5) + 1;
    for (let k = 0; k < numAnswersPerQ; k += 1) {
      return j;
    }
  }
}

// create data to input into csv for questions
for (let i = 1; i <= 1000; i += 1) {
  const fakeQuestion = (i, prod) => {
    let question_id: i;
    let created_at: faker.date.past(1);
    let user: faker.internet.userName();
    let question_body: faker.lorem.sentence();
    let product_id: getRandomId();
    //nested for loop (10M, then 0-5 questions assigned); export numbers for answers to reference during answer generation
    //string.replace (reg X)
    return `${question_id}, ${created_at}, ${user}, ${question_body}, ${product_id}`;
  }
}

// create data to input into csv for answers
for (let i = 1; i <= 5000; i += 1) {
  const fakeAnswer = (i, question) => {
    let answer_id: i;
    let created_at: faker.date.past(1);
    let user: faker.internet.userName();
    let answer_body: faker.lorem.sentence();
    let helpful_yes: Math.floor(Math.random() * 5);
    let helpful_no: Math.floor(Math.random() * 5);
    let question_id: getRandomId();

    return `${answer_id}, ${created_at}, ${user}, ${answer_body}, ${helpful_yes}, ${helpful_no}, ${question_id} \n`;
  }
}


// createwrite file stream for each csv (async/await)
for(let i=0; i<= 10; i++) {
  fileQuestions.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n');
  //note to remove extra commas in faker data for faker names and other areas use .replace(",", "")
}

file.end();

const writeOneMillionTimes = (writer, data, encoding, callback) => {
  let i = lines;
  function write() {
    let ok = true;
    do {
      i--;
      let product
      if (i === 0) {
        // Last time!
        writer.write(data, encoding, callback);
      } else {
        // See if we should continue, or wait.
        // Don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // Had to stop early!
      // Write some more once it drains.
      writer.once('drain', write);
    }
  write();
}




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