'use strict';
import { exec } from 'child_process';

const _commands = {
  clone: 'git clone'
};

class Git {
  constructor(resolve) {
    this.resolve = resolve;
  }

  clone(url, path) {
    exec(`${_commands.clone} ${url} ${path}`, (err, stdout, stderr) => {
      if (err) {
        return;
      }
      this.resolve(true);
    });
  }
}

export default Git;
