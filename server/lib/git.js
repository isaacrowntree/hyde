'use strict';
import { exec as _exec } from 'child-process-promise';
import fs from 'fs';

const _commands = {
  clone: 'git clone'
};

class Git {
  constructor(res, exec = _exec) {
    this.exec = exec;
    this.res = res;
  }

  clone(url, message) {
    const path = this._path(url);

    if (!fs.existsSync(path)) {
      return this.exec(`${_commands.clone} ${url} ${path}`)
        .then(function(result) {
          this.res.send(true);
        	//console.log(result.stdout, result.stderr);
        })
        .catch(function (err) {
          //console.error('ERROR: ', err);
        });
    } else {
      return 'Already exists.';
    }
  }

  _path(url) {
    return `./tmp/${url.substr(url.lastIndexOf('/') + 1)}`;
  }
}

export default Git;
