const fs = require('fs');
const path = require('path');
const faker = require('faker');
const { argv } = require('yargs');

// final count 10M records created in products_data.csv
// copied 10M records to seed Postgres products table
const lines = argv.lines || 100;

// create output files
const cassTest = path.resolve(__dirname, 'cassandra_test.csv');

const stream = fs.createWriteStream(cassTest);

// Write the data to the supplied writable stream one million times.
function writeOneMillionTimes(writer, encoding, callback) {
  const max = lines;
  let count = 0;
  function write() {
    let ok = true;
    do {
      count += 1;
      if (count === max) {
        writer.write(`MVP, ${count}, ${faker.name.firstName().replace(',', '')}\n`, encoding, callback);
      } else {
        if (count % 10 === 0) {
          console.log(`${Math.round(((count / lines)) * 100)}% of cassandra_test.csv completed`);
        }
        ok = writer.write(`MVP, ${count}, ${faker.name.firstName().replace(',', '')}\n`, encoding, callback);
      }
    } while (count < max && ok);
    if (count < max) {
      writer.once('drain', write);
    }
  }
  write();
}

// header
stream.write('race_name, race_position, cyclist_name\n', 'utf-8');

writeOneMillionTimes(stream, 'utf-8', () => {
  console.log('successfully completed cassandra_test.csv');
  stream.end();
});
