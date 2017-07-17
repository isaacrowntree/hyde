import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './App';
import Login from './Login';

const Routes = (props) => (
  <BrowserRouter>
    <div>
      <Route path="/" component={Login} />
      <Route path="/app" component={App} />
    </div>
  </BrowserRouter>
);

export default Routes;
