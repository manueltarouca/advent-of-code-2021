import * as fs from 'fs';
import { getReportMeta } from './helper';

const FILE_NAME = './inputs.txt';

export function puzzleOne() {
  console.log('Puzzle 1');
  console.log('Reading file');

  const inputs = fs
    .readFileSync(FILE_NAME, 'utf8').split('\n')

  console.log(`Read [${inputs.length}] inputs.`);

  let reports: Report[] = [];

  // Build reports
  for (let input of inputs) {
    for (let i = 0; i < input.length; i++) {
      const report = reports.find(r => r.position === i);
      if (report) {
        report.values.push(input[i]);
      } else {
        reports.push({
          position: i,
          values: [input[i]],
        })
      }
    }
  }
  reports = reports.map(report => Object.assign({}, report, getReportMeta(report)));
  console.log(reports)

  const gamma = parseInt(reports.map( report => report.mostCommon).join(''), 2);
  const epsilon = parseInt(reports.map( report => report.leastCommon).join(''), 2);


  console.log(`gama is: [${gamma}] epsilon is: [${epsilon}], it's multiplication is ${gamma*epsilon}`);

}
