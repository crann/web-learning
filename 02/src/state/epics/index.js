import { combineEpics } from 'redux-observable';

import generatorEpic from './generatorEpic';

export default combineEpics(generatorEpic);
