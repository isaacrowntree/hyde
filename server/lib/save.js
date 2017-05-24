'use strict';
import fs from 'fs';
import git from './git';
import { config } from './../config';

const commitAndPush = () => (
  new git().commitAndPush(_path(config.repository))
);

const save = (file, data, res) => {

  // TODO: ensure that there are no orphaned changes

  fs.writeFile(file, data, (err, data) => {
    if (err) throw err;
    commitAndPush().then(() => (res.send(true)));
  });
};

const _path = (url) => {
  return `./tmp/${url.substr(url.lastIndexOf('/') + 1)}`;
};

export default save;
