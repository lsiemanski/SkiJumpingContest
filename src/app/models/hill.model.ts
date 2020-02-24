import {PointsCounting} from '../repos/points-counting';
import {Team} from './team.model';

export class Hill {
  constructor(public city: string,
              public country: Team,
              public name: string,
              public kPoint: number,
              public hillSize: number,
              public pointsCounting: PointsCounting) {}
}
