'use strict'

const fs = require('fs-extra')

module.exports = class FileLogger {
  constructor (file) {
    this.file = file
  }

  async log (message) {
    await fs.ensureFile(this.file)
    await fs.appendFile(this.file, message + '\n')
  }
}
