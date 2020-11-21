import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    <div className="m-10">
      <BrowserRouter>
        <Switch>
          {/* <Route path="/signup">
            <SignUp />
          </Route> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
