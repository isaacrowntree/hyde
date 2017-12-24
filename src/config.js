var port = process.env.PORT || 3001;

var config = {
  port: port,
  environment: process.env.NODE_ENV,
  repository: process.env.GIT_REPO,
  url: (process.env.NODE_ENV === 'production' ? '' : 'http://localhost:' + port),
  password: process.env.PASSWORD,
  salt: process.env.SALT,
};

module.exports = { config: config };
