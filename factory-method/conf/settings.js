'use strict'

const path = require('path')

const root = path.resolve(__dirname, '..')

module.exports = {
  logger: {
    file: path.join(root, 'logs/messages.log')
  }
}
