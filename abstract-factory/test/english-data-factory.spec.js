'use strict'

const { expect } = require('chai')

const DataFactory = require('../src/data-factory')
const EnglishDataFactory = require('../src/english-data-factory')

describe('Abstract Factory', function () {
  describe('english-data-factory', function () {
    it('should be an instance of DataFactory', function () {
      expect(new EnglishDataFactory()).to.be.instanceof(DataFactory)
    })
  })
})
