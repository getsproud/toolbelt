#!/usr/bin/env node

const yargs = require('yargs/yargs')

const { hideBin } = yargs

const { generate } = require('./scripts/generator')
const keyGenerator = require('./scripts/keyGenerator')
const { seed } = require('./scripts/seeder')

yargs(hideBin(process.argv))
  .command('seed', 'fill database with dummy data', () => seed())
  .command('generate <part> [name]', 'generate new parts for employeehq', (yargs) => {
    yargs
      .positional('part', {
        describe: 'which part to generate ex. service, key',
      })
      .positional('name', {
        describe: 'name of the part to generate ex. fooBar',
      })
  }, (argv) => {
    if (argv.part !== 'key') generate(argv.part, argv.name, argv.db)
    else keyGenerator()
  }).option('database', {
    alias: 'db',
    type: 'boolean',
    description: 'add a database to the service'
  }).argv
