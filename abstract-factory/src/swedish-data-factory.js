'use strict'

const DataFactory = require('./data-factory')

const names = [
  'Felix',
  'Robin',
  'Alex'
]

const addresses = [
  'Smedjegatan 17',
  'Minvernavägen 20',
  'Bredgatan 2'
]

module.exports = class SwedishDataFactory extends DataFactory {
  constructor () {
    super(names, addresses)
  }
}
