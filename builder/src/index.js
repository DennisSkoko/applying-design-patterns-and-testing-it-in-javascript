'use strict'

const path = require('path')
const fs = require('fs-extra')

const BinaryConverter = require('./binary-converter')
const HexConverter = require('./hex-converter')

const convert = (converter, data) => new Promise(resolve => {
  data.forEach(value => {
    converter.append(value)
  })

  resolve(converter.getResult())
})

fs.readFile(path.resolve(__dirname, '../res/data.txt'))
  .then(data => Promise.all([
    convert(new BinaryConverter(), data),
    convert(new HexConverter(), data),
  ]))
  .then(([ binary, hex ]) => {
    console.log('Binary:')
    console.log(binary)
    console.log('Hex:')
    console.log(hex)
  })
  .catch(console.error)
