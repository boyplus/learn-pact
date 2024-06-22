const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()

const PORT = process.env.PORT;

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use((_, res, next) => {
  res.header("Content-Type", "application/json; charset=utf-8");
  next();
});

const dataStore = require('./data/orders')

app.get('/orders', (req, res) => {
  res.json(dataStore);
})

app.listen(PORT, () => {
  console.log(`Provider is listening on port ${PORT}`)
})
