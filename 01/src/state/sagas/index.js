import { fork } from 'redux-saga/effects';
import generatorSagas from './generatorSagas';

export default function* rootSaga() {
  yield fork(generatorSagas);
}
