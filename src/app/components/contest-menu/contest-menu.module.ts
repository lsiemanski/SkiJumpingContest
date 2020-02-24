import {NgModule} from '@angular/core';
import {ContestMenuComponent} from './contest-menu.component';
import {ContestComponent} from './contest/contest.component';
import {JumpersQueueComponent} from './jumpers-queue/jumpers-queue.component';
import {StartingListComponent} from './starting-list/starting-list.component';
import {CurrentJumperDirective} from './contest/contest-results/current-jumper.directive';
import {TimeoutPipe} from './contest/contest-results/timeout.pipe';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
import {ContestMenuRoutingModule} from './contest-menu-routing.module';
import {NoteValidator} from './contest/note-validator.directive';
import {PositiveNumberValidator} from './contest/positive-number-validator.directive';
import { ContestResultsComponent } from './contest/contest-results/contest-results.component';
import { ContestInfoComponent } from './contest/contest-info/contest-info.component';
import { ContestLastResultComponent } from './contest/contest-last-result/contest-last-result.component';

@NgModule({
  declarations: [
    ContestMenuComponent,
    ContestComponent,
    JumpersQueueComponent,
    StartingListComponent,
    CurrentJumperDirective,
    NoteValidator,
    PositiveNumberValidator,
    TimeoutPipe,
    ContestResultsComponent,
    ContestInfoComponent,
    ContestLastResultComponent
  ],
  imports: [
    FormsModule,
    ContestMenuRoutingModule,
    SharedModule
  ]
})
export class ContestMenuModule {}
