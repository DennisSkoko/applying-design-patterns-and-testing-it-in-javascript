'use strict'

module.exports = class Message {
  constructor (namespace, content) {
    this.namespace = namespace
    this.content = content
  }

  clone () {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this)
  }

  formatToString () {
    return `${this.namespace}: ${this.content}`
  }
}
