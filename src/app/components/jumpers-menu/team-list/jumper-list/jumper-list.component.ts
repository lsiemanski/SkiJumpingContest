import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Jumper} from '../../../../models/jumper.model';
import * as fromApp from '../../../../store/app.reducers';
import {Store} from '@ngrx/store';
import * as AppActions from '../../../../store/app.actions';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-player-list',
  templateUrl: './jumper-list.component.html',
  styleUrls: ['./jumper-list.component.css']
})
export class JumperListComponent implements OnInit {
  @Input() jumpers: Jumper[];
  appState: Observable<fromApp.State>;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.appState = this.store.select('app');
  }

  onJumperSelected(jumper: Jumper) {
    this.store.dispatch(new AppActions.SelectJumper(jumper));
  }

}
