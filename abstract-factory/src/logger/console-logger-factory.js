'use strict'

const ConsoleLogger = require('./console-logger')

module.exports = class ConsoleLoggerFactory {
  create () {
    return new ConsoleLogger()
  }
}
