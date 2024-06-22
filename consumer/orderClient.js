const axios = require('axios');
const { Order } = require('./order')

const orderApiUrl = 'http://localhost:5050';

const fetchOrders = async () => {
  const res = await axios.get(`${orderApiUrl}/orders`);
  const orders = res.data;
  return orders.map(order => new Order(order.id, order.items));
}

module.exports = {
  fetchOrders
}
