'use strict'

const Converter = require('./converter')

module.exports = class HexConverter extends Converter {
  append (data) {
    this.result += data.toString(16)
  }
}
