// .env.local is auto-loaded by react-scripts in ./src
// in ./server config is used as well but we have to dotenv manually
if (process.env.NODE_ENV !== 'production' && !process.env.REACT_APP_GIT_REPO) {
  require('dotenv').config({path: '.env.local'});
}

var CryptoJS = require('crypto-js');
var bytes = CryptoJS.AES.decrypt(process.env.REACT_APP_GIT_REPO, process.env.REACT_APP_SALT);
var gitRepoUrl = bytes.toString(CryptoJS.enc.Utf8);
bytes = CryptoJS.AES.decrypt(process.env.REACT_APP_PASSWORD, process.env.REACT_APP_SALT);
var password = bytes.toString(CryptoJS.enc.Utf8);

var port = process.env.PORT || 3001;

var config = {
  name: process.env.REACT_APP_NAME,
  email: process.env.REACT_APP_EMAIL,
  port: port,
  environment: process.env.NODE_ENV,
  repository: gitRepoUrl,
  url: (process.env.NODE_ENV === 'production' ? '' : 'http://localhost:' + port),
  password: password,
};

module.exports = { config: config };
