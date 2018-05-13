'use strict'

const { expect } = require('chai')

const DataFactory = require('../src/data-factory')
const SwedishDataFactory = require('../src/swedish-data-factory')

describe('Abstract Factory', function () {
  describe('swedish-data-factory', function () {
    it('should be an instance of DataFactory', function () {
      expect(new SwedishDataFactory()).to.be.instanceof(DataFactory)
    })
  })
})
