export function mostCommonValue(report: Report): number {
  return (report.values.filter(value => parseInt(value)).length > report.values.filter(value => !parseInt(value)).length) ? 1 : 0;
}

export function leastCommonValue(report: Report): number {
  return (report.values.filter(value => parseInt(value)).length < report.values.filter(value => !parseInt(value)).length) ? 1 : 0;
}

export function equal(report: Report): boolean {
  return report.values.filter(value => parseInt(value)).length === report.values.filter(value => !parseInt(value)).length;
}

export function getReportMeta(report: Report): Meta {
  return {
    mostCommon: mostCommonValue(report),
    leastCommon: leastCommonValue(report),
    equal: equal(report)
  }
}