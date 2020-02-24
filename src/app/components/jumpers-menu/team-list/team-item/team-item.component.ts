import {Component, Input, OnInit} from '@angular/core';
import {Team} from '../../../../models/team.model';
import {Jumper} from '../../../../models/jumper.model';
import {JumperRepository} from '../../../../repos/jumper-repository';
import * as fromApp from '../../../../store/app.reducers';
import {Store} from '@ngrx/store';
import * as AppActions from '../../../../store/app.actions';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-team-item',
  templateUrl: './team-item.component.html',
  styleUrls: ['./team-item.component.css']
})
export class TeamItemComponent implements OnInit {

  @Input() team: Team;
  private jumpers: Jumper[];
  private showJumperList: boolean;
  appState: Observable<fromApp.State>;

  constructor(private jumperRepository: JumperRepository, private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.jumpers = this.jumperRepository.getJumpersFromTeam(this.team);
    this.appState = this.store.select('app');
  }

  onTeamClicked() {
    this.showJumperList = !this.showJumperList;
  }

  getSelectedJumpersCount(allJumpers: Jumper[]) {
    return allJumpers.filter(value => value.team === this.team).length;
  }
}
