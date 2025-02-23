// Packages
const core = require('@actions/core')
const exeq = require('exeq')

// Input variables
const inputs = {
  AWS_ACCESS_KEY_ID: core.getInput('aws-access-key-id'),
  AWS_SECRET_ACCESS_KEY: core.getInput('aws-secret-access-key'),
  ENABLE_CANARY_DEPLOYMENTS_PLUGIN: core.getInput('enable-canary-deployments-plugin'),
  ENABLE_DOMAIN_MANAGER_PLUGIN: core.getInput('enable-domain-manager-plugin')
}

// Install Serverless
async function installServerless() {
  await exeq(
    `echo "Installing Serverless..."`,
    `npm install -g serverless`
  )
}

// Install Serverless plugin
async function installServerlessPlugin(plugin) {
  await exeq(
    `echo "Installing ${plugin}..."`,
    `npm install ${plugin}`
  )
}

// Runs Serverless deploy using AWS Credentials if specified, else SERVERLESS ACCESS KEY
async function runServerlessDeploy() {
  await exeq(
    `echo "Running serverless deploy..."`,

    // Configure AWS credentials if provided
    `[ -n "${inputs.AWS_ACCESS_KEY_ID}" ] && [ -n "${inputs.AWS_SECRET_ACCESS_KEY}" ] && 
     sls config credentials --provider aws --key ${inputs.AWS_ACCESS_KEY_ID} --secret ${inputs.AWS_SECRET_ACCESS_KEY} --verbose`,

    // Deploy using config file if specified, otherwise default deploy
    `serverless deploy --verbose`
  )
}

// Runs all functions sequentially
async function handler() {
  try {
    // Install Serverless
    await installServerless()

    // Install serverless-python-requirements plugin
    await installServerlessPlugin('serverless-python-requirements')

    // Install additional plugins if enabled
    if (inputs.ENABLE_CANARY_DEPLOYMENTS_PLUGIN === 'true') {
      await installServerlessPlugin('serverless-plugin-canary-deployments')
    }

    if (inputs.ENABLE_DOMAIN_MANAGER_PLUGIN === 'true') {
      await installServerlessPlugin('serverless-domain-manager')
    }

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
