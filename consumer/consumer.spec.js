// Setting up test framework
const chai = require('chai')
const expect = chai.expect
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)

// We need Pact in order to use it in our test
//
