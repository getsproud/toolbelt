const fse = require('fs-extra')
const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml');

const generate = (part, name, db) => {
  if (part === 'service') return generateService(name, db)
}

const generateService = (service, db) => {
  let srcDir = path.resolve(`${__dirname}/../templates/service-template`)

  if (db === false)
    srcDir = path.resolve(`${__dirname}/../templates/service-template-without-db`)

  const destDir = path.resolve(`${__dirname}/../../services/${service}`)

  const origSkaffoldYaml = path.resolve(`${__dirname}/../../skaffold.yaml`)

  console.log(`\n🚀 Generating files and folders for new service ${service}\n`)

  // To copy a folder
  try {
    fse.copySync(srcDir, destDir)
  } catch(e) {
    console.error(`\n❌ Failed generating folders for new service ${service}\n`)
    console.error(`${e.message}`)
  }

  console.log(`✅ Folder structure for ${service} generated\n`)

  const deploymentYAML = path.join(destDir, 'deployments/template-deployment.yaml')
  const databaseYAML = path.join(destDir, 'deployments/template-database.yaml')
  const databaseServiceYAML = path.join(destDir, 'deployments/template-database-service.yaml')
  const serviceYAML = path.join(destDir, 'deployments/template-service.yaml')
  const package = path.join(destDir, 'package.json')

  const replaceServiceName = filePath => {
    const file = fs.readFileSync(filePath, 'utf8')

    if (!file) return new Error(`${filePath} file not found!`)

    const result = file.replace(/{{\sserviceName\s}}/gm, service)

    fs.writeFileSync(filePath, result, 'utf8')
  }

  const files = [package, deploymentYAML, serviceYAML]

  if (db !== false)
    files.push(...[databaseYAML, persistentVolumeYAML, persistentVolumeClaimYAML, databaseServiceYAML])

  try {
    files.map(file => replaceServiceName(file))
  } catch(e) {
    console.error(`\n❌ Failed generating files for new service ${service}\n`)
    console.error(`${e.message}`)
  }

  console.log(`✅ Files for ${service} generated\n`)

  try {
    files.map(file=> {
      if (file.indexOf('template') !== -1) fse.moveSync(file, file.replace('template', service))
    })
  } catch(e) {
    console.error(`\n❌ Failed moving files for new service ${service}\n`)
    console.error(`${e.message}`)
  }

  try {
    const content = fs.readFileSync(origSkaffoldYaml, 'utf8')
    const data = yaml.safeLoad(content)

    console.log(data.build.artifacts)

    const artifact = {
      image: `employeehq/${service}`,
      context: `services/${service}`,
      docker: {
        buildArgs: {
          NPM_TOKEN: '{{.NPM_TOKEN}}'
        }
      }
    }

    data.build.artifacts.push(artifact)
    data.deploy.kubectl.manifests.splice(-1, 0, `services/${service}/deployments/*.yaml`)

    const updatedSkaffoldYaml = yaml.safeDump(data);
    fs.writeFileSync(origSkaffoldYaml, updatedSkaffoldYaml, 'utf8');
  } catch(e) {
    console.error(`\n❌ Failed to update skaffold.yaml\n`)
    console.error(`${e.message}`)
  }

  console.log(`✅ Updated skaffold.yaml\n`)

  console.log(`🎉 ${service} service successfully generated!`)
}

module.exports = {
  generate
}
