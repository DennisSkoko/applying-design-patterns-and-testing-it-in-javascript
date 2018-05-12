'use strict'

const { expect } = require('chai')
const sinon  = require('sinon')
const proxyquire = require('proxyquire')

const FileLogger = require('../src/file-logger')

describe('Abstract Factory', function () {
  describe('file-logger-factory', function () {
    let FileLoggerFactory = null
    let fileLoggerSpy = null

    before('require the module', function () {
      fileLoggerSpy = sinon.spy(FileLogger)

      FileLoggerFactory = proxyquire('../src/file-logger-factory', {
        '../conf/settings': {
          logger: {
            file: '[filepath]'
          }
        },
        './file-logger': fileLoggerSpy
      })
    })

    afterEach('reset the history', function () {
      fileLoggerSpy.resetHistory()
    })

    it('should create a FileLogger', function () {
      const logger = new FileLoggerFactory().create()

      expect(logger).to.be.instanceof(FileLogger)
      expect(fileLoggerSpy).to.have.been.calledWithExactly('[filepath]')
    })
  })
})
