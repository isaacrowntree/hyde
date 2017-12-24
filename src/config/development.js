var port = process.env.PORT || 3001;

var config = {
  port: port,
  environment: process.env.NODE_ENV,
  repository: process.env.GIT_REPO || 'https://github.com/suzannahrowntree/suzannahrowntree.site.git',
  url: (process.env.NODE_ENV === 'production' ? '' : 'http://localhost:' + port),
  password: process.env.PASSWORD || 'U2FsdGVkX18wUpOJXxouZJIia87778WefACMzGlAW5I=',
  salt: process.env.SALT || 'test',
};

module.exports = { config: config };
