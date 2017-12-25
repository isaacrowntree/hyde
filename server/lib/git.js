'use strict';
import { exec } from 'child-process-promise';
import { config } from './../../src/config';

const _commands = {
  email: 'git config --global user.email "<email>"',
  name: 'git config --global user.name "<name>"',
  clone: 'git clone',
  pull: 'git pull',
  commitAndPush: 'git add . && git commit -m "Hyde Update <filename>" && git push'
};

class Git {
  clone(url, path) {
    exec(`cd ${path} && ${_commands.email.replace('<email>', config.email)}`);
    exec(`cd ${path} && ${_commands.name.replace('<name>', config.name)}`);
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
