'use strict'

const { expect } = require('chai')
const sinon = require('sinon')

const Database = require('../src/database')
const UserManager = require('../src/user-manager')

describe('Singleton', function () {
  describe('user-manager', function () {
    it('resolves the user with given name', async function () {
      const manager = new UserManager()
      sinon.stub(Database.getInstance(), 'fetchData')
        .returns(Promise.resolve([
          {
            name: 'Foo',
            email: 'foo@email.com'
          },
          {
            name: 'Bar',
            email: 'bar@email'
          }
        ]))

      const user = await manager.getUserByName('Foo')

      expect(user).to.have.property('name', 'Foo')
      expect(user).to.have.property('email', 'foo@email.com')

      Database.getInstance().fetchData.restore()
    })

    it('resolves undefined when user with given name is not found', async function () {
      const manager = new UserManager()
      sinon.stub(Database.getInstance(), 'fetchData')
        .returns(Promise.resolve([]))

      const user = await manager.getUserByName('Invalid')

      expect(user).to.be.equal(undefined)

      Database.getInstance().fetchData.restore()
    })
  })
})
