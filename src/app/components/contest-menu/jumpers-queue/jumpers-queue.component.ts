import { Component, OnInit } from '@angular/core';
import * as fromApp from '../../../store/app.reducers';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-jumpers-queue',
  templateUrl: './jumpers-queue.component.html',
  styleUrls: ['./jumpers-queue.component.css']
})
export class JumpersQueueComponent implements OnInit {
  appState: Observable<fromApp.State>;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.appState = this.store.select('app');
  }

}
