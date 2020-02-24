import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {JumpersMenuComponent} from './jumpers-menu.component';
import {TeamListComponent} from './team-list/team-list.component';
import {StandingsComponent} from './standings/standings.component';
import {SetupGuard} from '../../shared/setup-guard';

const jumpersMenuRoutes: Routes = [
  { path: 'jumpers', component: JumpersMenuComponent, children: [
      { path: 'teams', component: TeamListComponent},
      { path: 'standings', component: StandingsComponent}
    ], canActivate: [SetupGuard]},
];

@NgModule({
  imports: [
    RouterModule.forChild(jumpersMenuRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class JumpersMenuRoutingModule {}
