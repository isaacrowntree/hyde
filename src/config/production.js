var port = process.env.PORT || 3001;

var config = {
  port: port,
  environment: process.env.NODE_ENV,
  repository: process.env.REACT_APP_GIT_REPO,
  url: (process.env.NODE_ENV === 'production' ? '' : 'http://localhost:' + port),
  password: process.env.REACT_APP_PASSWORD,
  salt: process.env.REACT_APP_SALT,
};

module.exports = { config: config };
