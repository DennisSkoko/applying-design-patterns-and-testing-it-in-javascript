'use strict'

const { expect } = require('chai')

const Database = require('../src/database')

describe('Singleton', function () {
  describe('database', function () {
    it('returns an array with 3 items', async function () {
      const db = new Database()
      expect(await db.fetchData())
        .to.be.instanceOf(Array)
        .and.lengthOf(3)
    })

    it('return the database instance', function () {
      expect(Database.getInstance()).to.be.instanceof(Database)
    })
  })
})
