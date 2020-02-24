import { Component, OnInit } from '@angular/core';
import * as fromApp from '../../../store/app.reducers';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-starting-list',
  templateUrl: './starting-list.component.html',
  styleUrls: ['./starting-list.component.css']
})
export class StartingListComponent implements OnInit {
  appState: Observable<fromApp.State>;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.appState = this.store.select('app');
  }

}
