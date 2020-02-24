import {Component, OnInit} from '@angular/core';
import {Team} from '../../../models/team.model';
import {TeamRepository} from '../../../repos/team-repository';
import * as fromApp from '../../../store/app.reducers';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  private teams: Team[] = this.teamRepository.teams;
  appState: Observable<fromApp.State>;

  constructor(private teamRepository: TeamRepository, private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.appState = this.store.select('app');
  }

}
