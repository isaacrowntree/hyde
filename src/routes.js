import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import App from './App';
import Login from './Login';

const Routes = (props) => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
