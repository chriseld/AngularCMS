const http = require('http');
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const mysql = require('mysql');

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send(index.html)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})