import { createStore } from 'redux';

export const AUTHENTICATE = 'AUTHENTICATE';

export const Reducer = (state = { authenticated: false }, action) => {
  if (action.type === AUTHENTICATE) {
    return Object.assign({}, state, {authenticated: true});
  }
  return state;
};

export const Store = createStore(
  Reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
