import { Component } from '@angular/core';
import {Jumper} from './models/jumper.model';
import {Hill} from './models/hill.model';
import {JumperRepository} from './repos/jumper-repository';
import {HillRepository} from './repos/hill-repository';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private jumperRepository: JumperRepository, private hillRepository: HillRepository) {}

  hill: Hill = this.hillRepository.hills[0];
  jumpers: Jumper[] = this.jumperRepository.jumpers.slice(0, 3);
  //   [
  //   new Jumper('Adam Małysz', 'POL'),
  //   new Jumper('Janne Ahonen', 'FIN'),
  //   new Jumper('Roar Ljokelsoey', 'NOR'),
  //   new Jumper('Andreas Widholzl', 'AUT'),
  //   new Jumper('Thomas Morgenstern', 'AUT'),
  //   new Jumper('Simon Ammann', 'SUI'),
  //   new Jumper('Gregor Schlierenzauer', 'AUT'),
  //   new Jumper('Anders Jacobsen', 'NOR')
  // ];

  // hill = new Hill('Kuusamo', 'FIN', 'Rukatunturi', 120, 142, new LargeHillPointsCounting());
  // hill = new Hill('Villach', 'AUT', 'Alpenarena', 90, 98, new NormalHillPointsCounting());
  // hill = new Hill('Planica', 'SLO', 'Velikanka', 185, 215, new FlyingHillPointsCounting());
}
