'use strict';
import fs from 'fs';
import git from './git';
import { config } from './../../src/config';

const commitAndPush = () => (
  new git().commitAndPush(_path(config.repository))
);

const save = (file, data, res, save = commitAndPush) => {

  // TODO: ensure that there are no orphaned changes leading to race conditions

  fs.writeFile(file, data, (err, data) => {
    if (err) throw err;
    save().then(() => (res.send(true)));
  });
};

const _path = (url) => {
  return `./tmp/${url.substr(url.lastIndexOf('/') + 1)}`;
};

export default save;
