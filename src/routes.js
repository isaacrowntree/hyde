import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './App';
import Login from './Login';

const Routes = (props) => (
  <BrowserRouter>
    <div>
      <Route path="/" component={App} />
      <Route path="/login" component={Login} />
    </div>
  </BrowserRouter>
);

export default Routes;
