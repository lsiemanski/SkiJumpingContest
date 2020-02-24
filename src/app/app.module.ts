import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store/app.reducers';
import { HeaderComponent } from './components/header/header.component';
import {AppRoutingModule} from './app-routing.module';
import { HillListComponent } from './components/hill-list/hill-list.component';
import {ContestGuard} from './shared/contest-guard';
import {SetupGuard} from './shared/setup-guard';
import {EffectsModule} from '@ngrx/effects';
import {AppEffects} from './store/app.effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {ContestMenuModule} from './components/contest-menu/contest-menu.module';
import {SharedModule} from './shared/shared.module';
import {ReposModule} from './repos/repos.module';
import {JumpersMenuModule} from './components/jumpers-menu/jumpers-menu.module';
import {ErrorsModule} from './components/errors/errors.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HillListComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    ContestMenuModule,
    ReposModule,
    JumpersMenuModule,
    ErrorsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AppEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    ContestGuard,
    SetupGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
