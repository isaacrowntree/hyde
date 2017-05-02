const _exec = require('child-process-promise').exec;

const _commands = {
	clone: 'git clone'
};

class Git {
	constructor(exec = _exec) {
    this.exec = exec;
	}

  clone(url) {
    return this.exec(`${_commands.clone} ${url} ${this._path(url)}`)
	    .then(function(result) {
	    	const stdout = result.stdout;
	    	const stderr = result.stderr;
	    	console.log('stdout: ', stdout);
	    	console.log('stderr: ', stderr);
	    })
	    .catch(function (err) {
	    	console.error('ERROR: ', err);
	    });
  }

  _path(url) {
  	return `./tmp/${url.split(/\//).pop(-1)}`;
  }
}

module.exports = Git;
