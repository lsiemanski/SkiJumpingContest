import {NgModule} from '@angular/core';
import {TeamRepository} from './team-repository';
import {JumperRepository} from './jumper-repository';
import {HillRepository} from './hill-repository';

@NgModule({
  providers: [
    TeamRepository,
    JumperRepository,
    HillRepository
  ]
})
export class ReposModule {}
