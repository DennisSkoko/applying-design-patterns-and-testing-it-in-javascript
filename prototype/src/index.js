'use strict'

const Printer = require('./printer')

const printer = new Printer([
  {
    namespace: 'Foo',
    content: 'Hello'
  },
  {
    namespace: 'Bar'
  },
  {
    content: 'Baz'
  }
])

console.log(printer.print())
