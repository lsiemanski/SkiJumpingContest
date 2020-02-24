import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HillListComponent} from './components/hill-list/hill-list.component';
import {SetupGuard} from './shared/setup-guard';

const appRoutes: Routes = [
  { path: 'hills', component: HillListComponent, canActivate: [SetupGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
