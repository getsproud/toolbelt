const crypto = require('crypto')
const fs = require('fs')
const path = require('path')

const keyGenerator = () => {
  const now = Math.floor(new Date() / 1000)
  const dir = path.join(__dirname, `../../services/gateway/src/keys`)
  fs.mkdirSync(dir, { recursive: true })

  crypto.generateKeyPair(
    'rsa',
    {modulusLength: 1024},
    (err, publicKey, privateKey) => {
      fs.writeFile(
        dir + '/public.pem',
        publicKey.export({ type: 'spki', format: 'pem' }),
        err => {
          console.log(err)
        }
      )
      fs.writeFile(
        dir + '/public_key.txt',
        publicKey.export({ type: 'spki', format: 'der' }).toString('base64') +
          '\n',
        err => {
          console.log(err)
        }
      )
      fs.writeFile(
        dir + '/private.pem',
        privateKey.export({ type: 'pkcs8', format: 'pem' }),
        err => {
          console.log(err)
        }
      )
    }
  )

  console.log('Public key saved in ' + dir + '/public_key.txt')
}

module.exports = keyGenerator
