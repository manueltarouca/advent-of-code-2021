import * as fs from 'fs';

const FILE_NAME = 'inputs.txt';

export function puzzleTwo() {
  console.log('Puzzle 2');
  console.log('Reading file');

  const inputs = fs
    .readFileSync(FILE_NAME, 'utf-8')
    .split('\n')
    .map(i => parseInt(i));

  const n = inputs.length;
  console.log(`Read [${n}] inputs.`);

  const slices = [];
  for (let i = 0; i < n; i++) {
    slices.push(inputs.slice(i, i + 3));
  }

  console.log(slices);

  console.log(slices.length);

  const summedInputs = slices.map(slice => slice.reduce((a, b) => a + b));

  console.log(summedInputs);

  console.log(summedInputs.length);
  let counter = 0;

  if (summedInputs.length > 1) {
    let prev = summedInputs[0];
    for (let i = 1; i < summedInputs.length; i++) {
      if (summedInputs[i] > prev) {
        counter = counter + 1;
      }
      prev = summedInputs[i];
    }
  }

  console.log(`${counter} sums are larger than the previous sum.`);
}
