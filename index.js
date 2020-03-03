//  Packages
const core = require('@actions/core');
const execSync = require('child_process').execSync;
code = execSync('sudo npm install exeq --save');
const exeq = require('exeq');

//  Environment Variables
const ARGS = core.getInput('args');
const AWS_ACCESS_KEY_ID = core.getInput('aws-access-key-id');
const AWS_SECRET_ACCESS_KEY = core.getInput('aws-secret-access-key');


//  Main function
if (require.main === module) {
  exeq(
    'echo Installing docker...',
    'sudo apt-get install docker.io -y',
    'sudo systemctl unmask docker',
    'sudo systemctl start docker',
    'echo Installing Serverless and serverless-python-requirements...',
    'sudo npm i serverless -g',
    'sudo npm i serverless-python-requirements',
    `echo Running sudo sls deploy ${ARGS}...`,
    `sudo sls config credentials --provider aws --key ${AWS_ACCESS_KEY_ID} --secret ${AWS_SECRET_ACCESS_KEY} ${ARGS}`,
    `sudo sls deploy ${ARGS}`
  );
}
