'use strict'

const randomNumber = (max = 1) => Math.floor(Math.random() * Math.floor(max))

module.exports = class DataFactory {
  constructor (names, addresses) {
    this.names = names
    this.addresses = addresses
  }

  createName () {
    return this.names[randomNumber(this.names.length)]
  }

  createAddress () {
    return this.addresses[randomNumber(this.addresses.length)]
  }
}
