import { call, put, takeLatest } from 'redux-saga/effects';
import generateFact from '../../api/generatorApis';

import * as actions from '../actions/actions';
import * as types from '../actions/actionTypes';

function* generateValueFlow(action) {
  try {
    yield put(actions.generateFactInProgressAction());
    const fact = yield call(generateFact, action.seed);
    yield put(actions.generateFactSucceededAction(fact));
  } catch (error) {
    yield put(actions.generateFactFailedAction());
  }
}

export default function* generatorSagas() {
  yield takeLatest(types.GENERATE_FACT, generateValueFlow);
}
