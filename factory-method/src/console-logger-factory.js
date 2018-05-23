'use strict'

const Logger = require('./logger')

module.exports = class ConsoleLoggerFactory {
  async create () {
    return new Logger(process.stdout)
  }
}
