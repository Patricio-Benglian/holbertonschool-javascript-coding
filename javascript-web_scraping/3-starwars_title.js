#!/usr/bin/node

const request = require('request');

const id = process.argv[2];

request(`https://swapi-api.hbtn.io/api/films/${id}`, (err, response, body) => {
  if (!err) {
    console.log(JSON.parse(body).title);
  }
});
