'use strict'

const Logger = require('./logger')

module.exports = class ConsoleLoggerFactory {
  static async create () {
    return new Logger(process.stdout)
  }
}
