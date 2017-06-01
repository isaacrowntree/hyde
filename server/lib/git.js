'use strict';
import { exec } from 'child-process-promise';

const _commands = {
  clone: 'git clone',
  pull:  'git pull',
  commitAndPush: 'git add . && git commit -m "Hyde Commit" && git push'
};

class Git {
  clone(url, path) {
    return exec(`${_commands.clone} ${url} ${path}`);
  }

  pull(url, path) {
    return exec(`cd ${path} && ${_commands.pull}`);
  }

  commitAndPush(path) {
    return exec(`cd ${path} && ${_commands.commitAndPush}`);
  }
}

export default Git;
