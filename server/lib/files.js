'use strict';
import dir from 'node-dir';
import git from './git';
import fs from 'fs';

const cloneRepository = (url, path, res) => {
  new git(res).clone(url, path);
};

const getFiles = (repository, res) => {
  dir.files(_path(repository), function(err, files) {
    if (err) throw err;
    res.send(files);
  });
};

const files = (repository, res) => {
  let path = _path(repository);

  if (!fs.existsSync(path)) {
    new Promise((resolve, reject) => {
      cloneRepository(repository, path, resolve);
    })
    .then(() => { getFiles(repository, res) });
  } else {
    getFiles(repository, res);
  }
};

const _path = (url) => {
  return `./tmp/${url.substr(url.lastIndexOf('/') + 1)}`;
};

export default files;
