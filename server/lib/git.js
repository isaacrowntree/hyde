const _exec = require('child-process-promise').exec;
const fs = require('fs');

const _commands = {
  clone: 'git clone'
};

class Git {
  constructor(exec = _exec) {
    this.exec = exec;
  }

  clone(url, message) {
    const path = this._path(url);

    if (!fs.existsSync(path)) {
      return this.exec(`${_commands.clone} ${url} ${path}`)
        .then(function(result) {
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

module.exports = Git;
