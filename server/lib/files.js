const dir = require('node-dir');

const files = (repository, res) => {
  dir.files(_path(repository), function(err, files) {
    if (err) throw err;
    res.send(files);
  });
};


// DRY!
const _path = (url) => {
  return `./tmp/${url.substr(url.lastIndexOf('/') + 1)}`;
};

module.exports = files;
