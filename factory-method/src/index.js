'use strict'

const LoggerFactory = require(process.env.NODE_ENV === 'production'
  ? './file-logger-factory'
  : './console-logger-factory')

LoggerFactory.create()
  .then(logger => {
    logger.log('Foo bar')
  })
  .catch(console.error)
