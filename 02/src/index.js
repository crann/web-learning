import React from 'react';
import ReactDOM from 'react-dom';

import 'rxjs'; // TODO: Generally bad practice. We should only import the required operators.

import './index.css';
import App from './containers/app/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
