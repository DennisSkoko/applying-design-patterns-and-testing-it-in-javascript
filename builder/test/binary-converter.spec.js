'use strict'

const { expect } = require('chai')

const BinaryConverter = require('../src/binary-converter')

describe('Builder', function () {
  describe('binary-converter', function () {
    it('should convert to binary', function () {
      const converter = new BinaryConverter()
      converter.append(5)

      expect(converter.getResult()).to.be.equal('101')
    })
  })
})
