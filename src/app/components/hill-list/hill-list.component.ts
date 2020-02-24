import { Component, OnInit } from '@angular/core';
import {Hill} from '../../models/hill.model';
import * as fromApp from '../../store/app.reducers';
import {Store} from '@ngrx/store';
import * as AppActions from '../../store/app.actions';
import {HillRepository} from '../../repos/hill-repository';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-hill-list',
  templateUrl: './hill-list.component.html',
  styleUrls: ['./hill-list.component.css']
})
export class HillListComponent implements OnInit {

  hills: Hill[];
  appState: Observable<fromApp.State>;

  constructor(private store: Store<fromApp.AppState>, private hillRepository: HillRepository) {}

  ngOnInit() {
    this.appState = this.store.select('app');
    this.hills = this.hillRepository.hills;
  }

  onHillClicked(hill: Hill) {
    this.store.dispatch(new AppActions.SetHill(hill));
  }
}
