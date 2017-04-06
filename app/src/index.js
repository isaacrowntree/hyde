import React from 'react';
import  { render } from 'react-dom';
import { browserHistory, Router, Route } from 'react-router';
import App from './App';
import './index.css';

render(
  <Router history={browserHistory}>
  	<Route path="/" component={App} />
  </Router>,
  document.getElementById('root')
);


