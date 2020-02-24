import {Injectable} from '@angular/core';
import {Effect, Actions, ofType} from '@ngrx/effects';
import {Router} from '@angular/router';
import * as AppActions from './app.actions';
import * as fromApp from './app.reducers';
import { tap, withLatestFrom} from 'rxjs/operators';
import {Store} from '@ngrx/store';

@Injectable()
export class AppEffects {
  @Effect({dispatch: false})
  startContest = this.actions$.pipe(
    ofType(AppActions.START_CONTEST),
    withLatestFrom(this.store$.select('app')),
    tap(([action, appState]) => {
      if (appState.hill === null || appState.selectedJumpers === undefined || appState.selectedJumpers.length === 0) {
        this.router.navigate(['/invalidSetup']);
      } else {
        this.router.navigate(['/contest']);
      }
    })
  );

  @Effect({dispatch: false})
  endContest = this.actions$.pipe(
    ofType(AppActions.END_CONTEST),
    tap(() => {
      this.router.navigate(['/']);
    })
  );

  constructor(private actions$: Actions, private store$: Store<fromApp.AppState>, private router: Router) {}
}
