const axios = require('axios')
const { Order } = require('./order')
require('dotenv').config();

const fetchOrders = async () => {
  const orderApiUrl = `http://localhost:${process.env.API_PORT}`;
  const res = await axios.get(`${orderApiUrl}/orders`);
  const orders = res.data;
  return orders.map(order => new Order(order.id, order.items));
}

module.exports = {
  fetchOrders
}
