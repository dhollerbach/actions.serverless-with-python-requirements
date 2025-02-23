// Packages
const core = require('@actions/core')
const exeq = require('exeq')

// Input variables
const inputs = {
  AWS_ACCESS_KEY_ID: core.getInput('aws-access-key-id'),
  AWS_SECRET_ACCESS_KEY: core.getInput('aws-secret-access-key'),
  SERVERLESS_ACCESS_KEY: core.getInput('serverless-access-key'),
  WORKING_DIRECTORY: core.getInput('working-directory')
}

// Serverless plugins
const plugins = [
  "serverless-python-requirements",
  "serverless-domain-manager",
  "serverless-plugin-canary-deployments"
]

// Install Serverless
async function installServerless() {
  console.log("Installing Serverless and plugins...")
  await exeq(`npm i serverless -g`)
}

// Install plugins
async function installPlugin(plugin) {
  console.log(`Installing ${plugin}...`)
  await exeq(`npm i ${plugin}`)
}

// Run Serverless deploy using AWS credentials if specified, else use Serverless access key
async function runServerlessDeploy() {
  try {

    // Configure AWS credentials
    if ( inputs.AWS_ACCESS_KEY_ID && inputs.AWS_SECRET_ACCESS_KEY ) {
      console.log("Running Serverless deploy (AWS credentials)")
      await exeq(`sls config credentials --provider aws --key ${inputs.AWS_ACCESS_KEY_ID} --secret ${inputs.AWS_SECRET_ACCESS_KEY} --verbose`)

    // Run Serverless deploy
    } else {
      console.log("Running Serverless deploy (serverless access key)")
      process.env.SERVERLESS_ACCESS_KEY = inputs.SERVERLESS_ACCESS_KEY
      await exeq(`cd ${inputs.WORKING_DIRECTORY} && serverless deploy --verbose || echo "::error:: Serverless deploy failed"`)
    }

  } catch (error) {
    console.error("Serverless Deploy Error:", error)
    core.setFailed(error.message)
  }
}

// Main functions
if (require.main === module) {
  handler()
}

async function handler() {
  try {
    // Install Serverless
    await installServerless()

    // Install Serverless plugins
    for (const plugin of plugins) {
      await installPlugin(plugin)
    }

    // Run Serverless deploy
    await runServerlessDeploy()

  } catch (error) {
    core.setFailed(error.message)
  }
}
