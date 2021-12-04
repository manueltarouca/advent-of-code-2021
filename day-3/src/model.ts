interface Report {
  position: number;
  values: string[];
  mostCommon?: number;
  leastCommon?: number;
  equal?: boolean;
}

interface Meta {
  mostCommon?: number;
  leastCommon?: number;
  equal?: boolean;
}