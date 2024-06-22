const axios = require('axios');

const orderApiUrl = 'http://localhost:5000';

const fetchOrders = async () => {
  const res = await axios.get(orderApiUrl);
  console.log('data is', res.data);
  return res.data;
}

module.exports = {
  fetchOrders
}