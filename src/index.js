import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { Provider } from 'react-redux';
import { Store } from './Redux';
import './index.css';

ReactDOM.render(
  <Provider store={Store}><Routes /></Provider>,
  document.getElementById('root')
);


