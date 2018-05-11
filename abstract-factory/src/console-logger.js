'use strict'

module.exports = class ConsoleLogger {
  log (message) {
    process.stdout.write(message + '\n')
  }
}
