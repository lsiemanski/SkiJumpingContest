import {Jumper} from './jumper.model';
import {JumpResult} from './result.model';

export class ContestResult {
  constructor(public jumper: Jumper, public jumps: JumpResult[]) {}

  public getTotalNote() {
    let result = 0;
    for (const jump of this.jumps) {
      result += jump.totalNote;
    }
    return +result.toFixed(1);
  }
}
