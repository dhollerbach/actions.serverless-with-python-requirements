// Packages
const core = require('@actions/core')
const exeq = require('exeq')

// Input variables
const inputs = {
  AWS_ACCESS_KEY_ID: core.getInput('aws-access-key-id'),
  AWS_SECRET_ACCESS_KEY: core.getInput('aws-secret-access-key'),
  FRAMEWORK: core.getInput('framework').toString(),
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
  if (inputs.FRAMEWORK) {
    console.log(`Installing serverless@${inputs.FRAMEWORK}...`)
    await exeq(`npm i serverless@${inputs.FRAMEWORK} -g`)
  } else {
    console.log("Installing serverless@latest...")
    await exeq(`npm i serverless -g`)
  }
}

// Install plugins
async function installPlugin(plugin) {
  console.log(`Installing ${plugin}...`)
  await exeq(`serverless plugin install -n ${plugin}`)
}

// Run Serverless deploy using AWS credentials if specified, else use Serverless access key
async function runServerlessDeploy() {
  try {
    // Configure Serverless access key
    if (inputs.SERVERLESS_ACCESS_KEY) {
      console.log("Setting Serverless access key.")
      process.env.SERVERLESS_ACCESS_KEY = inputs.SERVERLESS_ACCESS_KEY
    }

    // Configure AWS credentials
    if (inputs.AWS_ACCESS_KEY_ID && inputs.AWS_SECRET_ACCESS_KEY) {
      console.log("Setting AWS credentials.")
      await exeq(`serverless config credentials --provider aws --key ${inputs.AWS_ACCESS_KEY_ID} --secret ${inputs.AWS_SECRET_ACCESS_KEY} --verbose`)
    }

    // Change the working directory
    if (inputs.WORKING_DIRECTORY) {
      console.log(`Changing working directory to ${inputs.WORKING_DIRECTORY}...`)
      process.chdir(inputs.WORKING_DIRECTORY)
    }

    // Run Serverless deploy
    console.log("Running Serverless deploy")
    await exeq(`serverless deploy --verbose || echo "::error:: Serverless deploy failed"`)

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
