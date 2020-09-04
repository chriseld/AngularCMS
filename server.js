const http = require('http');
const express = require('express');
const session = require('express-session');
const dotenv = require('dotenv');
const app = express();
const port = process.env.PORT || 3000;
const connection = require('./public/script/db_connection');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(index.html);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const result = dotenv.config();
 
if (result.error) {
  throw result.error
};
 
console.log(result.parsed);