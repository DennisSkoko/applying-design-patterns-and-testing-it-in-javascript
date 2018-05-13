'use strict'

const DataFactory = require('./data-factory')

const names = [
  'John',
  'Barry',
  'James'
]

const addresses = [
  '908 Sauer Causeway',
  '399 Willms Center',
  '269 Annabel Street'
]

module.exports = class EnglishDataFactory extends DataFactory {
  constructor () {
    super(names, addresses)
  }
}
