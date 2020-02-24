import * as fromApp from '../store/app.reducers';
import {Store} from '@ngrx/store';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {map, take} from 'rxjs/operators';

@Injectable()
export class ContestGuard implements CanActivate {
  constructor(private store: Store<fromApp.AppState>,  private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select('app').pipe(
      take(1),
      map((appState: fromApp.State) => {
          if (appState.contestStarted) {
            return true;
          } else {
            this.router.navigate(['/contestNotStarted']);
            return false;
          }
        }
      )
    );
  }
}
