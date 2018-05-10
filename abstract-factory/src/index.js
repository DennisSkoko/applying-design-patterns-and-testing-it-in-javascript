'use strict'

module.exports = () => {
  let LoggerFactory = require(process.env.NODE_ENV === 'production'
    ? './logger/file-logger-factory'
    : './logger/console-logger-factory')

  const logger = new LoggerFactory().create()
  logger.log('Foo bar')
}
