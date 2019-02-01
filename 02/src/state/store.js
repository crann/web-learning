import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { ajax } from 'rxjs/observable/dom/ajax';

import rootReducer from './reducers';
import rootEpic from './epics';

const configureStore = () => {
  const epicMiddleware = createEpicMiddleware(rootEpic, {
    dependencies: { ajax }, 
  });

  return createStore(rootReducer, applyMiddleware(epicMiddleware));
};

export default configureStore;
