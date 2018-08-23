'use strict'

const { expect } = require('chai')

const Message = require('../src/message')

describe('Prototype', function () {
  describe('message', function () {
    it('has default values based on arguments in constructor', function () {
      const msg = new Message('Foo', 'Bar')
      expect(msg.namespace).to.equal('Foo')
      expect(msg.content).to.equal('Bar')
    })

    it('has a format function that is based on the data', function () {
      const msg = new Message('Foo', 'Bar')
      expect(msg.formatToString()).to.equal('Foo: Bar')
    })

    it('has a clone methods that returns its instance', function () {
      const msg = new Message()
      expect(msg.clone()).to.be.instanceOf(Message)
    })

    it('clone method returns a copy', function () {
      const msg = new Message('Foo', 'Bar')
      const clone = msg.clone()
      clone.namespace = 'Baz'

      expect(msg.namespace).to.equal('Foo')
      expect(msg.content).to.equal('Bar')
      expect(clone.namespace).to.equal('Baz')
      expect(clone.content).to.equal('Bar')

      expect(msg.formatToString()).to.equal('Foo: Bar')
      expect(clone.formatToString()).to.equal('Baz: Bar')
    })
  })
})
