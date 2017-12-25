import { compose, createStore } from 'redux';
import { config } from './config';
import persistState from 'redux-localstorage';

export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

export const Reducer =
    (state = {
      auth: {authenticated: false, failed: false},
      msg: {success: '', error: ''}
    }, action) =>
{
  if (action.type === AUTHENTICATE) {
    if (action.payload !== config.password) {
      return Object.assign({}, state, {authenticated: false, failed: true});
    }
    return Object.assign({}, state, {auth: {authenticated: true, failed: false}});
  }
  if (action.type === LOGOUT) {
    return Object.assign({}, state, {auth: {authenticated: false}});
  }
  if (action.type === SUCCESS) {
    return Object.assign({}, state, {msg: {success: action.payload, error: ''}});
  }
  if (action.type === ERROR) {
    return Object.assign({}, state, {msg: {success: '', error: action.payload}});
  }
  return state;
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
