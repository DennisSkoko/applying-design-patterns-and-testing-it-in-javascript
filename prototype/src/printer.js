'use strict'

const Message = require('./message')

module.exports = class Printer {
  constructor (data) {
    this.data = data
    this.baseMessage = new Message('Namespace', 'Content')
  }

  print () {
    return this.data
      .map(({ namespace, content }) => {
        const message = this.baseMessage.clone()

        if (namespace) message.namespace = namespace
        if (content) message.content = content

        return message.formatToString()
      })
      .join('\n')
  }
}
