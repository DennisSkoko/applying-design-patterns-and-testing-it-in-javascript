'use strict'

const path = require('path')
const fs = require('fs-extra')

const BinaryConverter = require('./binary-converter')
const HexConverter = require('./hex-converter')

const stream = fs.createReadStream(path.resolve(__dirname, '../res/data.txt'))

const binaryConverter = new BinaryConverter()
const hexConverter = new HexConverter()

stream.on('data', chunk => {
  chunk.forEach(data => {
    binaryConverter.append(data)
    hexConverter.append(data)
  });
})

stream.on('end', () => {
  console.log('Binary:')
  console.log(binaryConverter.getResult())
  console.log('Hex:')
  console.log(hexConverter.getResult())
  stream.close()
})
