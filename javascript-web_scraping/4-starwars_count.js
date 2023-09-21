#!/usr/bin/node

const request = require('request');

const url = process.argv[2];

request(url, (err, response, body) => {
  if (!err) {
    const listOfFilms = JSON.parse(body);

    let filmsWithWedge = 0;
    listOfFilms.results.forEach(film => {
      film.characters.forEach(chars => {
        if (chars.includes('18')) {
          filmsWithWedge += 1;
        }
      });
    });
    console.log(filmsWithWedge);
  }
});
