const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const orderClient = require('./orderClient');
require('dotenv').config();

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use((_, res, next) => {
  res.header("Content-Type", "application/json; charset=utf-8");
  next();
});

app.get('/test', (req, res) => {
  res.status(200).send({ msg: 'Hello world' });
});

app.get('/orders', async (req, res) => {
  const orders = await orderClient.fetchOrders();
  res.status(200).send(orders);
});

app.listen(PORT, () => {
  console.log(`Consumer is listening on port ${PORT}`);
});
