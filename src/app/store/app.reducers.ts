import {Jumper} from '../models/jumper.model';
import * as AppActions from './app.actions';
import {ContestResult} from '../models/contest-result.model';
import {Hill} from '../models/hill.model';
import {JumpResult} from '../models/result.model';
import {ActionReducerMap} from '@ngrx/store';
import {StandingsRepository} from '../repos/standings-repository';

export interface AppState {
  app: State;
}

export const reducers: ActionReducerMap<AppState> = {
  app: appReducer
};

export interface State {
  hill: Hill;
  selectedJumpers: Jumper[];
  startingList: {startingNumber: number, jumper: Jumper}[];
  jumperQueue: Jumper[];
  results: {rank: number, result: ContestResult}[];
  lastResult: {rank: number, result: ContestResult};
  contestStarted: boolean;
  secondSeriesStarted: boolean;
}

const initialState: State = {
  hill: null,
  selectedJumpers: [],
  startingList: [],
  jumperQueue: [],
  results: [],
  lastResult: null,
  contestStarted: false,
  secondSeriesStarted: false
};

export function appReducer(state: State = initialState, action: AppActions.AppActions): State {
  switch (action.type) {
    case (AppActions.SELECT_JUMPER):
      const jumperIndex = state.selectedJumpers.indexOf(action.payload);
      const oldSelectedJumpers = [...state.selectedJumpers];
      if (jumperIndex === -1) {
        oldSelectedJumpers.push(action.payload);
      } else {
        oldSelectedJumpers.splice(jumperIndex, 1);
      }
      return {
        ...state,
        selectedJumpers: oldSelectedJumpers
      };
    case (AppActions.SET_SELECTED_JUMPERS):
      return {
        ...state,
        selectedJumpers: [...action.payload]
      };
    case (AppActions.SET_HILL):
      return {
        ...state,
        hill: action.payload
      };
    case (AppActions.START_CONTEST):
      if (state.hill === null || state.selectedJumpers === undefined || state.selectedJumpers.length === 0) {
        return {
          ...state
        };
      } else {
        const newStartingList = StandingsRepository.sortStartingList(state.selectedJumpers).map((value, index) => {
          return {startingNumber: index + 1, jumper: value};
        });
        return {
          ...state,
          startingList: newStartingList,
          jumperQueue: newStartingList.map(value => value.jumper),
          contestStarted: true
        };
      }
    case (AppActions.ADD_RESULT):
      const jumpResult = countResult(action.payload.length, action.payload.notes, state.hill);
      const currentJumper = state.jumperQueue.splice(0, 1)[0];
      const newResults = [...state.results];
      const latestContestResult = createOrUpdateContestResult(jumpResult, currentJumper, newResults);
      const sortedResults = sortContestResults(newResults);
      const latestResultWithRank = sortedResults.find(value => value.result === latestContestResult);
      return {
        ...state,
        results: sortedResults,
        lastResult: latestResultWithRank,
        jumperQueue: [...state.jumperQueue]
      };
    case (AppActions.END_SERIES):
      const filteredJumpers = state.results.length >= 30 ?
        state.results
          .filter(val => val.result.getTotalNote() >= state.results[29].result.getTotalNote())
          .map(val => val.result.jumper).reverse() :
        state.results
          .map(val => val.result.jumper).reverse();
      return {
        ...state,
        jumperQueue: filteredJumpers,
        secondSeriesStarted: true
      };
    case (AppActions.END_CONTEST):
      console.log(JSON.stringify(state.results.map(value => {
        return {rank: value.rank, jumper: value.result.jumper.getFullName(), total: value.result.getTotalNote()};
      }), undefined, 2));
      console.log(JSON.stringify(state.results, undefined, 2)); // to debug purposes only
      return {
        ...initialState
      };
    default:
      return state;
  }
}

function acceptNotes(notes: number[]): {value: number, accepted: boolean}[] {
  const sortedNotes = notes.slice().sort((a, b) => a - b);
  const result = [];
  for (const note of notes) {
    result.push({value: note, accepted: true});
  }
  result.filter(el => el.value === sortedNotes[0])[0].accepted = false;
  result.filter(el => el.value === sortedNotes[4] && el.accepted)[0].accepted = false;
  return result;
}

function countResult(length: number, notes: number[], hill: Hill): JumpResult {
  const acceptedNotes = acceptNotes(notes);
  const jumpResult = new JumpResult(
    acceptedNotes,
    length,
    hill.pointsCounting.countTotalNote(hill.kPoint, length, acceptedNotes.filter(el => el.accepted).map(el => el.value)));
  return jumpResult;
}

function createOrUpdateContestResult(jumpResult: JumpResult, jumper: Jumper, results: {rank: number, result: ContestResult}[]): ContestResult {
  const index = results.findIndex(val => val.result.jumper === jumper);
  const contestResult = index > -1 ? results[index].result : new ContestResult(jumper, []);
  contestResult.jumps.push(jumpResult);
  if (index === -1) {
    results.push({rank: 0, result: contestResult});
  }
  return contestResult;
}

function sortContestResults(results: {rank: number, result: ContestResult}[]): {rank: number, result: ContestResult}[] {
  const sortedResults = results.slice().map(val => val.result).sort((a, b) => b.getTotalNote() - a.getTotalNote());
  const newResults = [];
  for (const element of sortedResults) {
    newResults.push({rank: sortedResults.findIndex(val => val.getTotalNote() === element.getTotalNote()) + 1, result: element});
  }
  return newResults;
}
