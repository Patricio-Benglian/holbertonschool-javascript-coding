#!/usr/bin/node

const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const fileName = process.argv[3];

request(url, (err, response, body) => {
  if (!err) {
    const fileContent = body;
    fs.writeFile(`${fileName}`, fileContent, 'utf8', (error) => {
      if (error) {
        console.log(err);
      }
  });
}
});
