import {Hill} from '../models/hill.model';
import {TeamRepository} from './team-repository';
import {FlyingHillPointsCounting, LargeHillPointsCounting, NormalHillPointsCounting} from './points-counting';
import {Injectable} from '@angular/core';

@Injectable()
export class HillRepository {
  constructor(private teamRepository: TeamRepository) {}

  public hills: Hill[] = [
    new Hill('Kuusamo', this.teamRepository.Finland, 'Rukatunturi', 120, 142, new LargeHillPointsCounting()),
    new Hill('Trondheim', this.teamRepository.Norway, 'Granåsen', 120, 131, new LargeHillPointsCounting()),
    new Hill('Villach', this.teamRepository.Austria, 'Alpenarena', 90, 98, new NormalHillPointsCounting()),
    new Hill('Kranj', this.teamRepository.Slovenia, 'Bauhenk', 100, 109, new NormalHillPointsCounting()),
    new Hill('Engelberg', this.teamRepository.Switzerland, 'Gross-Titlis-Schanze', 125, 137, new LargeHillPointsCounting()),
    new Hill('Oberstdorf', this.teamRepository.Germany, 'Schattenbergschanze', 120, 137, new LargeHillPointsCounting()),
    new Hill('Ga-Pa', this.teamRepository.Germany, 'Große Olympiaschanze', 115, 125, new LargeHillPointsCounting()),
    new Hill('Innsbruck', this.teamRepository.Austria, 'Bergisel', 120, 130, new LargeHillPointsCounting()),
    new Hill('Bischofschofen', this.teamRepository.Austria, 'Paul-Ausserleitner-Schanze', 125, 140, new LargeHillPointsCounting()),
    new Hill('Vikersund', this.teamRepository.Norway, 'Vikersundbakken', 185, 207, new FlyingHillPointsCounting()),
    new Hill('Zakopane', this.teamRepository.Poland, 'Wielka Krokiew', 120, 134, new LargeHillPointsCounting()),
    new Hill('Sapporo', this.teamRepository.Japan, 'Okurayama', 120, 134, new LargeHillPointsCounting()),
    new Hill('Harrachov', this.teamRepository.CzechRepublic, 'Čertak', 185, 205, new FlyingHillPointsCounting()),
    new Hill('Willingen', this.teamRepository.Germany, 'Mühlenkopfschanze', 130, 145, new LargeHillPointsCounting()),
    new Hill('Oberstdorf', this.teamRepository.Germany, 'Heini-Klopfer-Skiflugschanze', 185, 213, new FlyingHillPointsCounting()),
    new Hill('Lahti', this.teamRepository.Finland, 'Salpausselkä', 116, 130, new LargeHillPointsCounting()),
    new Hill('Kuopio', this.teamRepository.Finland, 'Puijo', 120, 127, new LargeHillPointsCounting()),
    new Hill('Lillehammer', this.teamRepository.Norway, 'Lysgårdsbakken', 120, 138, new LargeHillPointsCounting()),
    new Hill('Oslo', this.teamRepository.Norway, 'Holmenkollbakken', 115, 128, new LargeHillPointsCounting()),
    new Hill('Planica', this.teamRepository.Slovenia, 'Letalnica', 185, 215, new FlyingHillPointsCounting())
  ];
}
