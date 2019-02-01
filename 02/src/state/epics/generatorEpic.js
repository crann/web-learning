import { Observable } from 'rxjs/Observable';

import * as actions from '../actions/actions';
import * as types from '../actions/actionTypes';

export default (action$, store, { ajax }) =>
  action$.ofType(types.GENERATE_FACT)
    .switchMap(action =>
      ajax({
        url: `http://numbersapi.com/${action.seed}`,
        method: 'GET',
        responseType: 'text',
      }).map(data => actions.generateFactSucceededAction(data.response))
        .catch(() => Observable.of(actions.generateFactFailedAction())));
