'use strict';
import dir from 'node-dir';
import git from './git';
import fs from 'fs';

const cloneRepository = (url, path) => (
  new git().clone(url, path)
);

const pullRepository = (url, path) => (
  new git().pull(url, path)
);

const getFiles = (repository, res) => {
  dir.files(_path(repository), (err, files) => {
    if (err) throw err;
    res.send(files);
  });
};

const files = (repository, res, clone = cloneRepository, pull = pullRepository) => {
  let path = _path(repository);

  if (!fs.existsSync(path)) {
    return clone(repository, path).then((stdout, stderr) => (
      getFiles(repository, res)
    ));
  } else {
    return pull(repository, path).then((stdout, stderr) => (
      getFiles(repository, res)
    ));
  }
};

const _path = (url) => {
  return `./tmp/${url.substr(url.lastIndexOf('/') + 1)}`;
};

export default files;
