'use strict'

const { expect } = require('chai')

const ConsoleLogger = require('../src/console-logger')
const ConsoleLoggerFactory = require('../src/console-logger-factory')

describe('Abstract Factory', function () {
  describe('console-logger-factory', function () {
    it('should create a ConsoleLogger', function () {
      const logger = new ConsoleLoggerFactory().create()
      expect(logger).to.be.instanceof(ConsoleLogger)
    })
  })
})
