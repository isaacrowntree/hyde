'use strict';
import { exec as _exec } from 'child_process';

const _commands = {
  clone: 'git clone'
};

class Git {
  constructor(res, exec = _exec) {
    this.exec = exec;
    this.res = res;
  }

  clone(url, path) {
    this.exec(`${_commands.clone} ${url} ${path}`, (err, stdout, stderr) => {
      if (err) {
        return;
      }
      this.res(true);
    });
  }
}

export default Git;
