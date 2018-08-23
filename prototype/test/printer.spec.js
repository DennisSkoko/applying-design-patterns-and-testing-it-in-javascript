'use strict'

const { expect } = require('chai')

const Printer = require('../src/printer')

describe('Prototype', function () {
  describe('printer', function () {
    it('uses the data that is passed in constrcutor', function () {
      const printer = new Printer([
        { namespace: 'Hello', content: 'There' }
      ])

      expect(printer.print()).to.equal('Hello: There')
    })

    it('assigns default values for the messages', function () {
      const printer = new Printer([{}])
      expect(printer.print()).to.equal('Namespace: Content')
    })
  })
})
