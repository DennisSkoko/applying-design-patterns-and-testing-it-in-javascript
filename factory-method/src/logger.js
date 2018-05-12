'use strict'

module.exports = class Logger {
  constructor (stream) {
    this.stream = stream
  }

  log (message) {
    this.stream.write(message + '\n')
  }
}
