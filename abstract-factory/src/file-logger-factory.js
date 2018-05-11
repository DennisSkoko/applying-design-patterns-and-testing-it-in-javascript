'use strict'

const settings = require('../conf/settings')
const FileLogger = require('./file-logger')

module.exports = class FileLoggerFactory {
  create () {
    return new FileLogger(settings.logger.file)
  }
}
