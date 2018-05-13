'use strict'

const { expect } = require('chai')

const DataFactory = require('../src/data-factory')

describe('Abstract Factory', function () {
  describe('data-factory', function () {
    it('should only generate the names it was created with', function () {
      const data = ['Foo', 'Bar', 'Baz']
      const factory = new DataFactory(data, [])

      for (let i = 0; i < 50; ++i) {
        expect(factory.createName()).to.be.oneOf(data)
      }
    })

    it('should only generate the addresses it was created with', function () {
      const data = ['Foo', 'Bar', 'Baz']
      const factory = new DataFactory([], data)

      for (let i = 0; i < 50; ++i) {
        expect(factory.createAddress()).to.be.oneOf(data)
      }
    })
  })
})
