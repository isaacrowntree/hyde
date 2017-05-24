'use strict';
import { exec } from 'child-process-promise';

const _commands = {
  clone: 'git clone',
  pull:  'git pull',
};

class Git {
  clone(url, path) {
    return exec(`${_commands.clone} ${url} ${path}`);
  }

  pull(url, path) {
    return exec(`cd ${path} && ${_commands.pull}`);
  }
}

export default Git;
