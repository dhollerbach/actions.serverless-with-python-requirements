//  Packages
var core = require('@actions/core');
var execSync = require('child_process').execSync;
code = execSync('sudo npm install exeq --save');
var exeq = require('exeq');

async function one() {
  await exeq(
    'echo ONE'
  );
}

async function two() {
  await exeq(
    'echo TWO'
  );
}

async function three() {
  await exeq(
    'echo THREE'
  );
}

//  Main function
(async () => {
  if (require.main === module) {
    await one()
    await two()
    await three()
  }
})();
