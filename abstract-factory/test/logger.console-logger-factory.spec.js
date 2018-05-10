'use strict'

const { expect } = require('chai')

const ConsoleLogger = require('../src/logger/console-logger')
const ConsoleLoggerFactory = require('../src/logger/console-logger-factory')

describe('logger.console-logger-factory', function () {
  it('should create a ConsoleLogger', function () {
    const logger = new ConsoleLoggerFactory().create()
    expect(logger).to.be.instanceof(ConsoleLogger)
  })
})
