import fs from 'fs';
import csvtojson from 'csvtojson';
import {pipeline }from "stream"

const csvFilePath = './csvdirectory/input.csv';
const txtFilePath = './csvdirectory/output.txt';

const readStream = fs.createReadStream(csvFilePath);
const writeStream = fs.createWriteStream(txtFilePath);


pipeline(
  readStream
  .on(
    "error",(error) => {
      console.error('Error reading CSV file:', error.message);
    }
  ).on("end" , () => {
    console.log("conversion completed")
    writeStream.end()
  }),
  csvtojson(),
  writeStream.
  on("finish", () => 
  {
    console.log("finish writing the file")
  }
 )
  .on("error", (error) => { 
    console.log(`Error writing to file ${error}` )
  }),
  
  (err) => {
    if (err) {
      console.error('Pipeline failed.', err);
    } else {
      console.log('Pipeline succeeded.');
    }
  }
);