import {Team} from './team.model';

export class Jumper {
  constructor(public name: string, public surname: string, public team: Team, public imagePath: string) {}

  getFullName() {
    return this.name + ' ' + this.surname;
  }
}
