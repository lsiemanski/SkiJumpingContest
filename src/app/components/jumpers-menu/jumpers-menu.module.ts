import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {JumpersMenuRoutingModule} from './jumpers-menu-routing.module';
import {JumpersMenuComponent} from './jumpers-menu.component';
import {StandingsComponent} from './standings/standings.component';
import {TeamListComponent} from './team-list/team-list.component';
import {JumperListComponent} from './team-list/jumper-list/jumper-list.component';
import {TeamItemComponent} from './team-list/team-item/team-item.component';

@NgModule({
  declarations: [
    JumpersMenuComponent,
    StandingsComponent,
    TeamListComponent,
    JumperListComponent,
    TeamItemComponent
  ],
  imports: [
    SharedModule,
    JumpersMenuRoutingModule
  ]
})
export class JumpersMenuModule {}
