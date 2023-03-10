const connectToMongo = require('./db');
const express = require('express');

connectToMongo();

const app = express()
const port = 3001

app.use(express.json());

app.use('/auth',require('../Auth'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})