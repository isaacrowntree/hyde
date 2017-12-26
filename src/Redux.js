import { compose, createStore } from 'redux';
import { config } from './config';
import persistState from 'redux-localstorage';

export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

const defaultState = {
  auth: {
    authenticated: false,
    failed: false,
  },
  msg: {
    success: '',
    error: '',
  },
};

export const Reducer = (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    // Authentication actions
    case AUTHENTICATE:
      if (payload !== config.password) {
        return Object.assign({}, state, {auth: {authenticated: false, failed: true}});
      }
      return Object.assign({}, state, {auth: {authenticated: true, failed: false}});
    case LOGOUT:
      return Object.assign({}, state, {auth: {authenticated: false}});
    // App notifications
    case SUCCESS:
      return Object.assign({}, state, {msg: {success: payload, error: ''}});
    case ERROR:
      return Object.assign({}, state, {msg: {success: '', error: payload}});
    default:
      return state;
  }
};

let enhancer = compose();

if (config.environment !== 'test') {
  enhancer = compose(
    persistState('auth'),
  );
}

export const Store = createStore(
  Reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  enhancer,
);
