import React, { Component } from 'react';

import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import {
  Provider,
} from 'react-redux';

import 'semantic-ui-css/semantic.min.css';

import './App.css';
import logo from './logo.svg';

import configureStore from '../../state/store';

import HomePage from '../home';
import Generator from '../generator';

class App extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const store = configureStore();

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/Generator" component={Generator} />
            </Switch>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
