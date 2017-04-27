const exec = require('child-process-promise').exec;

const _commands = {
	clone: 'git clone'
};

class Git {
	constructor(url) {
		this._url = url;
	}

  clone() {
    return exec(`${_commands.clone} ${this._url} ${this._path()}`)
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

  _path() {
  	return `./tmp/${this._url.split(/\//).pop(-1)}`;
  }
}

module.exports = Git;
