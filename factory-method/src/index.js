'use strict'

const LoggerFactory = require(process.env.NODE_ENV === 'production'
  ? './file-logger-factory'
  : './console-logger-factory')

const logger = new LoggerFactory().create()
logger.log('Foo bar')
