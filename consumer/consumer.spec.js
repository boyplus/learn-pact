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

describe('Pact with Order API', () => {
  describe('given there are orders', () => {
    const itemProperties = {
      name: 'burger',
      quantity: 2,
      value: 2
    }

    const orderProperties = {
      id: 1,
      items: eachLike(itemProperties)
    }

    describe('when a call to get orders is made', () => {
      before(() => {
        provider
          .given('there are orders')
          .uponReceiving('a request for orders')
          .withRequest({
            method: 'GET',
            path: '/orders'
          })
          .willRespondWith({
            body: eachLike(orderProperties),
            status: 200,
            headers: {
              "Content-Type": "application/json; charset=utf-8",
            }
          })
      })

      it('will receive the list of current orders', () => {
        return provider.executeTest((mockServer) => {
          // The mock server is started on a random port
          // so we set the API mock service port so HTTP clients can dynamically find the port
          process.env.API_PORT = mockServer.port
          const orders = fetchOrders()
          return expect(orders).to.eventually.have.deep.members([
            new Order(orderProperties.id, [itemProperties])
          ])
        })
      })
    })
  })
})
