'use strict'

const { expect } = require('chai')
const sinon = require('sinon')
const proxyquire = require('proxyquire')

const Logger = require('../src/logger')

describe('Factory Method', function () {
  let ConsoleLoggerFactory = null
  let loggerSpy = null

  before('require the module', function () {
    loggerSpy = sinon.spy(Logger)

    ConsoleLoggerFactory = proxyquire('../src/console-logger-factory', {
      './logger': loggerSpy
    })
  })

  afterEach('reset the history', function () {
    loggerSpy.resetHistory()
  })

  describe('console-logger-factory', function () {
    it('should create Logger with stdout stream', async function () {
      const logger = await ConsoleLoggerFactory.create()

      expect(logger).to.be.instanceof(Logger)
      expect(loggerSpy).to.have.been.calledWithExactly(process.stdout)
    })
  })
})
