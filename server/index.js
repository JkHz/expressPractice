const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// TODO: Write request handlers for the following functionality:
//  1.  Respond to a GET request to the '/allUsers' endpoint with all user data saved in the database
//  2.  Respond to a GET request to the 'user/:id' endpoint (where `id` refers to a specific user's id) with the user data for that specific user.
//  3.  Respond to a POST request to '/addUser' by inserting a new user into the database
//  4.  Respond to a PATCH request to '/updateUser' by changing a specified user's name
//  5.  Respond to a DELETE request to '/deleteUser' by deleting that user from the database

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});