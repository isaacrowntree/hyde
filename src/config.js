// Dotenv doesn't auto run for the express server
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
  port: port,
  environment: process.env.NODE_ENV,
  repository: gitRepoUrl,
  url: (process.env.NODE_ENV === 'production' ? '' : 'http://localhost:' + port),
  password: password,
};

module.exports = { config: config };
