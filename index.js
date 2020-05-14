//  Packages
var core = require('@actions/core')
var execSync = require('child_process').execSync
code = execSync('npm install exeq --save')
var exeq = require('exeq')

//  Input variables
var ARGS = core.getInput('args')

//  Installs Serverless and specified plugins
async function installServerlessAndPlugins() {
  await exeq(
    'echo Installing Serverless and plugins...',
    'npm i serverless -g',
    'npm i serverless-python-requirements',
    'npm i serverless-plugin-canary-deployments'
  )
}

//  Runs Serverless deploy using SERVERLESS_ACCESS_KEY if specified, else AWS Credentials
async function runServerlessDeploy() {
  await exeq(
    `echo Running sls deploy ${ARGS}...`,
    `if [ ${process.env.AWS_ACCESS_KEY_ID} ] && [ ${process.env.AWS_SECRET_ACCESS_KEY} ]; then
      sls config credentials --provider aws --key ${process.env.AWS_ACCESS_KEY_ID} --secret ${process.env.AWS_SECRET_ACCESS_KEY} ${ARGS}
    fi`,
    `sls deploy ${ARGS}`
  )
}

//  Runs all functions sequentially
async function handler() {
  await installServerlessAndPlugins()
  await runServerlessDeploy()
}

//  Main function
if (require.main === module) {
  handler()
}
