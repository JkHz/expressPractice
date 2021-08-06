# ExpressJS Practice

### Setup:
* Run `npm install` in a terminal window. Check `package.json` to verify which dependencies will be installed.

---

#### Step One:
* Create an express server within `/server/index.js`.
* Once completed, launch your server by running `npm start` in a terminal window.
* We will be using the array of mock user data located within /data/users.js. Use a node `require` statement to import this data into /server/index.js
---

#### Step Two:
#### Create request handlers that do the following:
> Respond to a GET request to `/allUsers` with all user data from `/data/users.js`

> Respond to a GET request to `/names` with an array of all user names

> Respond to a GET request to `/evenUsers` with an array of all user objects whose `id` is an even number

> Respond to a GET request to `user/:id` where `id` represents a variable user id. This is known as a *route parameter*. Your server should respond with an array of that user's name, email, and phone number.
### Use Postman to test each of the above request handlers.

---


### Helpful resources:
* [ExpressJS Setup Example](http://expressjs.com/en/starter/hello-world.html)
* [ExpressJS basic routing](http://expressjs.com/en/starter/basic-routing.html)
* [ExpressJS route parameters](http://expressjs.com/en/guide/routing.html#route-parameters)
* [NodeJS Require](https://nodejs.org/en/knowledge/getting-started/what-is-require/)
* [MDN](https://developer.mozilla.org/en-US/)
