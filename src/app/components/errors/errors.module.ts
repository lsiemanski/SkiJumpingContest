import {NgModule} from '@angular/core';
import {ContestAlreadyStartedComponent} from './contest-already-started/contest-already-started.component';
import {ContestNotStartedComponent} from './contest-not-started/contest-not-started.component';
import {InvalidSetupComponent} from './invalid-setup/invalid-setup.component';
import {ErrorsRoutingModule} from './errors-routing.module';

@NgModule({
  declarations: [
    ContestAlreadyStartedComponent,
    ContestNotStartedComponent,
    InvalidSetupComponent
  ],
  imports: [
    ErrorsRoutingModule
  ]
})
export class ErrorsModule {}
