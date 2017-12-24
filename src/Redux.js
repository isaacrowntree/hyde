import { compose, createStore } from 'redux';
import { config } from './config';
import persistState from 'redux-localstorage';
import CryptoJS from 'crypto-js';

export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';

const comparePassword = (password) => {
  const ciphertext = CryptoJS.AES.encrypt(password, config.salt);
  const bytes = CryptoJS.AES.decrypt(ciphertext.toString(), config.salt);
  return bytes.toString(CryptoJS.enc.Utf8) === password;
};

export const Reducer = (state = {authenticated: false, failed: false}, action) => {
  if (action.type === AUTHENTICATE) {
    if (!comparePassword(action.payload)) {
      return Object.assign({}, state, {authenticated: false, failed: true});
    }
    return Object.assign({}, state, {authenticated: true, failed: false});
  }
  if (action.type === LOGOUT) {
    return Object.assign({}, state, {authenticated: false});
  }
  return state;
};

const enhancer = compose(
  persistState(),
);

export const Store = createStore(
  Reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  enhancer,
);
