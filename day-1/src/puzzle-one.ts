import * as fs from 'fs';

const FILE_NAME = 'inputs.txt';

export function puzzleOne() {
  console.log('Puzzle 1');
  console.log('Reading file');

  const inputs = fs
    .readFileSync(FILE_NAME, 'utf-8')
    .split('\n')
    .map(i => parseInt(i));

  console.log(`Read [${inputs.length}] inputs.`);

  let counter = 0;

  if (inputs.length > 1) {
    let prev = inputs[0];
    for (let i = 1; i < inputs.length; i++) {
      if (inputs[i] > prev) {
        counter = counter + 1;
      }
      prev = inputs[i];
    }
  }

  console.log(
    `${counter} measurements that are larger than the previous measurement.`
  );
}
