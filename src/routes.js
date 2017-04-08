import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './App';

const Routes = (props) => (
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>
);

export default Routes;