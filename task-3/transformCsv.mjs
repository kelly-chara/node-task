import fs from 'fs';
import csvtojson from 'csvtojson';

const csvFilePath = './csvdirectory/input.csv';
const txtFilePath = './csvdirectory/output.json';

const readStream = fs.createReadStream(csvFilePath);
const writeStream = fs.createWriteStream(txtFilePath);

readStream
  .pipe(csvtojson())
  .on('data', (buffer) => {
    // convert the buffer to a string
    const jsonString = buffer.toString();
    // write the objects
    writeStream.write(jsonString);
  })
  .on('error', (error) => {
    console.error('Error reading CSV file:', error.message);
  })
  .on('end', () => {
    console.log('CSV to JSON conversion complete.');
    writeStream.end();
  });

writeStream.on('error', (error) => {
  console.error('Error writing to the output file:', error.message);
});

