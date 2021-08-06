const express = require('express');
const app = express();
const port = 3000;
const userData = require('../data/users.js')

app.get('/allUsers', (req, res) => {
  res.status(200).send(userData);
});

app.get('/names', (req, res) => {
  let userNames = userData.map(user => user.name);
  res.status(200).send(userNames);
});

app.get('/evenUsers', (req, res) => {
  let evenUsers = userData.filter(user => user.id % 2 === 0);
  res.status(200).send(evenUsers);
});

app.get(`/user/:id`, (req, res) => {
  let { id } = req.params;
  let userObj = userData.find(user => user.id === Number(id));
  let { name, email, phone } = userObj;
  res.status(200).send([ name, email, phone ]);
})

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
