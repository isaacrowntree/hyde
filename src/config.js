var config = {};

if (process.env.NODE_ENV === 'test') {
  config = require('./config/test.js');
} else if (process.env.NODE_ENV === 'development') {
  config = require('./config/development.js');
} else {
  config = require('./config/production.js');
}

module.exports = config;
