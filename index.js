// Packages
const core = require('@actions/core')
const exeq = require('exeq')

// Input variables
const inputs = {
  AWS_ACCESS_KEY_ID: core.getInput('aws-access-key-id'),
  AWS_SECRET_ACCESS_KEY: core.getInput('aws-secret-access-key'),
  ENABLE_SERVERLESS_DOMAIN_MANAGER: core.getInput('enable-serverless-domain-manager'),
  ENABLE_SERVERLESS_PLUGIN_CANARY_DEPLOYMENTS: core.getInput('enable-serverless-plugin-canary-deployments'),
  SERVERLESS_ACCESS_KEY: core.getInput('serverless-access-key')
}

// Install Serverless
async function installServerless() {
  console.log("Installing Serverless and plugins...")
  await exeq(
    `npm i serverless -g`
  )
}

// Install plugins
async function installPlugin(plugin) {
  console.log(`Installing ${plugin}...`)
  await exeq(
    `npm i ${plugin}`
  )
}

// Run Serverless deploy using AWS credentials if specified, else use Serverless access key
async function runServerlessDeploy() {
  try {
    // AWS credentials
    if ( inputs.AWS_ACCESS_KEY_ID && inputs.AWS_SECRET_ACCESS_KEY ) {
      console.log("Running Serverless deploy (AWS credentials)")
      await exeq(
        `sls config credentials --provider aws --key ${inputs.AWS_ACCESS_KEY_ID} --secret ${inputs.AWS_SECRET_ACCESS_KEY} --verbose`
      )

    // Serverless access key
    } else {
      console.log("Running Serverless deploy (serverless access key)")
      await exeq(
        `export SERVERLESS_ACCESS_KEY=${inputs.SERVERLESS_ACCESS_KEY} && serverless deploy --verbose || echo "::error:: Serverless deploy failed"`
      )
    }
    
  } catch (error) {
    console.error("Serverless Deploy Error:", error);
    core.setFailed(error.message);
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

    // Install serverless-python-requirements
    await installPlugin("serverless-python-requirements")

    // Install optional Serverless plugins
    if ( inputs.ENABLE_SERVERLESS_DOMAIN_MANAGER === 'true' ) {
      await installPlugin("serverless-domain-manager")
    }

    if ( inputs.ENABLE_SERVERLESS_PLUGIN_CANARY_DEPLOYMENTS === 'true' ) {
      await installPlugin("serverless-plugin-canary-deployments")
    }

    // Run Serverless deploy
    await runServerlessDeploy()

  } catch (error) {
    core.setFailed(error.message)
  }
}
