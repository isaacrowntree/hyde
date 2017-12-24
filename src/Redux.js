import { createStore } from 'redux';
import { config } from './config';

export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';

export const Reducer = (state = {authenticated: false, failed: false}, action) => {
  if (action.type === AUTHENTICATE) {
    const outcome = action.payload === config.password;
    if (!outcome) {
      return Object.assign({}, state, {authenticated: false, failed: true});
    }
    return Object.assign({}, state, {authenticated: true, failed: false});
  }
  if (action.type === LOGOUT) {
    return Object.assign({}, state, {authenticated: false});
  }
  return state;
};

export const Store = createStore(
  Reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
