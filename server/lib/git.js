'use strict';
import { exec } from 'child-process-promise';

const _commands = {
  clone: 'git clone',
  pull:  'git pull',
  commitAndPush: 'git add . && git commit -m "Hyde Update <filename>" && git push'
};

class Git {
  clone(url, path) {
    return exec(`${_commands.clone} ${url} ${path}`);
  }

  pull(url, path) {
    return exec(`cd ${path} && ${_commands.pull}`);
  }

  commitAndPush(file, path) {
    return exec(`cd ${path} && ${_commands.commitAndPush.replace('<filename>', file)}`);
  }
}

export default Git;
