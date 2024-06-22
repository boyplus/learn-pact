const axios = require('axios');

const orderApiUrl = 'http://localhost:5050';

const fetchOrders = async () => {
  const res = await axios.get(`${orderApiUrl}/orders`);
  return res.data;
}

module.exports = {
  fetchOrders
}
