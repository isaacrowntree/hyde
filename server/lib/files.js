const dir = require('node-dir');

const files = (repository, res) => {
  dir.files(_path(repository), function(err, files) {
    if (err) throw err;
    res.send(files);
  });
};

const _path = (url) => {
  return `./tmp/${url.split(/\//).pop(-1)}`;
};

module.exports = files;
