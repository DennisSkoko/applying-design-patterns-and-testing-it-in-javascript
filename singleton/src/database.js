'use strict'

let instance = null

const data = [
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

class Database {
  async fetchData () {
    return data
  }

  static getInstance () {
    if (instance === null) {
      instance = new Database()
    }

    return instance
  }
}

module.exports = Database
