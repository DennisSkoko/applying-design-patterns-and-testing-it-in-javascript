'use strict'

const Converter = require('./converter')

module.exports = class BinaryConverter extends Converter {
  append (data) {
    this.result += data.toString(2)
  }
}
