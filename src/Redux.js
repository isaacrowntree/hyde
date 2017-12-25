import { compose, createStore } from 'redux';
import { config } from './config';
import persistState from 'redux-localstorage';
import CryptoJS from 'crypto-js';

export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';
export const SUCCESS = 'SUCCESS';
export const NO_RESPONSE = 'NO_RESPONSE';
export const NOT_AVAILABLE = 'NOT_AVAILABLE';

export const comparePassword = (password) => {
  const bytes = CryptoJS.AES.decrypt(config.password, config.salt);
  return bytes.toString(CryptoJS.enc.Utf8) === password;
};

export const Reducer =
    (state = {
      auth: {authenticated: false, failed: false},
      publish: {success: false, noResponse: false, notAvailable: false}
    }, action) =>
{
  if (action.type === AUTHENTICATE) {
    if (!comparePassword(action.payload)) {
      return Object.assign({}, state, {auth: {authenticated: false, failed: true}});
    }
    return Object.assign({}, state, {auth: {authenticated: true, failed: false}});
  }
  if (action.type === LOGOUT) {
    return Object.assign({}, state, {auth: {authenticated: false}});
  }
  if (action.type === SUCCESS) {
    return Object.assign({}, state, {publish: {success: true, noResponse: false, notAvailable: false}});
  }
  if (action.type === NO_RESPONSE) {
    return Object.assign({}, state, {publish: {success: false, noResponse: true, notAvailable: false}});
  }
  if (action.type === NOT_AVAILABLE) {
    return Object.assign({}, state, {publish: {success: false, noResponse: false, notAvailable: true}});
  }
  return state;
};

let enhancer = compose();

if (config.environment !== 'test') {
  enhancer = compose(
    persistState(),
  );
}

export const Store = createStore(
  Reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  enhancer,
);
