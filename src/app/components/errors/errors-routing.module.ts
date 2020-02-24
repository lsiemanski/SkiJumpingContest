import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContestNotStartedComponent} from './contest-not-started/contest-not-started.component';
import {ContestAlreadyStartedComponent} from './contest-already-started/contest-already-started.component';
import {InvalidSetupComponent} from './invalid-setup/invalid-setup.component';

const errorsRouting: Routes = [
  { path: 'contestNotStarted', component: ContestNotStartedComponent},
  { path: 'contestAlreadyStarted', component: ContestAlreadyStartedComponent},
  { path: 'invalidSetup', component: InvalidSetupComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(errorsRouting)
  ],
  exports: [
    RouterModule
  ]
})
export class ErrorsRoutingModule {}
