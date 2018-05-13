'use strict'

const inquirer = require('inquirer')

const EnglishDataFactory = require('./english-data-factory')
const SwedishDataFactory = require('./swedish-data-factory')

inquirer.prompt([
  {
    type: 'list',
    name: 'language',
    message: 'Which language do you want to generate the data in?',
    choices: ['english', 'swedish']
  }
])
  .then(({ language }) => {
    switch (language) {
      case 'english':
        return new EnglishDataFactory()

      case 'swedish':
        return new SwedishDataFactory()

      default:
        throw new Error('Invalid language')
    }
  })
  .then(factory => {
    console.log('Name: ' + factory.createName())
    console.log('Address: ' + factory.createAddress())
  })
  .catch(console.error)
