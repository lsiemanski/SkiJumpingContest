import { Action } from '@ngrx/store';
import { Jumper } from '../models/jumper.model';
import { Hill } from '../models/hill.model';

export const SELECT_JUMPER = 'SELECT_JUMPER';
export const SET_SELECTED_JUMPERS = 'SET_SELECTED_JUMPERS';
export const SET_HILL = 'SET_HILL';
export const START_CONTEST = 'START_CONTEST';
export const ADD_RESULT = 'ADD_RESULT';
export const END_SERIES = 'END_SERIES';
export const END_CONTEST = 'END_CONTEST';

export class SelectJumper implements Action {
  readonly type = SELECT_JUMPER;

  constructor(public payload: Jumper) {}
}

export class SetSelectedJumpers implements Action {
  readonly type = SET_SELECTED_JUMPERS;

  constructor(public payload: Jumper[]) {}
}

export class SetHill implements Action {
  readonly type = SET_HILL;

  constructor(public payload: Hill) {}
}

export class StartContest implements Action {
  readonly type = START_CONTEST;

  constructor() {}
}

export class AddResult implements Action {
  readonly type = ADD_RESULT;

  constructor(public payload: {length: number, notes: number[]}) {}
}

export class EndSeries implements Action {
  readonly type = END_SERIES;

  constructor() {}
}

export class EndContest implements Action {
  readonly type = END_CONTEST;

  constructor() {}
}

export type AppActions = SelectJumper | SetSelectedJumpers | SetHill | StartContest | AddResult | EndSeries | EndContest;
