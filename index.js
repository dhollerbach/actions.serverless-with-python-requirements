// Packages
const core = require('@actions/core')
const exeq = require('exeq')

// Input variables
const inputs = {
  AWS_ACCESS_KEY_ID: core.getInput('aws-access-key-id'),
  AWS_SECRET_ACCESS_KEY: core.getInput('aws-secret-access-key'),
}

// Install Serverless and plugins from package.json
async function installServerlessAndPlugins() {
  await exeq(
    `echo "Installing Serverless and plugins..."`,
    `npm install`
  )
}

// Runs Serverless deploy using AWS Credentials if specified, else SERVERLESS ACCESS KEY
async function runServerlessDeploy() {
  await exeq(
    `echo "Running serverless deploy..."`,

    // Configure AWS credentials if provided
    `[ -n "${inputs.AWS_ACCESS_KEY_ID}" ] && [ -n "${inputs.AWS_SECRET_ACCESS_KEY}" ] && 
     sls config credentials --provider aws --key ${inputs.AWS_ACCESS_KEY_ID} --secret ${inputs.AWS_SECRET_ACCESS_KEY} --verbose`,

    // Run Serverless deploy
    `serverless deploy --verbose`
  )
}

// Runs all functions sequentially
async function handler() {
  try {
    // Install Serverless and plugins
    await installServerlessAndPlugins()

    // Run deployment
    await runServerlessDeploy()

  } catch (error) {
    core.setFailed(error.message)
  }
}

// Main function
if (require.main === module) {
  handler()
}
