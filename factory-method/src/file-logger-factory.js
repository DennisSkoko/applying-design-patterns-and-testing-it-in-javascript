'use strict'

const fs = require('fs-extra')

const settings = require('../conf/settings')
const Logger = require('./logger')

module.exports = class FileLoggerFactory {
  static async create () {
    await fs.ensureFile(settings.logger.file)

    const stream = await fs.createWriteStream(settings.logger.file, {
      flags: 'a'
    })

    return new Logger(stream)
  }
}
