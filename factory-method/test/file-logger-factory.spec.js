'use strict'

const { expect } = require('chai')
const sinon  = require('sinon')
const proxyquire = require('proxyquire')

const Logger = require('../src/logger')

describe('Factory Method', function () {
  describe('file-logger-factory', function () {
    let FileLoggerFactory = null
    let stubs = null

    before('require the module', function () {
      stubs = {
        logger: sinon.spy(Logger),
        ensureFile: sinon.stub().resolves(),
        createWriteStream: sinon.stub().resolves('[fake stream]')
      }

      FileLoggerFactory = proxyquire('../src/file-logger-factory', {
        'fs-extra': {
          ensureFile: stubs.ensureFile,
          createWriteStream: stubs.createWriteStream
        },
        '../conf/settings': {
          logger: {
            file: '[file path]'
          }
        },
        './logger': stubs.logger
      })
    })

    afterEach('reset the history', function () {
      stubs.logger.resetHistory()
      stubs.ensureFile.resetHistory()
      stubs.createWriteStream.resetHistory()
    })

    it('should create a Logger with a file stream from fs', async function () {
      const logger = await new FileLoggerFactory().create()

      expect(logger).to.be.instanceof(Logger)
      expect(stubs.logger).to.have.been.calledWithExactly('[fake stream]')
      expect(stubs.ensureFile).to.have.been.calledWithExactly('[file path]')
      expect(stubs.createWriteStream).to.have.been.calledWith('[file path]')
    })
  })
})
