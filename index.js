//  Packages
var core = require('@actions/core')
var execSync = require('child_process').execSync
code = execSync('sudo npm install exeq --save')
var exeq = require('exeq')

//  Environment Vars
var ARGS = core.getInput('args')
var AWS_ACCESS_KEY_ID = core.getInput('aws-access-key-id')
var AWS_SECRET_ACCESS_KEY = core.getInput('aws-secret-access-key')
var SERVERLESS_ACCESS_KEY = core.getInput('serverless-access-key')

//  Updates Ubuntu
async function updateUbuntu() {
  await exeq(
    'echo Updating ubuntu...',
    'sudo apt-get update -y'
  )
}

//  Installs python3.8
async function installPython() {
  await exeq(
    'echo Installing python3...',
    'sudo apt-get install software-properties-common -y',
    'sudo add-apt-repository ppa:deadsnakes/ppa -y',
    'sudo apt-get install python3.8 -y',
  )
}

//  Reinstalls Docker on Ubuntu
async function installDocker() {
  await exeq(
    'echo Installing docker...',
    'sudo apt-get install docker.io -y',
    'sudo systemctl unmask docker',
    'sudo systemctl start docker'
  )
}

//  Installs Serverless and specified plugins
async function installServerlessAndPlugins() {
  await exeq(
    'echo Installing Serverless and plugins...',
    'sudo npm i serverless -g',
    'sudo npm i serverless-python-requirements',
    'sudo npm i serverless-plugin-canary-deployments'
  )
}

//  Uses SERVERLESS_ACCESS_KEY if provided, else AWS credentials
async function setServerlessCredentials() {
  if (SERVERLESS_ACCESS_KEY !== '') {
    var setCredentials = `sudo export SERVERLESS_ACCESS_KEY="${SERVERLESS_ACCESS_KEY}"`
  } else {
    var setCredentials = `sudo sls config credentials --provider aws --key ${AWS_ACCESS_KEY_ID} --secret ${AWS_SECRET_ACCESS_KEY} ${ARGS}`
  }
  return setCredentials
}

//  Runs Serverless deploy including any provided args
async function runServerlessDeploy(setCredentials) {
  await exeq(
    `echo Running sudo sls deploy ${ARGS}...`,
    // `if [ ${SERVERLESS_ACCESS_KEY} != '' ]; then 
    //   export SERVERLESS_ACCESS_KEY=${SERVERLESS_ACCESS_KEY}
    // else
    //   sudo sls config credentials --provider aws --key ${AWS_ACCESS_KEY_ID} --secret ${AWS_SECRET_ACCESS_KEY} ${ARGS}
    // fi
    // `
    `${setCredentials}`,
    `sudo sls deploy ${ARGS}`
  )
}

//  Runs all functions in sequence
async function handler() {
  await updateUbuntu()
  await installPython()
  await installDocker()
  await installServerlessAndPlugins()
  var setCredentials = await setServerlessCredentials()
  await runServerlessDeploy(setCredentials)
}

//  Main function
if (require.main === module) {
  handler()
}
