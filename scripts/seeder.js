const { spawn } = require('child_process')
const { Seeder } = require('mongo-seeding')

const seeds = ['budget', 'category', 'company', 'department', 'employee', 'training', 'spending']

const forwardMongoPort = svc => spawn('kubectl', ['port-forward', svc, '27052:27017', '-n', 'employeehq-dev'])



const makeMongoConfig = () => ({
  // database: {
  //   host: '127.0.0.1',
  //   port: 27052,
  //   name: 'employeehq-dev',
  //   username: 'developer',
  //   password: 'Zk9v4xcKwAFPHcV9VX99qc2MfFsqn2Eb',
  //   options: {
  //     slaveOk: true
  //   }
  // },
  database: 'mongodb+srv://developer:Zk9v4xcKwAFPHcV9VX99qc2MfFsqn2Eb@employeehq-dev-cluster.mpssn.mongodb.net/employeehq-dev?retryWrites=true&w=majority',
  dropDatabase: true
})

const seed = async _ => {
  console.log('Begin seeding database...')
  // const forwarder = forwardMongoPort(`service/employeehq-mongodb-cluster-dev-svc`)
  //
  // console.log('Forwarding K8s Ports to local')
  // forwarder.stderr.on('data', msg => console.log(msg.toString()))
  //
  // forwarder.stdout.on('data', async msg => {
  //   const m = msg.toString()
  //
  //   console.log(m)
  //
  //   if (m.indexOf('Forwarding') !== -1) {
  //     try {
        await runner()
      // } catch (err) {
      //   console.log('ERROR:: ', err)
      // }
      //
      // forwarder.stdin.pause()
      //
      // forwarder.kill()

      console.log('Done seeding database!')
  //   }
  // })
}

const runner = index => new Promise(async (resolve) => {
  console.log('Seeding...')

  const seeder = new Seeder(makeMongoConfig())

  const collections = []

  for (let index = 0; index < seeds.length; index++) {
    collections.push({
      name: `${seeds[index].replace(/y$/, 'ie')}s`,
      documents: require(`../seeds/${seeds[index]}`)
    })
  }

  console.log(collections)

  const seedTask = await seeder.import(collections)

  console.log('Seeding done!')

  return resolve(true)
})

module.exports = {
  seed
}
