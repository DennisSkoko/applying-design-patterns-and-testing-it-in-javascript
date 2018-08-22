'use strict'

const Database = require('./database')

module.exports = class UserManager {
  async getUserByName (name) {
    const users = await Database.getInstance().fetchData()
    return users.find(user => user.name === name)
  }
}
