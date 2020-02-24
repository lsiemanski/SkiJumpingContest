export interface PointsCounting {
  countTotalNote(kPoint: number, length: number, notes: number[]): number;
}

function countNote(kPoint: number, length: number, notes: number[], base: number, ratio: number): number {
  let result = 0;
  for (const note of notes) {
    result += note;
  }
  result += (length - kPoint) * ratio;
  result += base;
  return result;
}

export class NormalHillPointsCounting implements PointsCounting {
  countTotalNote(kPoint: number, length: number, notes: number[]) {
    return countNote(kPoint, length, notes, 60, 2);
  }
}

export class LargeHillPointsCounting implements PointsCounting {
  countTotalNote(kPoint: number, length: number, notes: number[]) {
    return countNote(kPoint, length, notes, 60, 1.8);
  }
}

export class FlyingHillPointsCounting implements PointsCounting {
  countTotalNote(kPoint: number, length: number, notes: number[]) {
    return countNote(kPoint, length, notes, 120, 1.2);
  }
}
