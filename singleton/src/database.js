'use strict'

let instance = null

class Database {
  async fetchData () {
    return [
      {
        name: 'Foo',
        email: 'foo@gmail.com'
      },
      {
        name: 'Bar',
        email: 'bar@outlook.com'
      },
      {
        name: 'Baz',
        email: 'baz@hotmail.com'
      }
    ]
  }

  static getInstance () {
    if (instance === null) {
      instance = new Database()
    }

    return instance
  }
}

module.exports = Database
