#!/usr/bin/node

const request = require('request');
const url = process.argv[2];
const tasks = {};

request(url, (err, response, body) => {
  if (!err) {
    const todos = JSON.parse(body);

    todos.forEach(task => {
      if (task.completed === true) {
        if (task.userId in tasks) {
          tasks[task.userId] += 1;
        } else {
          tasks[task.userId] = 1;
        }
      }
    });
  }
  console.log(tasks);
});
