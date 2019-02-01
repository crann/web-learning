import { fromJS } from 'immutable';
import * as types from '../actions/actionTypes';

const initialState = fromJS({
  inProgress: false,
  hasSucceeded: false,
  hasFailed: false,
  fact: '',
});

export default function (state = initialState, action) {
  switch (action.type) {
    case types.GENERATE_FACT_IN_PROGRESS:
      return state
        .set('inProgress', true)
        .set('hasSucceeded', false)
        .set('hasFailed', false);
    case types.GENERATE_FACT_SUCCEEDED:
      return state
        .set('inProgress', false)
        .set('hasSucceeded', true)
        .set('hasFailed', false)
        .set('fact', action.fact);
    case types.GENERATE_FACT_FAILED:
      return state
        .set('inProgress', false)
        .set('hasSucceeded', false)
        .set('hasFailed', true);
    default:
      return state;
  }
}
