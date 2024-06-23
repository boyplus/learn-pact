// Test framework
const chai = require('chai')
const expect = chai.expect
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)

// Pact
const { provider } = require('../pact')
const { eachLike } = require('@pact-foundation/pact').MatchersV3

// Importing system under test
const { Order } = require('./order')
const { fetchOrders } = require('./orderClient')
