import {RouterModule, Routes} from '@angular/router';
import {ContestComponent} from './contest/contest.component';
import {JumpersQueueComponent} from './jumpers-queue/jumpers-queue.component';
import {StartingListComponent} from './starting-list/starting-list.component';
import {ContestMenuComponent} from './contest-menu.component';
import {NgModule} from '@angular/core';
import {ContestGuard} from '../../shared/contest-guard';

const contestMenuRoutes: Routes = [
  {path: 'contest', component: ContestMenuComponent, children: [
    { path: 'results', component: ContestComponent },
    { path: 'jumpers-queue', component: JumpersQueueComponent },
    { path: 'starting-list', component: StartingListComponent }
  ], canActivate: [ContestGuard] }
];

@NgModule({
  imports: [
    RouterModule.forChild(contestMenuRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ContestMenuRoutingModule {}
