/** script that create random data with faker, save it to a files; 
 *  then run the load test with k6 from command line for file index.js;
 *  result will be saved to a file output/k6-output.txt
 * 
 * structure: 
 *   output/
 *   - users.json
 *     ---> {name: string, email: string, cpf: string}
 */

const {faker} = require('@faker-js/faker');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, 'output');
const usersFile = path.join(outputDir, 'users.json');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const users = Array.from({ length: 1000 }, () => ({
  name: faker.person.fullName(),
  email: faker.internet.email(),
  cpf: faker.number.int({ min: 10000000000, max: 99999999999 }).toString(),
}));

fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));

exec(`k6 run ./load-test/index.js`, (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(stdout);
  fs.writeFileSync(path.join(outputDir, 'k6-output.txt'), stdout);
  console.error(stderr);
})
