'use strict'

const { expect } = require('chai')

const HexConverter = require('../src/hex-converter')

describe('Builder', function () {
  describe('hex-converter', function () {
    it('should convert to hexadecimal', function () {
      const converter = new HexConverter()
      converter.append(31)

      expect(converter.getResult()).to.be.equal('1f')
    })

    it('should be able to convert multiple data', function () {
      const converter = new HexConverter()
      converter.append(31)
      converter.append(4)

      expect(converter.getResult()).to.be.equal('1f4')
    })
  })
})
