//  Packages
var core = require('@actions/core')
var execSync = require('child_process').execSync
code = execSync('npm install exeq --save')
var exeq = require('exeq')

//  Environment Vars
var ARGS = core.getInput('args')
var AWS_ACCESS_KEY_ID = core.getInput('aws-access-key-id')
var AWS_SECRET_ACCESS_KEY = core.getInput('aws-secret-access-key')
var SERVERLESS_ACCESS_KEY = core.getInput('serverless-access-key')

//  Installs Serverless and specified plugins
async function installServerlessAndPlugins() {
  await exeq(
    'echo Installing Serverless and plugins...',
    'npm i serverless -g',
    'npm i serverless-python-requirements',
    'npm i serverless-plugin-canary-deployments'
  )
}

//  Runs Serverless deploy including any provided args
async function runServerlessDeploy() {
  await exeq(
    `echo Running sls deploy ${ARGS}...`,
    `if [ ${SERVERLESS_ACCESS_KEY} != '' ]; then 
      export SERVERLESS_ACCESS_KEY="${SERVERLESS_ACCESS_KEY}"
    else
      sls config credentials --provider aws --key ${AWS_ACCESS_KEY_ID} --secret ${AWS_SECRET_ACCESS_KEY} ${ARGS}
    fi`,
    `echo "::set-env name=SERVERLESS_ACCESS_KEY::${SERVERLESS_ACCESS_KEY}"`,
    `env`,
    `sls deploy ${ARGS}`
  )
}

//  Runs all functions in sequence
async function handler() {
  await installServerlessAndPlugins()
  await runServerlessDeploy()
}

//  Main function
if (require.main === module) {
  handler()
}
