import {Injectable} from '@angular/core';
import {Jumper} from '../models/jumper.model';

@Injectable()
export class StandingsRepository {
  constructor() {}

  static standings = [
    {jumper: 'Adam Małysz', points: 1453},
    {jumper: 'Anders Jacobsen', points: 1319},
    {jumper: 'Simon Ammann', points: 1167},
    {jumper: 'Gregor Schlierenzauer', points: 956},
    {jumper: 'Andreas Küttel', points: 804},
    {jumper: 'Thomas Morgenstern', points: 756},
    {jumper: 'Andreas Kofler', points: 727},
    {jumper: 'Janne Ahonen', points: 539},
    {jumper: 'Matti Hautamäki', points: 526},
    {jumper: 'Michael Uhrmann', points: 524},
    {jumper: 'Dmitri Vassiliev', points: 523},
    {jumper: 'Martin Koch', points: 521},
    {jumper: 'Wolfgang Loitzl', points: 476},
    {jumper: 'Roar Ljøkelsøy', points: 474},
    {jumper: 'Arttu Lappi', points: 466},
    {jumper: 'Anders Bardal', points: 418},
    {jumper: 'Martin Schmitt', points: 355},
    {jumper: 'Martin Höllwarth', points: 284},
    {jumper: 'Denis Kornilov', points: 282},
    {jumper: 'Tom Hilde', points: 281},
    {jumper: 'Dmitri Ipatov', points: 260},
    {jumper: 'Jakub Janda', points: 253},
    {jumper: 'Jernej Damjan', points: 225},
    {jumper: 'Sigurd Pettersen', points: 210},
    {jumper: 'Jörg Ritzerfeld', points: 187},
    {jumper: 'Noriaki Kasai', points: 182},
    {jumper: 'Robert Kranjec', points: 179},
    {jumper: 'Harri Olli', points: 176},
    {jumper: 'Bjørn Einar Romøren', points: 174},
    {jumper: 'Kamil Stoch', points: 168},
    {jumper: 'Mario Innauer', points: 161},
    {jumper: 'Antonin Hajek', points: 160},
    {jumper: 'Andreas Widhölzl', points: 158},
    {jumper: 'Veli-Matti Lindström', points: 130},
    {jumper: 'Arthur Pauli', points: 118},
    {jumper: 'Rok Urbanc', points: 114},
    {jumper: 'Primoz Pikl', points: 110},
    {jumper: 'Andrea Morassi', points: 97},
    {jumper: 'Roman Koudelka', points: 87},
    {jumper: 'Tami Kiuru', points: 74},
    {jumper: 'Janne Happonen', points: 68},
    {jumper: 'Morten Solem', points: 63},
    {jumper: 'Balthasar Schneider', points: 59},
    {jumper: 'David Lazzaroni', points: 56},
    {jumper: 'Henning Stensrud', points: 55},
    {jumper: 'Radik Zhaparov', points: 55},
    {jumper: 'Christian Ulmer', points: 54},
    {jumper: 'Manuel Fettner', points: 48},
    {jumper: 'Sebastian Colloredo', points: 47},
    {jumper: 'Michael Neumayer', points: 45},
    {jumper: 'Guido Landert', points: 43},
    {jumper: 'Takanobu Okabe', points: 42},
    {jumper: 'Ilya Rosliakov', points: 41},
    {jumper: 'Lauri Hakola', points: 35},
    {jumper: 'Piotr Żyła', points: 34},
    {jumper: 'Jussi Hautamäki', points: 34},
    {jumper: 'Jan Matura', points: 33},
    {jumper: 'Kalle Keituri', points: 29},
    {jumper: 'Michael Möllinger', points: 28},
    {jumper: 'Stefan Hula', points: 26},
    {jumper: 'Daiki Ito', points: 26},
    {jumper: 'Vincent Descombes Sevoie', points: 26},
    {jumper: 'Andreas Aren', points: 21},
    {jumper: 'Rok Benkovic', points: 21},
    {jumper: 'Jan Mazoch', points: 16},
    {jumper: 'Stephan Hocke', points: 16},
    {jumper: 'Taku Takeuchi', points: 16},
    {jumper: 'Roland Müller', points: 15},
    {jumper: 'Georg Späth', points: 14},
    {jumper: 'Emmanuel Chedal', points: 13},
    {jumper: 'Nikolai Karpenko', points: 12},
    {jumper: 'Choi Yong-jik', points: 11},
    {jumper: 'Kevin Horlacher', points: 11},
    {jumper: 'Choi Heung-chul', points: 10},
    {jumper: 'Stefan Read', points: 10},
    {jumper: 'Lars Bystøl', points: 9},
    {jumper: 'Piotr Czaadajew', points: 7},
    {jumper: 'Peter Zonta', points: 7},
    {jumper: 'Stefan Thurnbichler', points: 7},
    {jumper: 'Jon Aaraas', points: 7},
    {jumper: 'Primoz Peterka', points: 6},
    {jumper: 'Kenshiro Ito', points: 5},
    {jumper: 'Lukas Hlava', points: 5},
    {jumper: 'Jure Sinkovec', points: 5},
    {jumper: 'Isak Grimholm', points: 4},
    {jumper: 'Robert Mateja', points: 4},
    {jumper: 'Andreas Wank', points: 3},
    {jumper: 'Pascal Bodmer', points: 2},
    {jumper: 'Florian Liegl', points: 2},
    {jumper: 'Jens Salumae', points: 1}
  ];

  static getStandings(jumpers: Jumper[]) {
    return this.standings
      .sort((a, b) => b.points - a.points)
      .map(value => {
        return {
          jumper: jumpers.find(el => el.getFullName() === value.jumper),
          points: value.points };
      });
  }

  static sortStartingList(startingList: Jumper[]) {
    const jumpersNotInStandings = startingList.filter(el => this.standings.find(value => value.jumper === el.getFullName()) === undefined);
    const sortedList = startingList
      .filter(el => this.standings.find(value => value.jumper === el.getFullName()) !== undefined)
      .map(value => this.standings.filter(el => el.jumper === value.getFullName())[0])
      .sort(((a, b) => b.points - a.points))
      .map(value => startingList.filter(el => el.getFullName() === value.jumper)[0]);
    sortedList.push(...jumpersNotInStandings);
    return sortedList.reverse();
  }
}
