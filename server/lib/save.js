'use strict';
import fs from 'fs';
import git from './git';
import { config } from './../../src/config';

const format = (val) => {
  let splitter = '\\';
  if (val.split(splitter).length === 1) {
    splitter = '/';
  }
  return val.split(splitter).slice(2).join(splitter);
};

const commitAndPush = (file) => (
  new git().commitAndPush(file, _path(config.repository))
);

const save = (file, data, res, save = commitAndPush) => {

  // TODO: ensure that there are no orphaned changes leading to race conditions

  fs.writeFile(file, data, (err, data) => {
    if (err) throw err;
    save(format(file)).then(() => (res.send(true)));
  });
};

const _path = (url) => {
  return `./tmp/${url.substr(url.lastIndexOf('/') + 1)}`;
};

export default save;
