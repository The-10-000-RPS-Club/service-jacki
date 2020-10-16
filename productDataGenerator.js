const fs = require('fs');
const path = require('path');
const { argv } = require('yargs');

// final count 10M records created in products_data.csv
// copied 10M records to seed Postgres products table
const lines = argv.lines || 10000000;

// create output files
const fileProducts = path.resolve(__dirname, 'products_data.csv');

const stream = fs.createWriteStream(fileProducts);

// Write the data to the supplied writable stream one million times.
function writeOneMillionTimes(writer, encoding, callback) {
  const max = lines;
  let count = 0;
  function write() {
    let ok = true;
    do {
      count += 1;
      if (count === max) {
        writer.write(`${count}\n`, encoding, callback);
      } else {
        if (count % 100000 === 0) {
          console.log(`${Math.round(((count / lines)) * 100)}% of product.csv completed`);
        }
        ok = writer.write(`${count}\n`, encoding);
      }
    } while (count < max && ok);
    if (count < max) {
      writer.once('drain', write);
    }
  }
  write();
}

// header
stream.write('product_id\n', 'utf-8');

writeOneMillionTimes(stream, 'utf-8', () => {
  console.log('successfully completed products.csv');
  stream.end();
});
