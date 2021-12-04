import * as fs from 'fs';
import { getReportMeta } from './helper';

const FILE_NAME = './inputs.txt';

export function puzzleTwo() {
  console.log('Puzzle 2');
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

  reports.forEach(report => {
    if (report.position < (reports.length - 1)) {
      let indexesToRemove: number[] = [];
      if (report.equal || report.mostCommon) {
        indexesToRemove = report.values.map((value, index) => !(parseInt(value)) ? index : -1).filter(index => index !== -1);
      } else if (!report.mostCommon) {
        indexesToRemove = report.values.map((value, index) => parseInt(value) ? index : -1).filter(index => index !== -1);
      }
      reports.forEach( (r, i) => {
        r.values = r.values.filter( (v, i) => indexesToRemove.includes(i));
      })
    }

  });

}
