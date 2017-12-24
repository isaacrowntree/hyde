var config = {};

if (process.env.NODE_ENV === 'test') {
  config = require('./config/test.js');
} else if (process.env.NODE_ENV === 'production') {
  config = require('./config/production.js');
} else {
  config = require('./config/development.js');
}

module.exports = config;
