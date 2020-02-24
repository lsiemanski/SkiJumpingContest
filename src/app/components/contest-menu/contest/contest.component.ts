import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Observable} from 'rxjs';
import * as fromApp from '../../../store/app.reducers';
import {Store} from '@ngrx/store';
import * as AppActions from '../../../store/app.actions';

@Component({
  selector: 'app-contest',
  templateUrl: './contest.component.html',
  styleUrls: ['./contest.component.css']
})
export class ContestComponent implements OnInit {

  @ViewChild('f', {static: false}) resultForm: NgForm;
  @ViewChild('lengthInput', {static: false}) lengthInput: ElementRef;
  appState: Observable<fromApp.State>;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.appState = this.store.select('app');
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const len = +value.length;
    const notesArr = [+value.note1, +value.note2, +value.note3, +value.note4, +value.note5];
    this.store.dispatch(new AppActions.AddResult({ length: len, notes: notesArr  }));
    this.lengthInput.nativeElement.focus();
    form.reset();
  }

  onSecondSeriesStart() {
    this.store.dispatch(new AppActions.EndSeries());
  }

  onEndContest() {
    this.store.dispatch(new AppActions.EndContest());
  }
}
