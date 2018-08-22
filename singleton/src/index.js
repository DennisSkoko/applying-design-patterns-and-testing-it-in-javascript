'use strict'

const UserManager = require('./user-manager')

const manager = new UserManager()
manager.getUserByName('Foo')
  .then(({ name, email }) => `Name: ${name}\nEmail: ${email}`)
  .then(console.log)
  .catch(console.error)
