import { Component, OnInit } from '@angular/core';
import * as fromApp from '../../store/app.reducers';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import * as AppActions from '../../store/app.actions';

@Component({
  selector: 'app-jumpers-menu',
  templateUrl: './jumpers-menu.component.html',
  styleUrls: ['./jumpers-menu.component.css']
})
export class JumpersMenuComponent implements OnInit {

  appState: Observable<fromApp.State>;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.appState = this.store.select('app');
  }

  onStartContest() {
    this.store.dispatch(new AppActions.StartContest());
  }
}
