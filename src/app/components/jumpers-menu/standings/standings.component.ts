import { Component, OnInit } from '@angular/core';
import * as fromApp from '../../../store/app.reducers';
import {Store} from '@ngrx/store';
import * as AppActions from '../../../store/app.actions';
import {Observable} from 'rxjs';
import {JumperRepository} from '../../../repos/jumper-repository';
import {Jumper} from '../../../models/jumper.model';
import {StandingsRepository} from '../../../repos/standings-repository';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {

  appState: Observable<fromApp.State>;
  standings: {jumper: Jumper, points: number}[];

  constructor(private store: Store<fromApp.AppState>, private jumperRepository: JumperRepository) {}

  ngOnInit() {
    this.appState = this.store.select('app');
    this.standings = StandingsRepository.getStandings(this.jumperRepository.jumpers).filter(value => value.jumper !== undefined);
  }

  onRowClicked(jumper: Jumper) {
    this.store.dispatch(new AppActions.SelectJumper(jumper));
  }

  onSelectFirst50() {
    const first50 = this.standings.map(value => value.jumper).slice(0, 50);
    this.store.dispatch(new AppActions.SetSelectedJumpers(first50));
  }
}
