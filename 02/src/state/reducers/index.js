import { combineReducers } from 'redux-immutable';

import generator from './generatorReducer';

const rootReducer = combineReducers({
  generator,
});

export default rootReducer;
