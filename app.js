require('module-alias/register')
require('@babel/register')

const {
  default: server
} = require('~/server')

module.exports = server()
